import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Karriere from "@/components/Karriere";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ScrollFX";
import { openingHoursSpec, phoneE164, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Urologie Oberberg – Urologische Gemeinschaftspraxis Wiehl",
    description:
      "Ihre Spezialisten für Urologie in Wiehl – Vorsorge, Diagnostik und Therapie.",
    url: "/",
  },
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/aerzte-gulans-antonyan-full.jpg`,
  telephone: phoneE164,
  email: site.email,
  medicalSpecialty: "Urologic",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "DE",
  },
  openingHoursSpecification: openingHoursSpec.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...spec.days],
    opens: spec.opens,
    closes: spec.closes,
  })),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Team />
        <Services />
        <Hours />
        <Karriere />
        <Contact />
      </main>
      <Footer />
      <ScrollFX />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
    </>
  );
}
