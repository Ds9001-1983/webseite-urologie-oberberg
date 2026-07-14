import Link from "next/link";
import type { Metadata } from "next";
import { LogoLockup } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Erklärung zur Barrierefreiheit",
  alternates: { canonical: "/barrierefreiheit" },
};

export default function Barrierefreiheit() {
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
            Erklärung zur Barrierefreiheit
          </h1>
        </div>
      </div>

      {/* Content */}
      <main id="main" className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-sm max-w-none text-slate space-y-8">
          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Geltungsbereich
            </h2>
            <p className="text-muted leading-relaxed">
              Diese Erklärung zur Barrierefreiheit gilt für die Website
              urologie-oberberg.de der {site.legalName}, {site.address.street},{" "}
              {site.address.zip} {site.address.city}.
              <br />
              Stand dieser Erklärung: Juli 2026
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Beschreibung des Angebots
            </h2>
            <p className="text-muted leading-relaxed">
              Über diese Website informieren wir über unsere urologische
              Gemeinschaftspraxis, unser Leistungsspektrum und unsere
              Sprechzeiten. Darüber hinaus bieten wir ein Kontaktformular, ein
              Online-Bewerbungsformular sowie die Weiterleitung zur
              Online-Terminbuchung über den externen Dienst Doctolib an.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Bemühungen um Barrierefreiheit
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              Wir sind bemüht, unsere Website im Einklang mit den Anforderungen
              des Barrierefreiheitsstärkungsgesetzes (BFSG) barrierefrei
              zugänglich zu machen. Grundlage sind die Web Content Accessibility
              Guidelines (WCAG) 2.1, Konformitätsstufe AA, sowie die europäische
              Norm EN 301 549. Umgesetzt sind unter anderem:
            </p>
            <ul className="text-muted leading-relaxed text-sm list-disc pl-5 space-y-1.5">
              <li>
                vollständige Bedienbarkeit mit der Tastatur, einschließlich
                eines Sprunglinks zum Inhalt und sichtbarer Fokusmarkierungen
              </li>
              <li>ausreichende Farbkontraste für Texte und Bedienelemente</li>
              <li>Textalternativen für alle informativen Bilder</li>
              <li>
                korrekt ausgezeichnete Formulare mit Beschriftungen und für
                Screenreader wahrnehmbaren Fehlermeldungen
              </li>
              <li>
                eine klare Überschriften- und Seitenstruktur mit Landmarken
              </li>
              <li>
                Berücksichtigung der Systemeinstellung „Bewegung reduzieren“
                (Animationen werden dann deaktiviert)
              </li>
              <li>Zoom und Textvergrößerung werden nicht eingeschränkt</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Nicht barrierefreie Inhalte
            </h2>
            <p className="text-muted leading-relaxed">
              Die Online-Terminbuchung erfolgt über die externe Plattform
              Doctolib, auf deren Barrierefreiheit wir keinen Einfluss haben.
              Termine können jederzeit auch telefonisch unter{" "}
              <a
                href={site.phoneHref}
                className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                {site.phoneDisplay}
              </a>{" "}
              vereinbart werden.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Barrierefreiheit vor Ort
            </h2>
            <p className="text-muted leading-relaxed">
              Unsere Praxisräume sind stufenfrei zugänglich und verfügen über
              ein barrierefreies WC. Kostenlose Parkplätze befinden sich in
              unmittelbarer Nähe.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Feedback und Kontakt
            </h2>
            <p className="text-muted leading-relaxed">
              Sind Ihnen Barrieren auf dieser Website aufgefallen? Wir freuen
              uns über Ihre Rückmeldung und bemühen uns um zeitnahe Abhilfe:
              <br />
              <br />
              {site.legalName}
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              Telefon:{" "}
              <a
                href={site.phoneHref}
                className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                {site.phoneDisplay}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                {site.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-slate-dark mb-3">
              Zuständige Marktüberwachungsbehörde
            </h2>
            <p className="text-muted leading-relaxed">
              Wird auf eine Anfrage oder Beschwerde zur Barrierefreiheit nicht
              zufriedenstellend reagiert, können Sie sich an die zuständige
              Marktüberwachungsbehörde wenden:
              <br />
              <br />
              Marktüberwachungsstelle der Länder für die Barrierefreiheit von
              Produkten und Dienstleistungen (MLBF)
              <br />
              Carl-Miller-Straße 6<br />
              39112 Magdeburg
              <br />
              E-Mail: kontakt@mlbf-barrierefrei.de
              <br />
              Website:{" "}
              <a
                href="https://www.mlbf-barrierefrei.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                www.mlbf-barrierefrei.de
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
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
      </main>
    </div>
  );
}
