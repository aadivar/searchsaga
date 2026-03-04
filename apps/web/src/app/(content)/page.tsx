import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const stages = [
  { icon: "🌱", name: "The Itch", color: "#F97316", desc: "The problem or desire that started it all" },
  { icon: "⚡", name: "The Mutation", color: "#8B5CF6", desc: "The first wild experiment that changed everything" },
  { icon: "🧬", name: "The DNA", color: "#14B8A6", desc: "The core idea that makes it tick" },
  { icon: "🌸", name: "The Birth", color: "#3B82F6", desc: "The moment it became real" },
  { icon: "🌀", name: "The Growth Spurt", color: "#EAB308", desc: "When it spread and got powerful fast" },
  { icon: "⚔️", name: "The Fight", color: "#EF4444", desc: "The battles it fought to survive" },
  { icon: "✨", name: "The Offspring", color: "#EC4899", desc: "What it created next — and what's coming" },
];

export default function HomePage() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden">
      {/* Top half — Hero */}
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
        <h1 className="text-6xl font-black tracking-tight text-foreground md:text-8xl">
          SearchSaga
        </h1>
        <p className="text-2xl font-semibold text-orange md:text-3xl">
          Subjects, Re-imagined for the Age of AI.
        </p>
        <p className="rounded-full bg-teal/10 px-5 py-2 text-base font-semibold text-teal">
          For curious minds, ages 8–12
        </p>
        <p className="mt-2 max-w-xl text-xl leading-relaxed text-muted">
          Every topic unfolds as a 7-stage evolution story — and every story
          connects to another. Swipe, explore, and discover how the world is
          secretly linked.
        </p>
      </div>

      {/* Bottom half — Stages + CTA */}
      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-8">
        {/* 7 Stages */}
        <div className="w-full max-w-4xl">
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-muted">
            Every topic follows 7 stages
          </p>
          <div className="grid grid-cols-7 gap-2">
            {stages.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-xl p-3 text-center"
                style={{ backgroundColor: s.color + "10" }}
              >
                <span className="text-3xl md:text-4xl">{s.icon}</span>
                <span
                  className="text-xs font-bold leading-tight md:text-sm"
                  style={{ color: s.color }}
                >
                  {s.name}
                </span>
                <span className="hidden text-[11px] leading-snug text-muted lg:block">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — mobile: tap to enter, desktop: scan QR */}
        <div className="flex w-full max-w-xl flex-col items-center gap-4">
          {/* Mobile CTA */}
          <Link
            href="/demo"
            className="flex w-full items-center gap-4 rounded-2xl bg-purple/10 px-8 py-6 transition-all hover:scale-[1.02] active:scale-[0.98] md:hidden"
          >
            <span className="text-5xl">📷</span>
            <div className="flex flex-col">
              <span className="text-xl font-black text-foreground">
                How the Camera Grew Up
              </span>
              <span className="text-base text-muted">
                From dark rooms to your pocket — start exploring →
              </span>
              <span className="mt-1 text-xs text-muted/60">
                3 stories · 90+ cards · swipe to explore
              </span>
            </div>
          </Link>

          {/* Desktop: QR code + link */}
          <div className="hidden w-full items-center gap-8 rounded-2xl bg-purple/10 px-8 py-6 md:flex">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://searchsaga.vercel.app/demo&bgcolor=ffffff&color=000000&margin=8"
              alt="Scan to open on mobile"
              width={160}
              height={160}
              className="rounded-xl"
            />
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold uppercase tracking-widest text-muted">
                Best on mobile
              </span>
              <span className="text-2xl font-black text-foreground">
                📷 How the Camera Grew Up
              </span>
              <span className="text-base text-muted">
                Scan the QR code to open on your phone — or{" "}
                <Link href="/demo" className="font-semibold text-purple underline underline-offset-2">
                  try it here →
                </Link>
              </span>
              <span className="text-xs text-muted/60">
                3 stories · 90+ cards · swipe to explore
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/aadivar/searchsaga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <span className="text-xs text-muted/40">·</span>
          <span className="text-xs text-muted">MIT License</span>
          <span className="text-xs text-muted/40">·</span>
          <span className="text-xs text-muted">Free forever</span>
        </div>
        <ThemeToggle />
      </div>
    </main>
  );
}
