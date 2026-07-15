import { Baby, Venus, Mars, Microscope, Hospital, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceCategory = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  intro: string;
  items: string[];
  wide?: boolean;
  featured?: boolean;
};

const categories: ServiceCategory[] = [
  {
    icon: Baby,
    title: "Kinderurologie",
    intro:
      "Einfühlsame urologische Betreuung für die Kleinsten – wir nehmen uns Zeit für Ihr Kind und Ihre Fragen.",
    items: [
      "Hodenhochstand",
      "Nächtliches Einnässen (Enuresis)",
      "Nierenfunktionsstörungen",
      "Urologische Infektionen",
      "Vorhautverengung (Phimose)",
    ],
  },
  {
    icon: Venus,
    title: "Urologie der Frau",
    intro:
      "Diskrete und kompetente Hilfe bei Blasen-, Nieren- und Harnwegsbeschwerden – abgestimmt auf die Bedürfnisse von Frauen.",
    items: [
      "Akute und chronische Blasenentzündungen",
      "Blasenschwäche (Harninkontinenz)",
      "Überaktive Blase",
      "Erkrankungen der Nieren und ableitenden Harnwege",
      "Steinerkrankungen",
      "Erkennung und Nachsorge urologischer Tumore",
    ],
  },
  {
    icon: Mars,
    title: "Männergesundheit",
    intro:
      "Von der Vorsorge bis zur Therapie: umfassende urologische Medizin für Männer in jeder Lebensphase.",
    wide: true,
    items: [
      "Androcheck (das Vorsorgeprogramm für die Männer)",
      "Regelmäßige Krebsvorsorge",
      "Blasenschwäche (Harninkontinenz)",
      "Erkrankungen der Nieren und ableitenden Harnwege",
      "Steinerkrankungen",
      "Hoden- und Nebenhodenerkrankungen",
      "Erkennung und Nachsorge urologischer Tumore",
      "Prostataerkrankungen",
      "Unerfüllter Kinderwunsch",
      "Hypogonadismus (Testosteronmangel)",
      "Überaktive Blase",
      "Urologische und sexuell übertragbare Infektionen",
      "Erektile Dysfunktion",
      "Penisverkrümmung (IPP)",
    ],
  },
  {
    icon: Microscope,
    title: "Diagnostik",
    intro:
      "Moderne Untersuchungsverfahren direkt in unserer Praxis – für schnelle und präzise Diagnosen auf kurzem Weg.",
    items: [
      "Endoskopie (Blasen- und Harnröhrenspiegelung)",
      "Harnflussmessung (Uroflow)",
      "Ultraschalluntersuchung",
      "Ultraschallgezielte Prostatapunktion (Prostatabiopsie)",
      "Urologische Labordiagnostik, hormonelle Diagnostik bei Verdacht auf Testosteronmangel",
      "Samenprobeuntersuchung (Spermiogramm)",
    ],
  },
  {
    icon: Hospital,
    title: "Ambulantes Operationszentrum",
    subtitle: "In Lokalanästhesie oder in Vollnarkose",
    intro:
      "Kleine Eingriffe, große Sorgfalt: Wir operieren ambulant – Sie sind noch am selben Tag wieder zu Hause.",
    featured: true,
    items: [
      "Vasektomie, Non-Skalpell-Technik (Sterilisation beim Mann)",
      "Urologische/andrologische Tageschirurgie",
      "Plastische Verlängerung des verkürzten Vorhautbändchens (Frenulum breve)",
      "Zirkumzision (Beschneidung) bei Vorhautverengung (Phimose), Kinder und Erwachsene",
      "Blasenbehandlung mit Botox",
      "Prostatabiopsie",
    ],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div data-reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Leistungsspektrum
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-dark leading-tight mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Ob Vorsorge, Diagnostik oder ambulante Operation – wir begleiten
            Frauen, Männer und Kinder in jeder Lebensphase mit moderner Medizin
            und persönlicher Zuwendung.
          </p>
        </div>

        <div data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className={`group rounded-3xl p-8 card-hover border ${
                c.wide ? "md:col-span-2" : ""
              } ${
                c.featured
                  ? "bg-primary-deep border-primary-deep"
                  : "bg-white border-border hover:border-primary/20"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                  c.featured
                    ? "bg-white/10 group-hover:bg-white/15"
                    : "bg-sky group-hover:bg-primary"
                }`}
              >
                <c.icon
                  aria-hidden="true"
                  className={`w-5 h-5 transition-colors duration-300 ${
                    c.featured
                      ? "text-sky"
                      : "text-primary group-hover:text-white"
                  }`}
                />
              </div>
              <h3
                className={`font-heading text-xl mb-2 ${
                  c.featured ? "text-white" : "text-slate-dark"
                }`}
              >
                {c.title}
              </h3>
              {c.subtitle && (
                <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sky mb-3">
                  {c.subtitle}
                </p>
              )}
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  c.featured ? "text-white/75" : "text-muted"
                }`}
              >
                {c.intro}
              </p>
              <ul className={c.wide ? "md:columns-2 md:gap-x-10" : undefined}>
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 break-inside-avoid mb-3 last:mb-0"
                  >
                    <Check
                      aria-hidden="true"
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        c.featured ? "text-sky" : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        c.featured ? "text-white/90" : "text-slate"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p data-reveal className="text-center text-muted text-sm mt-12">
          Nicht alle Untersuchungen werden von den Krankenkassen übernommen. Wir
          beraten Sie gerne, welche Untersuchungen in Ihrem Fall sinnvoll sind.
        </p>
      </div>
    </section>
  );
}
