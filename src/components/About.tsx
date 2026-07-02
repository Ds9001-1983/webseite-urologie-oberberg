import Image from "next/image";
import { Shield, Accessibility, ParkingSquare, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Erfahrung & Kompetenz",
    text: "Langjährige Expertise in der urologischen Versorgung",
    color: "bg-sky text-primary-dark",
  },
  {
    icon: Accessibility,
    title: "Barrierefrei",
    text: "Stufenfreier Zugang und barrierefreies WC",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ParkingSquare,
    title: "Parkplätze",
    text: "Kostenlose Parkplätze in unmittelbarer Nähe",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: CalendarCheck,
    title: "Online-Termine",
    text: "Bequem online über Doctolib buchen",
    color: "bg-violet-50 text-violet-600",
  },
];

export default function About() {
  return (
    <section id="praxis" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <div data-reveal>
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Willkommen
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-dark leading-tight mb-6">
              Unsere Praxis
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              In der Urologischen Gemeinschaftspraxis Oberberg stehen Ihre
              Gesundheit und Ihr Wohlbefinden an erster Stelle. Wir bieten Ihnen
              ein umfassendes Spektrum moderner urologischer Diagnostik und
              Therapie in einer angenehmen, barrierefreien Praxisumgebung.
            </p>
            <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cloud transition-colors duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center shrink-0`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-dark text-sm mb-1">
                      {f.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div data-reveal="right" className="relative">
            <div data-parallax-img className="relative rounded-3xl overflow-hidden aspect-4/5">
              <Image
                src="/images/praxis.png"
                alt="Moderne Praxisräume"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-black/5 p-6 border border-border-light">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span
                    data-counter="20"
                    data-suffix="+"
                    className="text-primary font-heading text-2xl"
                  >
                    20+
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-dark text-sm">Jahre Erfahrung</p>
                  <p className="text-muted text-xs">in der Urologie</p>
                </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-sky rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
