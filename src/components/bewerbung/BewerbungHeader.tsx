import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { LogoLockup } from "@/components/Logo";
import { site } from "@/lib/site";

export default function BewerbungHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Zur Startseite">
            <LogoLockup
              markClassName="text-primary"
              primaryTextClassName="text-slate-dark"
              secondaryTextClassName="text-primary-dark"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-muted hover:text-slate-dark text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zur Website
            </Link>
            <a
              href={site.phoneHref}
              aria-label={`Anrufen: ${site.phoneDisplay}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-4 sm:px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{site.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
