import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-deep py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-heading text-lg">U</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg text-white leading-tight">
                  Urologie
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/50 leading-tight">
                  Oberberg
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Ihre Fachärzte für Urologie in Wiehl. Kompetente Versorgung mit
              modernster Diagnostik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <div className="space-y-3">
              {[
                { href: "#praxis", label: "Praxis" },
                { href: "#team", label: "Team" },
                { href: "#leistungen", label: "Leistungen" },
                { href: "#sprechzeiten", label: "Sprechzeiten" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/50 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                Hauptstraße 15, 51674 Wiehl
              </div>
              <a href="tel:+492262930810" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                02262 / 93081
              </a>
              <a href="mailto:info@urologie-oberberg.de" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                info@urologie-oberberg.de
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Urologische Gemeinschaftspraxis
            Oberberg. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link
              href="/impressum"
              className="text-white/30 hover:text-white/60 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/30 hover:text-white/60 transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
