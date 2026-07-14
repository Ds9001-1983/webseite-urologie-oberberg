"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Screenreader-Nutzer sollen die Bestätigung sofort hören
  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

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
    <section id="kontakt" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div data-reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Kontakt
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-dark leading-tight mb-6">
            Schreiben Sie uns
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Haben Sie Fragen oder möchten einen Termin vereinbaren? Wir freuen
            uns auf Ihre Nachricht.
          </p>
        </div>

        <div data-reveal className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                role="status"
                className="bg-cloud rounded-3xl p-12 text-center border border-border-light"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500" aria-hidden="true" />
                </div>
                <h3
                  ref={successHeadingRef}
                  tabIndex={-1}
                  className="font-heading text-2xl text-slate-dark mb-3 outline-none"
                >
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
                noValidate
                className="bg-cloud rounded-3xl p-8 sm:p-10 border border-border-light space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-slate-dark text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                    placeholder="Ihr vollständiger Name"
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="text-red-700 text-xs mt-1.5"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-slate-dark text-sm font-medium mb-2"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        role="alert"
                        className="text-red-700 text-xs mt-1.5"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-slate-dark text-sm font-medium mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-slate-dark text-sm font-medium mb-2"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    aria-required="true"
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm resize-none"
                    placeholder="Ihre Nachricht an uns..."
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      role="alert"
                      className="text-red-700 text-xs mt-1.5"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send className="w-4 h-4" />
                  Nachricht senden
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-cloud rounded-2xl p-6 border border-border-light card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-dark text-sm mb-1">
                    Adresse
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cloud rounded-2xl p-6 border border-border-light card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-dark text-sm mb-1">
                    Telefon
                  </h3>
                  <a
                    href={site.phoneHref}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-cloud rounded-2xl p-6 border border-border-light card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-dark text-sm mb-1">
                    E-Mail
                  </h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-7 text-center">
              <p className="text-white font-semibold text-sm mb-2">
                Online-Termine
              </p>
              <p className="text-white text-xs mb-5">
                Buchen Sie Ihren Termin bequem online
              </p>
              <a
                href={site.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-cloud text-primary-deep font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:shadow-lg"
              >
                Termin buchen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
