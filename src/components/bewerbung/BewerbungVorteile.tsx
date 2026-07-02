import { CheckCircle } from "lucide-react";

const vorteile = [
  {
    title: "Keine Nacht- und Wochenenddienste",
    text: "Deine Abende und Wochenenden gehören dir.",
  },
  {
    title: "Geregelte Sprechzeiten statt Schichtplan",
    text: "Planbare Arbeitszeiten, auf die du dich verlassen kannst.",
  },
  {
    title: "Eingespieltes Team, moderne Praxis",
    text: "Kurze Wege, nette Kolleginnen und moderne Ausstattung.",
  },
  {
    title: "Bewerben ohne Bewerbungs-Stress",
    text: "Kein Anschreiben-Roman, kein Bewerbungsmarathon. Erstmal Kaffee, dann alles Weitere.",
  },
  {
    title: "Voll- oder Teilzeit",
    text: "Wir finden das Modell, das zu deinem Leben passt.",
  },
  {
    title: "Faire Bezahlung und Wertschätzung",
    text: "Gute Arbeit wird bei uns gesehen.",
  },
];

export default function BewerbungVorteile() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-primary-dark text-sm font-semibold tracking-wider uppercase mb-4">
            Warum zu uns?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-slate-dark leading-tight mb-4">
            Genau das, was in der Anzeige stand.
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Und das meinen wir ernst.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vorteile.map((v) => (
            <div
              key={v.title}
              className="bg-cloud rounded-2xl border border-border-light p-6 card-hover"
            >
              <CheckCircle className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-slate-dark text-sm mb-2">
                {v.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
