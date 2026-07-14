import { Sparkles } from "lucide-react";

/**
 * Kennzeichnung KI-generierter Bilder (EU AI Act Art. 50, Transparenzpflicht
 * ab 2.8.2026, sowie Schutz vor Irreführung): dezenter Glas-Chip, der als
 * Geschwister-Element eines Bildes in einem relativ positionierten Container
 * platziert wird — Position über className steuern (z. B. "bottom-3 right-3").
 */
export default function AiBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute z-10 inline-flex items-center gap-1.5 rounded-full bg-primary-deep/70 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium leading-none text-white/90 ${className}`}
    >
      <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
      Symbolbild – mit KI erstellt
    </span>
  );
}
