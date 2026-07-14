"use client";

import Image from "next/image";
import { ArrowRight, CalendarCheck, Syringe } from "lucide-react";
import AiBadge from "./AiBadge";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section data-hero className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div data-hero-bg className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Symbolbild (KI-generiert): Moderne Arztpraxis"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary-deep/90 via-primary-deep/70 to-primary-deep/40" />
      </div>

      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 blob-shape blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 blob-shape blur-3xl" />

      <div data-hero-content className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-32 w-full">
        <div className="max-w-2xl">
          <div data-hero-item className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Termine jetzt online buchbar
            </span>
          </div>

          <h1 data-hero-title className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
            Ihre Urologie in Wiehl
          </h1>

          <p data-hero-item className="text-white/75 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
            Kompetente urologische Versorgung mit modernster Diagnostik und
            individueller Betreuung — seit vielen Jahren im Oberbergischen Kreis.
          </p>

          <div data-hero-item className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={site.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white text-primary-deep font-semibold px-7 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
            >
              <CalendarCheck className="w-4 h-4" />
              Termin buchen
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#leistungen"
              className="flex items-center gap-2 text-white/90 hover:text-white font-medium px-7 py-4 rounded-full text-sm border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
            >
              Unsere Leistungen
            </a>
          </div>

          {/* Vasektomie-Hinweis */}
          <div
            data-hero-item
            className="mt-8 flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 max-w-xl"
          >
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Syringe className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">
                Vasektomie – Termine zeitnah möglich
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                Persönliche Beratung und Aufklärung. Ambulant &amp;
                minimal-invasiv mit der No-Scalpel-Methode.
              </p>
              <a
                href={`mailto:${site.vasektomieEmail}`}
                className="inline-flex items-center gap-1.5 text-white text-sm font-semibold underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                Bitte schreiben Sie uns an, wir melden uns schnellstmöglich
                bei Ihnen
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />

      {/* Transparenz: Hintergrund ist KI-generiert (bewusst außerhalb von
          data-hero-content, damit GSAP den Hinweis nie ausblendet) */}
      <AiBadge className="bottom-4 right-4" />
    </section>
  );
}
