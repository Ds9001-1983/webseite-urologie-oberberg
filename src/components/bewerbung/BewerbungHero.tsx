import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BewerbungHero() {
  return (
    <section className="bg-ice pt-12 sm:pt-16 pb-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate text-sm font-medium">
                Wir stellen ein · MFA (m/w/d) · Voll- oder Teilzeit
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-slate-dark leading-[1.1] mb-5">
              Wir suchen dich.
            </h1>

            <p className="text-muted text-lg leading-relaxed mb-8 max-w-lg">
              Werde MFA in unserer urologischen Gemeinschaftspraxis in Wiehl –
              mit geregelten Sprechzeiten statt Schichtplan. Bewirb dich in 60
              Sekunden, ganz ohne Bewerbungs-Stress.
            </p>

            <a
              href="#bewerben"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Jetzt unkompliziert bewerben
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(18,51,47,0.25)]">
              <Image
                src="/images/aerzte-gulans-antonyan.jpg"
                alt="Dr. med. Albert Antonyan und Aleksejs Gulans, Fachärzte für Urologie in Wiehl"
                width={884}
                height={580}
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-muted text-sm text-center mt-4">
              Dr. med. Albert Antonyan &amp; Aleksejs Gulans – deine
              zukünftigen Chefs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
