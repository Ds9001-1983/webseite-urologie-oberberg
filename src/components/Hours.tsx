import { Clock, Phone, ExternalLink } from "lucide-react";
import { openingHours, site } from "@/lib/site";

export default function Hours() {
  return (
    <section id="sprechzeiten" className="py-24 lg:py-36 bg-sky">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading + CTA */}
          <div data-reveal="left">
            <span className="inline-block text-primary-dark text-sm font-semibold tracking-wider uppercase mb-4">
              Öffnungszeiten
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-dark leading-tight mb-6">
              Sprechzeiten
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Termine nach Vereinbarung. Bitte melden Sie sich telefonisch oder
              über unser Online-Buchungsportal an.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone className="w-4 h-4" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cloud text-slate-dark font-semibold px-6 py-3.5 rounded-full text-sm border border-border transition-all duration-300 hover:shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                Termin buchen
              </a>
            </div>
          </div>

          {/* Right: hours table */}
          <div data-reveal="right">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border-light">
              <div className="p-6 border-b border-border-light flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-slate-dark font-semibold">
                  Unsere Sprechzeiten
                </span>
              </div>
              <div className="divide-y divide-border-light">
                {openingHours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between px-6 py-4 hover:bg-cloud/50 transition-colors"
                  >
                    <span className="text-slate-dark text-sm font-medium">
                      {h.day}
                    </span>
                    <span className="text-muted text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-cloud/50">
                <p className="text-muted text-xs text-center">
                  Oder nach Vereinbarung · Samstag & Sonntag geschlossen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
