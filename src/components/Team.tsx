import Image from "next/image";

// Reihenfolge entspricht dem Foto: links Dr. Antonyan, rechts Gulans
const doctors = [
  {
    name: "Dr. med. Albert Antonyan",
    title: "Facharzt für Urologie",
    description:
      "Spezialisiert auf moderne bildgebende Verfahren wie Farbdoppler-Sonographie und 3D-Ultraschall-Diagnostik der Prostata.",
  },
  {
    name: "Aleksejs Gulans",
    title: "Facharzt für Urologie",
    description:
      "Langjährige Erfahrung in der urologischen Diagnostik und Therapie mit besonderem Schwerpunkt auf Vorsorge und Krebsfrüherkennung.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-36 bg-cloud">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div data-reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Ärzte
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-dark leading-tight mb-6">
            Unser Team
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Zwei erfahrene Fachärzte für Urologie betreuen Sie persönlich und
            kompetent.
          </p>
        </div>

        {/* Gemeinsames Foto */}
        <div className="max-w-4xl mx-auto">
          <div
            data-team-photo
            className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(18,51,47,0.25)]"
          >
            <Image
              src="/images/aerzte-gulans-antonyan.jpg"
              alt="Dr. med. Albert Antonyan (links) und Aleksejs Gulans (rechts)"
              width={884}
              height={580}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-deep/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Karten überlappen das Foto */}
        <div
          data-stagger
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6 sm:-mt-14 relative z-10"
        >
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-3xl p-8 card-hover border border-border-light shadow-lg shadow-primary-deep/5"
            >
              <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-2">
                {doc.title}
              </p>
              <h3 className="font-heading text-xl text-slate-dark mb-3">
                {doc.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {doc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
