import { Accessibility, ParkingSquare, CalendarCheck, Shield } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Erfahrung & Kompetenz",
    text: "Langjährige Expertise in der urologischen Versorgung",
  },
  {
    icon: Accessibility,
    title: "Barrierefrei",
    text: "Stufenfreier Zugang und barrierefreies WC",
  },
  {
    icon: ParkingSquare,
    title: "Parkplätze",
    text: "Kostenlose Parkplätze in unmittelbarer Nähe",
  },
  {
    icon: CalendarCheck,
    title: "Online-Termine",
    text: "Bequem online über Doctolib buchen",
  },
];

export default function About() {
  return (
    <section id="praxis" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Willkommen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
            Unsere Praxis
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            In der Urologischen Gemeinschaftspraxis Oberberg stehen Ihre
            Gesundheit und Ihr Wohlbefinden an erster Stelle. Wir bieten Ihnen
            ein umfassendes Spektrum moderner urologischer Diagnostik und
            Therapie in einer angenehmen, barrierefreien Praxisumgebung.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-up">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-navy text-sm mb-2">{f.title}</h3>
              <p className="text-muted text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
