import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Urologische Gemeinschaftspraxis Oberberg",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/"
            className="text-gold font-serif text-xl font-bold hover:text-gold-light transition-colors"
          >
            Urologie Oberberg
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl text-light mt-6">
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-sm max-w-none text-navy-light space-y-8">
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-muted leading-relaxed">
              Urologische Gemeinschaftspraxis
              <br />
              P.G. Nelles & Dr. A. Antonyan
              <br />
              Hauptstraße 15
              <br />
              51674 Wiehl
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              Vertreten durch
            </h2>
            <p className="text-muted leading-relaxed">
              Peter Günter Nelles
              <br />
              Dr. med. Albert Antonyan
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">Kontakt</h2>
            <p className="text-muted leading-relaxed">
              Telefon: 02262 / 93081
              <br />
              E-Mail: info@urologie-oberberg.de
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              Berufsbezeichnung
            </h2>
            <p className="text-muted leading-relaxed">
              Fachärzte für Urologie
              <br />
              Berufsbezeichnung verliehen in der Bundesrepublik Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
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
            <h2 className="font-serif text-xl text-navy mb-3">
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
            <h2 className="font-serif text-xl text-navy mb-3">
              Berufsrechtliche Regelungen
            </h2>
            <p className="text-muted leading-relaxed">
              Berufsordnung der Ärztekammer Nordrhein
              <br />
              Heilberufsgesetz NRW
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              Haftungsausschluss
            </h2>
            <h3 className="font-semibold text-navy text-sm mb-2">
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

            <h3 className="font-semibold text-navy text-sm mb-2 mt-4">
              Haftung für Links
            </h3>
            <p className="text-muted leading-relaxed text-sm">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-gold hover:text-gold-dark text-sm transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
