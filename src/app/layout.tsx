import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
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
  metadataBase: new URL(site.url),
  title: {
    default: "Urologie Oberberg | Urologische Gemeinschaftspraxis Wiehl",
    template: "%s | Urologie Oberberg",
  },
  description:
    "Ihre Fachärzte für Urologie in Wiehl. Kinderurologie, Urologie der Frau, Männergesundheit, moderne Diagnostik und ambulantes Operationszentrum. Urologische Gemeinschaftspraxis A. Gulans & Dr. A. Antonyan.",
  keywords: [
    "Urologie",
    "Wiehl",
    "Oberberg",
    "Urologe",
    "Vorsorge",
    "Kinderurologie",
    "Männergesundheit",
    "Ultraschall",
    "Vasektomie",
    "Feigwarzen",
    "Condylome",
    "ambulante Operation",
    "Prostata",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#12332F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSerif.variable} ${plusJakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-body">
        <a href="#main" data-skip-link className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
