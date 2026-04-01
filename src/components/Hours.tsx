import { Clock, Phone } from "lucide-react";

const hours = [
  { day: "Montag", time: "08:00 – 12:00 Uhr & 14:00 – 17:00 Uhr" },
  { day: "Dienstag", time: "08:00 – 12:00 Uhr & 14:00 – 17:00 Uhr" },
  { day: "Mittwoch", time: "08:00 – 12:00 Uhr" },
  { day: "Donnerstag", time: "08:00 – 12:00 Uhr & 14:00 – 17:00 Uhr" },
  { day: "Freitag", time: "08:00 – 12:00 Uhr" },
];

export default function Hours() {
  return (
    <section id="sprechzeiten" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Öffnungszeiten
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-light mb-6">
            Sprechzeiten
          </h2>
        </div>

        <div className="max-w-xl mx-auto fade-in-up">
          <div className="bg-navy-light/50 border border-white/10 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center gap-3">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-light font-semibold">
                Unsere Sprechzeiten
              </span>
            </div>
            <div className="divide-y divide-white/5">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span className="text-light text-sm font-medium">
                    {h.day}
                  </span>
                  <span className="text-muted text-sm">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center space-y-3">
            <p className="text-muted text-sm">
              Termine nach Vereinbarung. Bitte melden Sie sich telefonisch an.
            </p>
            <a
              href="tel:+492262930810"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              02262 / 93081
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
