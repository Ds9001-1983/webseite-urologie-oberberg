import type { Metadata } from "next";
import Link from "next/link";
import BewerbungHeader from "@/components/bewerbung/BewerbungHeader";
import BewerbungHero from "@/components/bewerbung/BewerbungHero";
import ApplicationFunnel from "@/components/bewerbung/ApplicationFunnel";
import QuickApply from "@/components/bewerbung/QuickApply";
import BewerbungVorteile from "@/components/bewerbung/BewerbungVorteile";
import BewerbungAblauf from "@/components/bewerbung/BewerbungAblauf";
import BewerbungFaq, { faqs } from "@/components/bewerbung/BewerbungFaq";
import { phoneE164, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "MFA-Job in Wiehl (m/w/d) – In 60 Sekunden bewerben",
  description:
    "MFA (m/w/d) in Voll- oder Teilzeit gesucht: keine Nacht- und Wochenenddienste, geregelte Sprechzeiten, eingespieltes Team. Jetzt ohne Lebenslauf und Anschreiben bewerben.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${site.url}/bewerbung` },
  openGraph: {
    title: "Wir suchen dich: MFA (m/w/d) in Wiehl",
    description:
      "Bewerbung in 60 Sekunden – ohne Anschreiben. Urologie Oberberg, Wiehl.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/aerzte-nelles-antonyan.jpg",
        width: 884,
        height: 580,
      },
    ],
  },
};

const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Medizinische Fachangestellte / MFA (m/w/d)",
  description:
    "<p>Wir suchen eine MFA (m/w/d) in Voll- oder Teilzeit für unsere urologische Gemeinschaftspraxis in Wiehl. Keine Nacht- und Wochenenddienste, geregelte Sprechzeiten statt Schichtplan, eingespieltes Team und moderne Praxis. Bewerbung in 60 Sekunden – ohne Lebenslauf und Anschreiben.</p>",
  datePosted: "2026-07-02",
  employmentType: ["FULL_TIME", "PART_TIME"],
  directApply: true,
  hiringOrganization: {
    "@type": "Organization",
    name: site.legalName,
    sameAs: site.url,
    telephone: phoneE164,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: "DE",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function BewerbungPage() {
  return (
    <>
      <BewerbungHeader />
      <main>
        <BewerbungHero />
        <div className="-mt-20">
          <ApplicationFunnel />
        </div>
        <QuickApply />
        <BewerbungVorteile />
        <BewerbungAblauf />
        <BewerbungFaq />
      </main>

      {/* Mini-Footer — bewusst ohne Section-Anker der Startseite */}
      <footer className="bg-primary-deep py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs text-center sm:text-left">
            {site.legalName} · {site.address.street} · {site.address.zip}{" "}
            {site.address.city}
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link
              href="/impressum"
              className="text-white/50 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/50 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/"
              className="text-white/50 hover:text-white transition-colors"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
