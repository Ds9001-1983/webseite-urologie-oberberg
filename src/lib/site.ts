// Zentrale Praxis-Daten — einzige Quelle für Kontaktdaten, Navigation und Öffnungszeiten.
export const site = {
  name: "Urologie Oberberg",
  // Offizieller Praxisname laut Impressum der Live-Website (urologie-oberberg.de/94-2/)
  legalName: "Urologische Gemeinschaftspraxis Dr. A. Antonyan",
  url: "https://urologie-oberberg.de",
  phoneDisplay: "02262 / 93081",
  // Verifiziert gegen die Live-Website (dort als "0226293081" angegeben)
  phoneHref: "tel:+49226293081",
  email: "info@urologie-oberberg.de",
  vasektomieEmail: "vasektomie@urologie-oberberg.de",
  address: {
    street: "Hauptstraße 15",
    zip: "51674",
    city: "Wiehl",
  },
  // Echtes Doctolib-Praxisprofil (samt UTM-Tracking) von der Live-Website übernommen.
  // Der URL-Slug nennt weiterhin "peter-g-nelles" — das ist Doctolibs eigene,
  // von der Praxis nicht kurzfristig änderbare Profil-Adresse.
  doctolibUrl:
    "https://www.doctolib.de/gemeinschaftspraxis/wiehl/urologische-gemeinschaftspraxis-peter-g-nelles-dr-albert-antonyan?utm_campaign=website-button&utm_source=urologische-gemeinschaftspraxis-peter-g-nelles-dr-albert-antonyan-website-button&utm_medium=referral&utm_content=option-8&utm_term=urologische-gemeinschaftspraxis-peter-g-nelles-dr-albert-antonyan",
  doctors: [
    "Dr. med. Albert Antonyan",
    "Aleksejs Gulans",
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
  { day: "Montag – Freitag", time: "07:45 – 12:00" },
  { day: "Montag (Nachmittag)", time: "14:30 – 16:00" },
] as const;

// Für schema.org openingHoursSpecification
export const openingHoursSpec = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:45",
    closes: "12:00",
  },
  { days: ["Monday"], opens: "14:30", closes: "16:00" },
] as const;
