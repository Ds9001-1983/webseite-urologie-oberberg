const doctors = [
  {
    name: "Peter Günter Nelles",
    title: "Facharzt für Urologie",
    description:
      "Langjährige Erfahrung in der urologischen Diagnostik und Therapie mit besonderem Schwerpunkt auf Vorsorge und Krebsfrüherkennung.",
    image: "/images/doctor-nelles.png",
  },
  {
    name: "Dr. med. Albert Antonyan",
    title: "Facharzt für Urologie",
    description:
      "Spezialisiert auf moderne bildgebende Verfahren wie Farbdoppler-Sonographie und 3D-Ultraschall-Diagnostik der Prostata.",
    image: "/images/doctor-antonyan.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-36 bg-cloud">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16 fade-in-up">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="group bg-white rounded-3xl overflow-hidden card-hover border border-border-light fade-in-up"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
