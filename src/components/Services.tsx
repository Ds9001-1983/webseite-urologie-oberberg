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
      "Urethrotomia interna nach Sachse/Otis bei Harnröhrenverengungen – ein minimalinvasiver Eingriff.",
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
    <section id="leistungen" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Leistungsspektrum
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Wir bieten Ihnen ein breites Spektrum moderner urologischer
            Untersuchungen und Behandlungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 group hover:border-gold/20"
            >
              <div className="w-11 h-11 rounded bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <s.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-10 fade-in-up">
          Nicht alle Untersuchungen werden von den Krankenkassen übernommen. Wir
          beraten Sie gerne, welche Untersuchungen in Ihrem Fall sinnvoll sind.
        </p>
      </div>
    </section>
  );
}
