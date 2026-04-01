"use client";

import { ArrowRight, CalendarCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Moderne Arztpraxis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary-deep/90 via-primary-deep/70 to-primary-deep/40" />
      </div>

      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 blob-shape blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 blob-shape blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Termine jetzt online buchbar
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
            Ihre Urologie in Wiehl
          </h1>

          <p className="text-white/75 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
            Kompetente urologische Versorgung mit modernster Diagnostik und
            individueller Betreuung — seit vielen Jahren im Oberbergischen Kreis.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#kontakt"
              className="group flex items-center gap-3 bg-white text-primary-deep font-semibold px-7 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
            >
              <CalendarCheck className="w-4 h-4" />
              Termin vereinbaren
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#leistungen"
              className="flex items-center gap-2 text-white/90 hover:text-white font-medium px-7 py-4 rounded-full text-sm border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}
