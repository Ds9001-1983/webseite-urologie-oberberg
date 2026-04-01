export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />

      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Gold accent line */}
        <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />

        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6 font-sans">
          Urologische Gemeinschaftspraxis
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-light leading-tight mb-6">
          Ihre Spezialisten für{" "}
          <span className="text-gradient-gold">Urologie</span> in Wiehl
        </h1>

        <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Kompetente urologische Versorgung mit modernster Diagnostik und
          individueller Betreuung im Oberbergischen Kreis.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3.5 rounded text-sm tracking-wide transition-colors w-full sm:w-auto"
          >
            Termin vereinbaren
          </a>
          <a
            href="#leistungen"
            className="border border-light/20 hover:border-gold/50 text-light px-8 py-3.5 rounded text-sm tracking-wide transition-colors w-full sm:w-auto"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-9 rounded-full border-2 border-light/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-gold/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
