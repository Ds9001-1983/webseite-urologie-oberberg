import Link from "next/link";
import type { Metadata } from "next";
import { LogoLockup } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-cloud">
      {/* Header */}
      <div className="bg-primary-deep py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <Link href="/" aria-label="Zur Startseite">
            <LogoLockup
              markClassName="text-primary-light"
              primaryTextClassName="text-white"
              secondaryTextClassName="text-primary-light"
            />
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl text-white mt-6">
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-sm max-w-none text-slate space-y-8">
          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="text-muted leading-relaxed">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Vertreten durch
            </h2>
            <p className="text-muted leading-relaxed">
              Dr. med. Albert Antonyan
              <br />
              Aleksejs Gulans
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">Kontakt</h2>
            <p className="text-muted leading-relaxed">
              Telefon: {site.phoneDisplay}
              <br />
              E-Mail: {site.email}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Berufsbezeichnung
            </h2>
            <p className="text-muted leading-relaxed">
              Fachärzte für Urologie
              <br />
              Berufsbezeichnung verliehen in der Bundesrepublik Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Zuständige Kammer
            </h2>
            <p className="text-muted leading-relaxed">
              Ärztekammer Nordrhein
              <br />
              Tersteegenstraße 9<br />
              40474 Düsseldorf
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Kassenärztliche Vereinigung
            </h2>
            <p className="text-muted leading-relaxed">
              Kassenärztliche Vereinigung Nordrhein
              <br />
              Tersteegenstraße 9<br />
              40474 Düsseldorf
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Berufsrechtliche Regelungen
            </h2>
            <p className="text-muted leading-relaxed">
              Berufsordnung der Ärztekammer Nordrhein
              <br />
              Heilberufsgesetz NRW
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Berufshaftpflichtversicherung
            </h2>
            <p className="text-muted leading-relaxed">
              Alte Leipziger Versicherung Aktiengesellschaft
              <br />
              Alte Leipziger-Platz 1<br />
              61440 Oberursel
              <br />
              Geltungsbereich: Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Verbraucherstreitbeilegung
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              Wir nehmen nicht an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teil.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Haftungsausschluss
            </h2>
            <h3 className="font-semibold text-slate-dark text-sm mb-2">
              Haftung für Inhalte
            </h3>
            <p className="text-muted leading-relaxed text-sm">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>

            <h3 className="font-semibold text-slate-dark text-sm mb-2 mt-4">
              Haftung für Links
            </h3>
            <p className="text-muted leading-relaxed text-sm">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-primary hover:text-primary-dark text-sm transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
