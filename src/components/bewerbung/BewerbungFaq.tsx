import { ChevronDown } from "lucide-react";

export const faqs = [
  {
    q: "Brauche ich einen Lebenslauf oder ein Anschreiben?",
    a: "Nein. Für die Bewerbung reichen ein paar Klicks und deine Telefonnummer. Alles Weitere besprechen wir persönlich beim Kennenlernen.",
  },
  {
    q: "Ich habe wenig Berufserfahrung – kann ich mich trotzdem bewerben?",
    a: "Ja, unbedingt. Auch beim Berufseinstieg, Wiedereinstieg oder als Auszubildende:r bist du bei uns willkommen.",
  },
  {
    q: "Wie schnell bekomme ich eine Rückmeldung?",
    a: "In der Regel innerhalb von 24–48 Stunden – meistens schneller.",
  },
  {
    q: "Ist meine Bewerbung vertraulich?",
    a: "Ja, absolut. Deine Daten nutzen wir ausschließlich für deine Bewerbung. Details findest du in unserer Datenschutzerklärung.",
  },
];

export default function BewerbungFaq() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-dark text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-slate-dark leading-tight">
            Häufige Fragen
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-cloud rounded-2xl border border-border-light overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 font-semibold text-slate-dark text-sm sm:text-base [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="w-5 h-5 text-muted shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted text-sm leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
