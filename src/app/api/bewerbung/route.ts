import { NextResponse } from "next/server";
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
 * Versand: Solange BEWERBUNG_WEBHOOK_URL nicht gesetzt ist, wird die Bewerbung
 * nur im Server-Log ausgegeben (bewusste Entscheidung: "erstmal ohne Versand").
 * ⚠️ Vor dem Kampagnen-Start MUSS der Webhook konfiguriert werden, sonst
 * landen Bewerbungen ausschließlich in den Logs.
 *
 * Env-Variablen (.env.local / Hosting):
 *   BEWERBUNG_WEBHOOK_URL=https://<n8n-host>/webhook/bewerbung-urologie
 *   BEWERBUNG_WEBHOOK_SECRET=<zufälliger String>   # optional, Header-Auth
 */

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
        body: JSON.stringify({
          ...payload,
          labels,
          meta: {
            ip: req.headers.get("x-forwarded-for") ?? "",
            userAgent: req.headers.get("user-agent") ?? "",
            receivedAt: new Date().toISOString(),
          },
        }),
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
    "[bewerbung] ⚠️ KEIN VERSAND KONFIGURIERT (BEWERBUNG_WEBHOOK_URL fehlt). Bewerbung nur im Log:",
    labels
  );
  return NextResponse.json({ ok: true });
}
