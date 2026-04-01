"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <span className="text-gold font-serif text-xl font-bold">
              Urologie
            </span>
            <span className="text-light text-sm tracking-widest uppercase">
              Oberberg
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-light/80 hover:text-gold transition-colors text-sm tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded text-sm tracking-wide transition-colors"
            >
              Termin anfragen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-light/80 hover:text-gold transition-colors text-sm tracking-wide uppercase py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMobileOpen(false)}
              className="block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded text-sm tracking-wide transition-colors text-center mt-3"
            >
              Termin anfragen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
