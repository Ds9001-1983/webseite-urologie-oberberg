import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function QuickApply() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <section className="py-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="bg-primary rounded-3xl px-6 sm:px-10 py-10 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-white mb-2">
            Lieber direkt anrufen?
          </h2>
          <p className="text-white text-sm sm:text-base mb-7 max-w-xl mx-auto">
            Kein Problem – wir freuen uns auch über einen Anruf oder eine kurze
            Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={site.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-cloud text-primary-deep font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Bewerbung MFA")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              E-Mail schreiben
            </a>
            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hallo! Ich interessiere mich für die MFA-Stelle.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
