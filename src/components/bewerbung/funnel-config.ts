// Gemeinsame Definition des Bewerbungsfunnels — wird von Wizard (Client)
// UND API-Route (Server) importiert. Daher: kein "use client", kein React.

export const POSITIONS = [
  {
    value: "mfa",
    label: "MFA (m/w/d)",
    sublabel: "Mit Berufserfahrung oder Wiedereinstieg",
    icon: "stethoscope",
  },
  {
    value: "ausbildung",
    label: "Ausbildung zur MFA",
    sublabel: "Du möchtest den Beruf bei uns lernen",
    icon: "graduation",
  },
  {
    value: "initiativ",
    label: "Initiativbewerbung",
    sublabel: "Ein anderer Bereich? Erzähl uns davon",
    icon: "sparkles",
  },
] as const;

export const EXPERIENCES = [
  {
    value: "einsteiger",
    label: "Ich fange gerade erst an",
    sublabel: "Schule, Ausbildung oder Quereinstieg",
  },
  { value: "1-3", label: "1–3 Jahre" },
  { value: "3-10", label: "3–10 Jahre" },
  { value: "10plus", label: "Über 10 Jahre" },
] as const;

export const WORKLOADS = [
  { value: "vollzeit", label: "Vollzeit" },
  { value: "teilzeit", label: "Teilzeit" },
  { value: "flexibel", label: "Bin flexibel", sublabel: "Lass uns drüber sprechen" },
] as const;

export const START_DATES = [
  { value: "sofort", label: "So schnell wie möglich" },
  { value: "1-3-monate", label: "In 1–3 Monaten" },
  { value: "3-6-monate", label: "In 3–6 Monaten" },
  { value: "flexibel", label: "Bin flexibel" },
] as const;

export const CONTACT_PREFS = [
  { value: "telefon", label: "Anruf" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "E-Mail" },
] as const;

export type Position = (typeof POSITIONS)[number]["value"];
export type Experience = (typeof EXPERIENCES)[number]["value"];
export type Workload = (typeof WORKLOADS)[number]["value"];
export type StartDate = (typeof START_DATES)[number]["value"];
export type ContactPreference = (typeof CONTACT_PREFS)[number]["value"];

export interface FunnelAnswers {
  position: Position | null;
  experience: Experience | null;
  workload: Workload | null;
  start: StartDate | null;
  name: string;
  phone: string;
  email: string;
  contactPreference: ContactPreference | null;
  consent: boolean;
  /** Honeypot — muss leer bleiben */
  website: string;
}

export interface ApplicationPayload extends Omit<FunnelAnswers, "consent"> {
  consent: true;
  /**
   * Client-seitig gemessene Ausfülldauer in ms (Date.now() bei Mount bis
   * Date.now() bei Submit — eine einzige Uhr, kein Uhren-Abgleich mit dem
   * Server). Dient als Zeitschranke gegen Bots, die sofort absenden.
   */
  elapsedMs: number;
  source: "bewerbungsfunnel";
}

export interface ChoiceStepDef {
  id: "position" | "experience" | "workload" | "start";
  question: string;
  options: ReadonlyArray<{
    value: string;
    label: string;
    sublabel?: string;
    icon?: string;
  }>;
}

export const CHOICE_STEPS: readonly ChoiceStepDef[] = [
  { id: "position", question: "Als was möchtest du dich bewerben?", options: POSITIONS },
  { id: "experience", question: "Wie viel Berufserfahrung hast du?", options: EXPERIENCES },
  { id: "workload", question: "Wie möchtest du bei uns arbeiten?", options: WORKLOADS },
  { id: "start", question: "Wann kannst du frühestens starten?", options: START_DATES },
];

export const TOTAL_STEPS = CHOICE_STEPS.length + 1; // 4 Auswahl-Steps + Kontakt

export const PHONE_REGEX = /^[+0-9][0-9 ()\/\-.]{5,19}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const NAME_MAX_LENGTH = 100;
export const EMAIL_MAX_LENGTH = 200;
/** Bot-Zeitschranke: schnellere Ausfülldauer gilt als verdächtig */
export const MIN_ELAPSED_MS = 3000;

const STEP_LABELS: Record<ChoiceStepDef["id"], string> = {
  position: "Position",
  experience: "Berufserfahrung",
  workload: "Arbeitszeit",
  start: "Frühester Start",
};

export function labelFor(
  stepId: ChoiceStepDef["id"] | "contactPreference",
  value: string | null
): string {
  if (!value) return "–";
  const options =
    stepId === "contactPreference"
      ? CONTACT_PREFS
      : CHOICE_STEPS.find((s) => s.id === stepId)?.options ?? [];
  return options.find((o) => o.value === value)?.label ?? value;
}

export function formatAnswers(
  p: Omit<ApplicationPayload, "elapsedMs" | "source">
): Array<[string, string]> {
  return [
    ["Name", p.name.trim()],
    ["Telefon", p.phone.trim()],
    ["E-Mail", p.email.trim() || "–"],
    [STEP_LABELS.position, labelFor("position", p.position)],
    [STEP_LABELS.experience, labelFor("experience", p.experience)],
    [STEP_LABELS.workload, labelFor("workload", p.workload)],
    [STEP_LABELS.start, labelFor("start", p.start)],
    ["Gewünschter Kontaktweg", labelFor("contactPreference", p.contactPreference)],
  ];
}

export function buildMailtoLink(
  p: Omit<ApplicationPayload, "elapsedMs" | "source">,
  email: string
): string {
  const subject = `Bewerbung ${labelFor("position", p.position)} – ${p.name.trim()}`;
  const body = formatAnswers(p)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
