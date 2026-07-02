import { ArrowRight } from "lucide-react";

const schritte = [
  {
    nr: "1",
    title: "In 60 Sekunden bewerben",
    text: "Ein paar Klicks, Name, Telefonnummer – fertig. Ganz ohne Unterlagen.",
  },
  {
    nr: "2",
    title: "Erstmal Kaffee trinken",
    text: "Wir melden uns innerhalb von 24–48 Stunden und laden dich auf einen Kaffee in die Praxis ein – ganz entspannt zum Kennenlernen.",
  },
  {
    nr: "3",
    title: "Entscheidung",
    text: "Wenn es für beide Seiten passt, klären wir alles Weitere. Schnell und unkompliziert.",
  },
];

export default function BewerbungAblauf() {
  return (
    <section className="py-20 lg:py-28 bg-cloud">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-primary-dark text-sm font-semibold tracking-wider uppercase mb-4">
            Ablauf
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-slate-dark leading-tight">
            So läuft&apos;s ab
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {schritte.map((s) => (
            <div
              key={s.nr}
              className="bg-white rounded-2xl border border-border-light p-7 card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <span className="text-primary-dark font-heading text-xl">
                  {s.nr}
                </span>
              </div>
              <h3 className="font-semibold text-slate-dark mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#bewerben"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Jetzt bewerben
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
