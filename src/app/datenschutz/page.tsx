import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Urologische Gemeinschaftspraxis Oberberg",
};

export default function Datenschutz() {
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
            Datenschutzerklärung
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-sm max-w-none text-navy-light space-y-8">
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold text-navy text-sm mb-2">
              Allgemeine Hinweise
            </h3>
            <p className="text-muted leading-relaxed text-sm">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              2. Verantwortliche Stelle
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-muted leading-relaxed text-sm mt-2">
              Urologische Gemeinschaftspraxis
              <br />
              P.G. Nelles & Dr. A. Antonyan
              <br />
              Hauptstraße 15
              <br />
              51674 Wiehl
              <br />
              Telefon: 02262 / 93081
              <br />
              E-Mail: info@urologie-oberberg.de
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              3. Datenerfassung auf unserer Website
            </h2>
            <h3 className="font-semibold text-navy text-sm mb-2">
              Kontaktformular
            </h3>
            <p className="text-muted leading-relaxed text-sm">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das
              Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf
              Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>

            <h3 className="font-semibold text-navy text-sm mb-2 mt-4">
              Server-Log-Dateien
            </h3>
            <p className="text-muted leading-relaxed text-sm">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
              des zugreifenden Rechners, Uhrzeit der Serveranfrage und
              IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              4. Ihre Rechte
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
              erhalten. Sie haben außerdem das Recht, die Berichtigung, Sperrung
              oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
              Fragen zum Thema Datenschutz können Sie sich jederzeit unter der
              im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht
              Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              5. SSL-Verschlüsselung
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von &quot;http://&quot; auf
              &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-3">
              6. Cookies
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              Diese Website verwendet keine Tracking-Cookies. Es werden
              lediglich technisch notwendige Cookies eingesetzt, die für den
              Betrieb der Website erforderlich sind.
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
