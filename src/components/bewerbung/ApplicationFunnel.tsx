"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import {
  ArrowLeft,
  Check,
  CheckCircle,
  GraduationCap,
  Loader2,
  Lock,
  Mail,
  Phone,
  Send,
  Sparkles,
  Stethoscope,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  CHOICE_STEPS,
  CONTACT_PREFS,
  EMAIL_MAX_LENGTH,
  EMAIL_REGEX,
  NAME_MAX_LENGTH,
  PHONE_REGEX,
  TOTAL_STEPS,
  buildMailtoLink,
  type ApplicationPayload,
  type FunnelAnswers,
} from "./funnel-config";
import { site } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  graduation: GraduationCap,
  sparkles: Sparkles,
};

const INITIAL_ANSWERS: FunnelAnswers = {
  position: null,
  experience: null,
  workload: null,
  start: null,
  name: "",
  phone: "",
  email: "",
  contactPreference: null,
  consent: false,
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function ApplicationFunnel() {
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [answers, setAnswers] = useState<FunnelAnswers>(INITIAL_ANSWERS);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  // Nur für die clientseitige elapsedMs-Messung — nie mit einer Server-Uhr verglichen.
  const mountedAtRef = useRef<number>(Date.now());
  // Snapshot der tatsächlich übermittelten Antworten — bleibt bei Fehlern stabil,
  // auch falls answers sich danach noch ändert (z. B. erneuter Versuch).
  const submittedRef = useRef<Omit<ApplicationPayload, "elapsedMs" | "source"> | null>(
    null
  );
  const cardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  // Nach Step-Wechsel: Karte in den Viewport holen, Heading für Screenreader fokussieren
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    const card = cardRef.current;
    if (card && card.getBoundingClientRect().top < 0) {
      card.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [stepIndex, status]);

  const isContactStep = stepIndex === CHOICE_STEPS.length;
  const progress =
    status === "success"
      ? 100
      : Math.round(((stepIndex + 1) / (TOTAL_STEPS + 1)) * 100);

  function goToStep(next: number, dir: "forward" | "back") {
    if (status === "submitting") return;
    if (advanceTimer.current) {
      clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
    setDirection(dir);
    setStepIndex(next);
  }

  function selectOption(stepId: string, value: string) {
    if (status === "submitting") return;
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    // Auswahl kurz sichtbar lassen, dann weiter
    advanceTimer.current = setTimeout(() => {
      setDirection("forward");
      setStepIndex((i) => Math.min(i + 1, TOTAL_STEPS - 1));
    }, 220);
  }

  function validateContact(): Record<string, string> {
    const errs: Record<string, string> = {};
    const trimmedName = answers.name.trim();
    if (trimmedName.length < 2) {
      errs.name = "Bitte gib deinen Namen ein.";
    } else if (trimmedName.length > NAME_MAX_LENGTH) {
      errs.name = `Bitte kürze deinen Namen auf ${NAME_MAX_LENGTH} Zeichen.`;
    }
    if (!PHONE_REGEX.test(answers.phone.trim())) {
      errs.phone = "Bitte gib eine gültige Telefonnummer ein.";
    }
    const trimmedEmail = answers.email.trim();
    if (trimmedEmail && !EMAIL_REGEX.test(trimmedEmail)) {
      errs.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    } else if (trimmedEmail.length > EMAIL_MAX_LENGTH) {
      errs.email = `Bitte kürze deine E-Mail-Adresse auf ${EMAIL_MAX_LENGTH} Zeichen.`;
    }
    if (answers.contactPreference === "email" && !trimmedEmail) {
      errs.email = "Für eine Antwort per E-Mail brauchen wir deine E-Mail-Adresse.";
    }
    if (!answers.consent) {
      errs.consent = "Bitte bestätige die Datenschutzerklärung.";
    }
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    const errs = validateContact();
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    const submitted = { ...answers, consent: true as const };
    submittedRef.current = submitted;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const payload: ApplicationPayload = {
        ...submitted,
        elapsedMs: Date.now() - mountedAtRef.current,
        source: "bewerbungsfunnel",
      };
      const res = await fetch("/api/bewerbung", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const data = await res.json().catch(() => null);
      setStatus(res.ok && data?.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }

  const firstName =
    submittedRef.current?.name.trim().split(/\s+/)[0] ||
    answers.name.trim().split(/\s+/)[0] ||
    "";
  const currentChoiceStep = isContactStep ? null : CHOICE_STEPS[stepIndex];

  return (
    <section id="bewerben" className="scroll-mt-24 relative z-10">
      <div className="max-w-xl mx-auto px-5 sm:px-8">
        <div
          ref={cardRef}
          className="bg-white rounded-3xl border border-border-light shadow-[0_20px_60px_-15px_rgba(18,51,47,0.15)] p-6 sm:p-10 scroll-mt-24"
        >
          {/* Kopf: Badge + Fortschritt */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs font-semibold rounded-full px-3 py-1.5">
              <Timer className="w-3.5 h-3.5" />
              Bewerbung in 60 Sekunden
            </span>
            {status !== "success" && (
              <span aria-live="polite" className="text-muted text-xs font-medium shrink-0">
                Schritt {stepIndex + 1} von {TOTAL_STEPS}
              </span>
            )}
          </div>
          <div
            role="progressbar"
            aria-label="Bewerbungsfortschritt"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-1.5 rounded-full bg-border-light mb-8 overflow-hidden"
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h2
                ref={headingRef}
                tabIndex={-1}
                className="font-heading text-2xl text-slate-dark mb-3 outline-none"
              >
                Danke{firstName ? `, ${firstName}` : ""}! Deine Bewerbung ist da.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Wir melden uns innerhalb von 24–48 Stunden bei dir – meistens
                sogar schneller.
              </p>
              <p className="text-slate text-sm font-medium mb-4">
                Du willst nicht warten? Ruf uns einfach an:
              </p>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone className="w-4 h-4" />
                {site.phoneDisplay}
              </a>
            </div>
          ) : status === "error" ? (
            <div className="text-center py-6">
              <h2
                ref={headingRef}
                tabIndex={-1}
                className="font-heading text-2xl text-slate-dark mb-3 outline-none"
              >
                Das hat leider nicht geklappt.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Deine Bewerbung konnte gerade nicht übertragen werden. Versuch
                es gleich nochmal – oder melde dich direkt bei uns. Deine
                Angaben bleiben erhalten.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300"
                >
                  Nochmal versuchen
                </button>
                <a
                  href={site.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-slate-dark font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Anrufen
                </a>
                <a
                  href={buildMailtoLink(
                    submittedRef.current ?? { ...answers, consent: true },
                    site.email
                  )}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-slate-dark font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  E-Mail senden
                </a>
              </div>
            </div>
          ) : (
            <div
              key={stepIndex}
              data-dir={direction}
              className="funnel-step min-h-[380px] flex flex-col"
            >
              {currentChoiceStep ? (
                <>
                  <h2
                    ref={headingRef}
                    tabIndex={-1}
                    id={`funnel-question-${currentChoiceStep.id}`}
                    className="font-heading text-xl sm:text-2xl text-slate-dark mb-6 outline-none"
                  >
                    {currentChoiceStep.question}
                  </h2>
                  <div
                    role="group"
                    aria-labelledby={`funnel-question-${currentChoiceStep.id}`}
                    className="space-y-3"
                  >
                    {currentChoiceStep.options.map((option) => {
                      const selected =
                        answers[currentChoiceStep.id] === option.value;
                      const Icon = option.icon ? ICONS[option.icon] : null;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          aria-pressed={selected}
                          onClick={() =>
                            selectOption(currentChoiceStep.id, option.value)
                          }
                          className={`w-full min-h-[64px] flex items-center gap-4 rounded-2xl border-2 p-4 sm:p-5 text-left transition-all duration-200 active:scale-[0.99] ${
                            selected
                              ? "border-primary bg-ice"
                              : "border-border bg-white hover:border-primary/50 hover:bg-ice/60"
                          }`}
                        >
                          {Icon && (
                            <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary-dark flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5" />
                            </span>
                          )}
                          <span className="flex-1">
                            <span className="block font-semibold text-slate-dark text-sm sm:text-base">
                              {option.label}
                            </span>
                            {option.sublabel && (
                              <span className="block text-muted text-xs sm:text-sm mt-0.5">
                                {option.sublabel}
                              </span>
                            )}
                          </span>
                          <span
                            aria-hidden="true"
                            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                              selected
                                ? "bg-primary text-white"
                                : "border-2 border-border"
                            }`}
                          >
                            {selected && <Check className="w-3.5 h-3.5" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col">
                  <h2
                    ref={headingRef}
                    tabIndex={-1}
                    className="font-heading text-xl sm:text-2xl text-slate-dark mb-2 outline-none"
                  >
                    Fast geschafft! Wie erreichen wir dich?
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Kein Lebenslauf, kein Anschreiben – wir melden uns einfach
                    bei dir.
                  </p>

                  <fieldset
                    disabled={status === "submitting"}
                    className="contents"
                  >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="funnel-name"
                        className="block text-slate-dark text-sm font-medium mb-2"
                      >
                        Vor- und Nachname *
                      </label>
                      <input
                        id="funnel-name"
                        type="text"
                        autoComplete="name"
                        maxLength={NAME_MAX_LENGTH}
                        aria-required="true"
                        aria-invalid={fieldErrors.name ? true : undefined}
                        aria-describedby={
                          fieldErrors.name ? "funnel-name-error" : undefined
                        }
                        value={answers.name}
                        onChange={(e) =>
                          setAnswers({ ...answers, name: e.target.value })
                        }
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm disabled:opacity-60"
                        placeholder="Dein Name"
                      />
                      {fieldErrors.name && (
                        <p
                          id="funnel-name-error"
                          role="alert"
                          className="text-red-700 text-xs mt-1.5"
                        >
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="funnel-phone"
                        className="block text-slate-dark text-sm font-medium mb-2"
                      >
                        Telefonnummer *
                      </label>
                      <input
                        id="funnel-phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={fieldErrors.phone ? true : undefined}
                        aria-describedby={
                          fieldErrors.phone ? "funnel-phone-error" : undefined
                        }
                        value={answers.phone}
                        onChange={(e) =>
                          setAnswers({ ...answers, phone: e.target.value })
                        }
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                        placeholder="z. B. 0151 12345678"
                      />
                      {fieldErrors.phone && (
                        <p
                          id="funnel-phone-error"
                          role="alert"
                          className="text-red-700 text-xs mt-1.5"
                        >
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="funnel-email"
                        className="block text-slate-dark text-sm font-medium mb-2"
                      >
                        E-Mail <span className="text-muted font-normal">(optional)</span>
                      </label>
                      <input
                        id="funnel-email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        enterKeyHint="send"
                        maxLength={EMAIL_MAX_LENGTH}
                        aria-invalid={fieldErrors.email ? true : undefined}
                        aria-describedby={
                          fieldErrors.email ? "funnel-email-error" : undefined
                        }
                        value={answers.email}
                        onChange={(e) =>
                          setAnswers({ ...answers, email: e.target.value })
                        }
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm disabled:opacity-60"
                        placeholder="deine@email.de"
                      />
                      {fieldErrors.email && (
                        <p
                          id="funnel-email-error"
                          role="alert"
                          className="text-red-700 text-xs mt-1.5"
                        >
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="text-slate-dark text-sm font-medium mb-2">
                        Wie sollen wir uns melden?{" "}
                        <span className="text-muted font-normal">(optional)</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {CONTACT_PREFS.map((pref) => {
                          const selected =
                            answers.contactPreference === pref.value;
                          return (
                            <button
                              key={pref.value}
                              type="button"
                              aria-pressed={selected}
                              onClick={() =>
                                setAnswers({
                                  ...answers,
                                  contactPreference: selected
                                    ? null
                                    : pref.value,
                                })
                              }
                              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                                selected
                                  ? "border-primary bg-primary text-white"
                                  : "border-border text-slate hover:border-primary/50"
                              }`}
                            >
                              {pref.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Honeypot — für Menschen unsichtbar */}
                    <input
                      type="text"
                      name="website"
                      value={answers.website}
                      onChange={(e) =>
                        setAnswers({ ...answers, website: e.target.value })
                      }
                      autoComplete="off"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-px w-px opacity-0"
                    />

                    <label className="flex items-start gap-3 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={answers.consent}
                        aria-required="true"
                        aria-invalid={fieldErrors.consent ? true : undefined}
                        aria-describedby={
                          fieldErrors.consent ? "funnel-consent-error" : undefined
                        }
                        onChange={(e) =>
                          setAnswers({ ...answers, consent: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 rounded border-border accent-primary shrink-0"
                      />
                      <span className="text-muted text-xs leading-relaxed">
                        Ich bin damit einverstanden, dass meine Angaben zur
                        Bearbeitung meiner Bewerbung gespeichert und verwendet
                        werden. Mehr dazu in der{" "}
                        <a
                          href="/datenschutz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline hover:text-primary-dark"
                        >
                          Datenschutzerklärung
                        </a>
                        .
                      </span>
                    </label>
                    {fieldErrors.consent && (
                      <p
                        id="funnel-consent-error"
                        role="alert"
                        className="text-red-700 text-xs"
                      >
                        {fieldErrors.consent}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-semibold py-4 rounded-full text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Wird gesendet…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Bewerbung absenden
                        </>
                      )}
                    </button>

                    <p className="flex items-center justify-center gap-1.5 text-muted text-xs">
                      <Lock className="w-3.5 h-3.5" />
                      Deine Daten werden vertraulich behandelt.
                    </p>
                  </div>
                  </fieldset>
                </form>
              )}

              {stepIndex > 0 && (
                <button
                  type="button"
                  onClick={() => goToStep(stepIndex - 1, "back")}
                  className="mt-6 inline-flex items-center gap-1.5 text-muted hover:text-slate-dark text-sm font-medium transition-colors self-start"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zurück
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
