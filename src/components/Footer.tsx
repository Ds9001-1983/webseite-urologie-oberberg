import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { LogoLockup } from "./Logo";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary-deep py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <LogoLockup
                markClassName="text-primary-light"
                primaryTextClassName="text-white"
                secondaryTextClassName="text-primary-light"
              />
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/50 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/bewerbung"
                className="flex items-center gap-1.5 text-primary-light hover:text-white text-sm font-medium transition-colors"
              >
                Jetzt bewerben
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                {site.address.street}, {site.address.zip} {site.address.city}
              </div>
              <a href={site.phoneHref} className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} {site.legalName}. Alle Rechte
            vorbehalten.
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
