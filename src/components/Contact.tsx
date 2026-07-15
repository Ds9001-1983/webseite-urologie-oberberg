import { MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div data-reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Kontakt
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-dark leading-tight mb-6">
            So erreichen Sie uns
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Rufen
            Sie uns an, schreiben Sie uns eine E-Mail oder buchen Sie Ihren
            Termin bequem online.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            data-stagger
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-cloud rounded-2xl p-6 border border-border-light card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-dark text-sm mb-1">
                    Adresse
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cloud rounded-2xl p-6 border border-border-light card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-dark text-sm mb-1">
                    Telefon
                  </h3>
                  <a
                    href={site.phoneHref}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-cloud rounded-2xl p-6 border border-border-light card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-dark text-sm mb-1">
                    E-Mail
                  </h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-muted hover:text-primary text-sm transition-colors break-all"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-reveal
            className="bg-primary rounded-3xl p-8 sm:p-10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          >
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                Online-Termine
              </p>
              <p className="text-white text-sm">
                Buchen Sie Ihren Termin bequem online
              </p>
            </div>
            <a
              href={site.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-cloud text-primary-deep font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg shrink-0"
            >
              Termin buchen
              <span className="sr-only"> (öffnet in neuem Tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
