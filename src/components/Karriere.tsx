import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Keine Wochenenddienste",
  "Geregelte Zeiten",
  "Bewerbung in 60 Sekunden",
];

export default function Karriere() {
  return (
    <section id="karriere" className="py-24 lg:py-32 bg-primary-deep overflow-hidden relative">
      {/* Dezente Blob-Deko wie im Hero */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-primary/20 blob-shape blur-3xl" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary-light/10 blob-shape blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div data-reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-primary-light text-sm font-semibold tracking-wider uppercase mb-4">
            Karriere
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Wir suchen eine MFA (m/w/d) in Voll- oder Teilzeit. Geregelte
            Sprechzeiten, keine Nacht- und Wochenenddienste – und eine
            Bewerbung, die nur 60 Sekunden dauert.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-white/90 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 text-primary-light" />
                {h}
              </span>
            ))}
          </div>

          <Link
            href="/bewerbung"
            className="group inline-flex items-center gap-3 bg-white hover:bg-cloud text-primary-deep font-semibold px-7 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
          >
            Jetzt unkompliziert bewerben
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
