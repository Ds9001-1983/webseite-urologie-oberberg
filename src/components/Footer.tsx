import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-light font-serif text-lg mb-1">
              Urologische Gemeinschaftspraxis Oberberg
            </p>
            <p className="text-muted text-sm">
              P.G. Nelles & Dr. A. Antonyan · Hauptstraße 15 · 51674 Wiehl
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/impressum"
              className="text-muted hover:text-gold transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-muted hover:text-gold transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-muted/60 text-xs">
            &copy; {new Date().getFullYear()} Urologische Gemeinschaftspraxis
            Oberberg. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
