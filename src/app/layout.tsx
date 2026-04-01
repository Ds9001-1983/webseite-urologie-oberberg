import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urologische Gemeinschaftspraxis Oberberg | Nelles & Dr. Antonyan",
  description:
    "Ihre Fachärzte für Urologie in Wiehl. Vorsorge, Krebsfrüherkennung, Sonographie und mehr. Urologische Gemeinschaftspraxis P.G. Nelles & Dr. A. Antonyan.",
  keywords:
    "Urologie, Wiehl, Oberberg, Urologe, Vorsorge, Krebsfrüherkennung, Sonographie, Prostata",
  openGraph: {
    title: "Urologische Gemeinschaftspraxis Oberberg",
    description:
      "Ihre Spezialisten für Urologie in Wiehl – Vorsorge, Diagnostik und Therapie.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSerif.variable} ${plusJakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-body">{children}</body>
    </html>
  );
}
