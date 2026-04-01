const doctors = [
  {
    name: "Peter Günter Nelles",
    title: "Facharzt für Urologie",
    initials: "PN",
    description:
      "Langjährige Erfahrung in der urologischen Diagnostik und Therapie mit besonderem Schwerpunkt auf Vorsorge und Krebsfrüherkennung.",
  },
  {
    name: "Dr. med. Albert Antonyan",
    title: "Facharzt für Urologie",
    initials: "AA",
    description:
      "Spezialisiert auf moderne bildgebende Verfahren wie Farbdoppler-Sonographie und 3D-Ultraschall-Diagnostik der Prostata.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Ärzte
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-light mb-6">
            Unser Team
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Zwei erfahrene Fachärzte für Urologie betreuen Sie persönlich und
            kompetent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto fade-in-up">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-navy-light/50 border border-white/10 rounded-lg p-8 text-center hover:border-gold/30 transition-colors"
            >
              {/* Initials Avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-gold font-serif text-2xl">
                  {doc.initials}
                </span>
              </div>

              <h3 className="font-serif text-xl text-light mb-1">
                {doc.name}
              </h3>
              <p className="text-gold text-sm tracking-wide uppercase mb-4">
                {doc.title}
              </p>
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
