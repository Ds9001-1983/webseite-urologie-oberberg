import Link from "next/link";
import type { Metadata } from "next";
import { LogoLockup } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz" },
};

export default function Datenschutz() {
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
            Datenschutzerklärung
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-sm max-w-none text-slate space-y-8">
          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold text-slate-dark text-sm mb-2">
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
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              2. Verantwortliche Stelle
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-muted leading-relaxed text-sm mt-2">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              Telefon: {site.phoneDisplay}
              <br />
              E-Mail: {site.email}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              3. Datenerfassung auf unserer Website
            </h2>
            <h3 className="font-semibold text-slate-dark text-sm mb-2">
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

            <h3 className="font-semibold text-slate-dark text-sm mb-2 mt-4">
              Online-Bewerbungsformular
            </h3>
            <p className="text-muted leading-relaxed text-sm">
              Wenn Sie sich über unser Online-Bewerbungsformular bewerben,
              verarbeiten wir die von Ihnen angegebenen Daten (z.&nbsp;B. Name,
              Telefonnummer, E-Mail-Adresse sowie Ihre Angaben zu Position,
              Berufserfahrung und Verfügbarkeit) ausschließlich zur Bearbeitung
              Ihrer Bewerbung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              i.&nbsp;V.&nbsp;m. § 26 BDSG (Anbahnung eines
              Beschäftigungsverhältnisses) sowie Ihre Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO). Ihre Bewerbungsdaten werden vertraulich
              behandelt und gelöscht, sobald sie für das Bewerbungsverfahren
              nicht mehr erforderlich sind, spätestens jedoch sechs Monate nach
              Abschluss des Verfahrens, sofern keine gesetzlichen
              Aufbewahrungspflichten bestehen. Zur technischen Bearbeitung
              können wir uns eines Dienstleisters (Auftragsverarbeiter im
              Sinne von Art. 28 DSGVO) bedienen, mit dem ein entsprechender
              Vertrag besteht; eine Weitergabe an sonstige Dritte findet nicht
              statt.
            </p>

            <h3 className="font-semibold text-slate-dark text-sm mb-2 mt-4">
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
            <h2 className="font-heading text-xl text-slate-dark mb-3">
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
            <h2 className="font-heading text-xl text-slate-dark mb-3">
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
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              6. Cookies
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              Diese Website verwendet keine Tracking-Cookies. Es werden
              lediglich technisch notwendige Cookies eingesetzt, die für den
              Betrieb der Website erforderlich sind.
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
