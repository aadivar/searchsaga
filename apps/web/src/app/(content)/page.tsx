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

        {/* CTA */}
        <Link
          href="/demo"
          className="flex w-full max-w-xl items-center gap-4 rounded-2xl bg-purple/10 px-8 py-6 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="text-5xl">📷</span>
          <div className="flex flex-col">
            <span className="text-xl font-black text-foreground md:text-2xl">
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
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between px-8 py-4">
        <span className="text-xs text-muted">
          Built for the way curious minds think
        </span>
        <ThemeToggle />
      </div>
    </main>
  );
}
