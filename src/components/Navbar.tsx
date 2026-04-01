"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#praxis", label: "Praxis" },
  { href: "#team", label: "Team" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#sprechzeiten", label: "Sprechzeiten" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-heading text-lg">U</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading text-lg leading-tight transition-colors duration-500 ${scrolled ? "text-primary-deep" : "text-white"}`}>
                Urologie
              </span>
              <span className={`text-[10px] tracking-[0.25em] uppercase leading-tight transition-colors duration-500 ${scrolled ? "text-muted" : "text-white/70"}`}>
                Oberberg
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                  scrolled ? "text-slate" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+492262930810"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="w-3.5 h-3.5" />
              Termin anfragen
            </a>
          </div>

          <button
            className={`lg:hidden transition-colors duration-500 ${scrolled ? "text-slate-dark" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-border px-5 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate hover:text-primary hover:bg-sky/50 transition-colors text-sm font-medium py-3 px-4 rounded-xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+492262930810"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors mt-4"
          >
            <Phone className="w-3.5 h-3.5" />
            Termin anfragen
          </a>
        </div>
      </div>
    </nav>
  );
}
