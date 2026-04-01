import {
  HeartPulse,
  Scan,
  Box,
  Microscope,
  Scissors,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Vorsorge & Krebsfrüherkennung",
    description:
      "Umfassende Vorsorgeuntersuchungen mit Bewertung von Nieren, Harntrakt, Prostata und Darm durch körperliche Untersuchung und laborchemische Parameter.",
  },
  {
    icon: Scan,
    title: "Farbdoppler-Sonographie",
    description:
      "Hochmoderne Darstellung der Nierengefäße zur Beurteilung des Gefäßstatus sowie Abklärung von Nierenzysten und Nierentumoren.",
  },
  {
    icon: Box,
    title: "3D-Prostata-Sonographie",
    description:
      "Dreidimensionale Farbdoppler-Sonographie der Prostata zur präzisen Darstellung bei tumorverdächtigen Veränderungen.",
  },
  {
    icon: Microscope,
    title: "Gewebsentnahme (Biopsie)",
    description:
      "Gewebsentnahme aus der Blase bei krankhaften Veränderungen wie Tumoren zur histologischen Untersuchung.",
  },
  {
    icon: Scissors,
    title: "Harnröhrenschlitzung",
    description:
      "Urethrotomia interna nach Sachse/Otis bei Harnröhrenverengungen — ein minimalinvasiver Eingriff.",
  },
  {
    icon: Stethoscope,
    title: "Allgemeine Urologie",
    description:
      "Umfassende urologische Diagnostik und Therapie für Männer und Frauen jeden Alters.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16 fade-in-up">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Leistungsspektrum
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-dark leading-tight mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Wir bieten Ihnen ein breites Spektrum moderner urologischer
            Untersuchungen und Behandlungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children fade-in-up">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl p-7 card-hover border border-border hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <s.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-slate-dark mb-3">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-12 fade-in-up">
          Nicht alle Untersuchungen werden von den Krankenkassen übernommen. Wir
          beraten Sie gerne, welche Untersuchungen in Ihrem Fall sinnvoll sind.
        </p>
      </div>
    </section>
  );
}
