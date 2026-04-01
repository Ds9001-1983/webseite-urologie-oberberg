"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Bitte geben Sie Ihren Namen ein.";
    if (!formData.email.trim()) {
      errs.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    if (!formData.message.trim())
      errs.message = "Bitte geben Sie eine Nachricht ein.";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Kontakt
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
            Schreiben Sie uns
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Haben Sie Fragen oder möchten einen Termin vereinbaren? Wir freuen
            uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto fade-in-up">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-lg p-10 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-navy mb-3">
                  Vielen Dank!
                </h3>
                <p className="text-muted">
                  Ihre Nachricht wurde gesendet. Wir werden uns schnellstmöglich
                  bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 space-y-5"
              >
                <div>
                  <label className="block text-navy text-sm font-medium mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-colors text-sm bg-cream"
                    placeholder="Ihr vollständiger Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-colors text-sm bg-cream"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-colors text-sm bg-cream"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy text-sm font-medium mb-1.5">
                    Nachricht *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-colors text-sm bg-cream resize-none"
                    placeholder="Ihre Nachricht an uns..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy-light text-light font-semibold py-3.5 rounded text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Nachricht senden
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-navy/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-sm mb-1">
                    Adresse
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Hauptstraße 15
                    <br />
                    51674 Wiehl
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-navy/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-sm mb-1">
                    Telefon
                  </h4>
                  <a
                    href="tel:+492262930810"
                    className="text-muted hover:text-gold text-sm transition-colors"
                  >
                    02262 / 93081
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-navy/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-sm mb-1">
                    E-Mail
                  </h4>
                  <a
                    href="mailto:info@urologie-oberberg.de"
                    className="text-muted hover:text-gold text-sm transition-colors"
                  >
                    info@urologie-oberberg.de
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-lg p-6 text-center">
              <p className="text-light text-sm font-medium mb-2">
                Online-Termine
              </p>
              <p className="text-muted text-xs mb-4">
                Buchen Sie Ihren Termin bequem online
              </p>
              <a
                href="https://www.doctolib.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-2.5 rounded text-sm transition-colors"
              >
                Zu Doctolib
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
