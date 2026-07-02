// Zentrale Praxis-Daten — einzige Quelle für Kontaktdaten, Navigation und Öffnungszeiten.
export const site = {
  name: "Urologie Oberberg",
  legalName: "Urologische Gemeinschaftspraxis Oberberg",
  // TODO: Produktions-Domain bestätigen (Annahme laut Kampagnen-Creatives)
  url: "https://urologie-oberberg.de",
  phoneDisplay: "02262 / 93081",
  // TODO: Durchwahl verifizieren (angezeigt wird 93081, hinterlegt 930810)
  phoneHref: "tel:+492262930810",
  email: "info@urologie-oberberg.de",
  address: {
    street: "Hauptstraße 15",
    zip: "51674",
    city: "Wiehl",
  },
  // TODO: echtes Doctolib-Praxisprofil verlinken
  doctolibUrl: "https://www.doctolib.de",
  doctors: [
    "Dr. med. Albert Antonyan",
    "Peter Günter Nelles",
  ],
} as const;

// E.164 für strukturierte Daten (JSON-LD) — aus phoneHref abgeleitet, damit
// nicht noch eine dritte, unabhängig gepflegte Nummernvariante entsteht.
export const phoneE164 = site.phoneHref.replace(/^tel:/, "");

export const navLinks = [
  { href: "#praxis", label: "Praxis" },
  { href: "#team", label: "Team" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#sprechzeiten", label: "Sprechzeiten" },
  { href: "#karriere", label: "Karriere" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const openingHours = [
  { day: "Montag", time: "08:00 – 12:00 & 14:00 – 17:00" },
  { day: "Dienstag", time: "08:00 – 12:00 & 14:00 – 17:00" },
  { day: "Mittwoch", time: "08:00 – 12:00" },
  { day: "Donnerstag", time: "08:00 – 12:00 & 14:00 – 17:00" },
  { day: "Freitag", time: "08:00 – 12:00" },
] as const;

// Für schema.org openingHoursSpecification
export const openingHoursSpec = [
  { days: ["Monday", "Tuesday", "Thursday"], opens: "08:00", closes: "12:00" },
  { days: ["Monday", "Tuesday", "Thursday"], opens: "14:00", closes: "17:00" },
  { days: ["Wednesday", "Friday"], opens: "08:00", closes: "12:00" },
] as const;
