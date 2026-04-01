import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
