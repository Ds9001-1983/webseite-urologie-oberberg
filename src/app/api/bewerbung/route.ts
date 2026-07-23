import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  CHOICE_STEPS,
  CONTACT_PREFS,
  EMAIL_MAX_LENGTH,
  EMAIL_REGEX,
  MIN_ELAPSED_MS,
  NAME_MAX_LENGTH,
  PHONE_REGEX,
  formatAnswers,
  type ApplicationPayload,
} from "@/components/bewerbung/funnel-config";

/**
 * Nimmt Bewerbungen aus dem Klickfunnel entgegen.
 *
 * Versandwege (in dieser Reihenfolge):
 *   1. SMTP (bevorzugt) — sobald SMTP_HOST gesetzt ist, geht die Bewerbung
 *      als E-Mail an BEWERBUNG_TO (z. B. Praxis-Postfach bei Alfahosting).
 *   2. Webhook (Alternative) — BEWERBUNG_WEBHOOK_URL, z. B. n8n.
 *   3. Nur Server-Log — ⚠️ Bewerbungen landen ausschließlich in den Logs.
 *
 * Env-Variablen (.env.local / Vercel):
 *   SMTP_HOST=mail.urologie-oberberg.de   # Alfahosting-Mailserver
 *   SMTP_PORT=587                          # 587 = STARTTLS, 465 = SSL
 *   SMTP_SECURE=false                      # "true" nur bei Port 465
 *   SMTP_USER=bewerbung@urologie-oberberg.de
 *   SMTP_PASS=<Postfach-Passwort>
 *   BEWERBUNG_TO=praxis@urologie-oberberg.de   # Empfänger, Komma-separiert möglich
 *   BEWERBUNG_FROM=<Absender>              # optional, Standard: SMTP_USER
 *   BEWERBUNG_WEBHOOK_URL=…                # optional, nur falls kein SMTP
 *   BEWERBUNG_WEBHOOK_SECRET=…             # optional, Header-Auth für Webhook
 */

export const runtime = "nodejs";

function isValidPayload(body: unknown): body is ApplicationPayload {
  if (typeof body !== "object" || body === null) return false;
  const p = body as Record<string, unknown>;

  for (const step of CHOICE_STEPS) {
    const value = p[step.id];
    if (
      typeof value !== "string" ||
      !step.options.some((o) => o.value === value)
    ) {
      return false;
    }
  }

  if (
    typeof p.name !== "string" ||
    p.name.trim().length < 2 ||
    p.name.trim().length > NAME_MAX_LENGTH
  )
    return false;
  if (typeof p.phone !== "string" || !PHONE_REGEX.test(p.phone.trim()))
    return false;
  if (typeof p.email !== "string" || p.email.trim().length > EMAIL_MAX_LENGTH)
    return false;
  if (p.email.trim() && !EMAIL_REGEX.test(p.email.trim())) return false;
  if (
    p.contactPreference !== null &&
    !CONTACT_PREFS.some((c) => c.value === p.contactPreference)
  )
    return false;
  if (p.consent !== true) return false;
  if (typeof p.website !== "string") return false;

  return true;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface RequestMeta {
  ip: string;
  userAgent: string;
  receivedAt: string;
}

async function sendViaSmtp(
  labels: Record<string, string>,
  meta: RequestMeta
): Promise<void> {
  const port = Number(process.env.SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    ...(process.env.SMTP_USER && {
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS ?? "",
      },
    }),
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 15000,
  });

  const from = process.env.BEWERBUNG_FROM ?? process.env.SMTP_USER ?? "";
  const to = (process.env.BEWERBUNG_TO ?? process.env.SMTP_USER ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const entries = Object.entries(labels);
  const text = [
    "Neue Bewerbung über den Klickfunnel (urologie-oberberg.de/bewerbung)",
    "",
    ...entries.map(([k, v]) => `${k}: ${v}`),
    "",
    "—",
    `Eingegangen: ${meta.receivedAt}`,
    meta.ip && `IP: ${meta.ip}`,
    meta.userAgent && `Browser: ${meta.userAgent}`,
  ]
    .filter(Boolean)
    .join("\n");

  const rows = entries
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#5b6b6a;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0;color:#12332f">${escapeHtml(v)}</td></tr>`
    )
    .join("");
  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:560px">
      <h2 style="color:#12332f;margin:0 0 4px">Neue Bewerbung</h2>
      <p style="color:#5b6b6a;margin:0 0 16px">über den Klickfunnel auf urologie-oberberg.de/bewerbung</p>
      <table style="border-collapse:collapse;font-size:15px">${rows}</table>
      <p style="color:#8a9695;font-size:12px;margin-top:20px">
        Eingegangen: ${escapeHtml(meta.receivedAt)}<br>
        ${meta.ip ? `IP: ${escapeHtml(meta.ip)}<br>` : ""}
        ${meta.userAgent ? `Browser: ${escapeHtml(meta.userAgent)}` : ""}
      </p>
    </div>`;

  const applicantEmail = labels["E-Mail"];
  await transporter.sendMail({
    from: { name: "Bewerbungsfunnel Urologie Oberberg", address: from },
    to,
    subject: `Neue Bewerbung: ${labels["Name"]} – ${labels["Position"]}`,
    ...(applicantEmail &&
      applicantEmail !== "–" && { replyTo: applicantEmail }),
    text,
    html,
  });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }
  const payload = body;

  // Spam-Gates: Honeypot gefüllt oder verdächtig schnell abgeschickt.
  // Stille Annahme, um Bots keinen Hinweis zu geben.
  // elapsedMs wird komplett client-seitig gemessen (eine einzige Uhr) statt
  // gegen die Server-Uhr verglichen — sonst würden Bewerbungen von Geräten
  // mit falsch eingestellter Uhrzeit fälschlich als "zu schnell" verworfen.
  const elapsedMs = (body as { elapsedMs?: unknown }).elapsedMs;
  const tooFast = typeof elapsedMs !== "number" || elapsedMs < MIN_ELAPSED_MS;
  if (payload.website !== "" || tooFast) {
    return NextResponse.json({ ok: true });
  }

  const labels = Object.fromEntries(formatAnswers(payload));
  const meta: RequestMeta = {
    ip: req.headers.get("x-forwarded-for") ?? "",
    userAgent: req.headers.get("user-agent") ?? "",
    receivedAt: `${new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
    })} Uhr (${new Date().toISOString()})`,
  };

  if (process.env.SMTP_HOST) {
    try {
      await sendViaSmtp(labels, meta);
      console.log("[bewerbung] Per E-Mail versendet:", labels.Name);
      return NextResponse.json({ ok: true });
    } catch (err) {
      // Bewerbung darf nie verloren gehen — vollständig loggen
      console.error("[bewerbung] SMTP-Versand fehlgeschlagen:", err, labels);
      return NextResponse.json(
        { ok: false, error: "delivery_failed" },
        { status: 502 }
      );
    }
  }

  const webhookUrl = process.env.BEWERBUNG_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(process.env.BEWERBUNG_WEBHOOK_SECRET && {
            "x-webhook-secret": process.env.BEWERBUNG_WEBHOOK_SECRET,
          }),
        },
        body: JSON.stringify({ ...payload, labels, meta }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`Webhook antwortete mit ${res.status}`);
      console.log("[bewerbung] Übermittelt an Webhook:", labels.Name);
      return NextResponse.json({ ok: true });
    } catch (err) {
      // Bewerbung darf nie verloren gehen — vollständig loggen
      console.error("[bewerbung] Webhook-Versand fehlgeschlagen:", err, labels);
      return NextResponse.json(
        { ok: false, error: "delivery_failed" },
        { status: 502 }
      );
    }
  }

  // Kein Versand konfiguriert: Bewerbung landet nur im Server-Log.
  console.warn(
    "[bewerbung] ⚠️ KEIN VERSAND KONFIGURIERT (weder SMTP_HOST noch BEWERBUNG_WEBHOOK_URL gesetzt). Bewerbung nur im Log:",
    labels
  );
  return NextResponse.json({ ok: true });
}
