"use client";

import type { Cousin } from "@/data/camera";
import { DOMAIN_COLORS, topicRegistry } from "@/data/topics";

export function CousinCard({
  cousin,
  onBack,
  onExplore,
}: {
  cousin: Cousin;
  onBack: () => void;
  onExplore?: (cousin: Cousin) => void;
}) {
  const color = DOMAIN_COLORS[cousin.domain] || "#888";
  const isNavigable =
    cousin.topicSlug && cousin.topicSlug in topicRegistry;

  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-8 px-8"
      style={{
        animation: "slideInFromRight 0.35s ease-out",
      }}
    >
      <button
        onClick={onBack}
        className="absolute left-6 top-20 text-base text-muted hover:text-foreground"
      >
        ← back to story
      </button>

      <span className="text-7xl">{cousin.emoji}</span>

      <span
        className="rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white"
        style={{ backgroundColor: color }}
      >
        {cousin.domain}
      </span>

      <h3 className="text-center text-3xl font-bold text-foreground md:text-4xl">
        {cousin.title}
      </h3>

      <p className="max-w-lg text-center text-xl leading-relaxed text-muted md:text-2xl">
        {cousin.hook}
      </p>

      <div className="mt-4 flex flex-col items-center gap-3">
        {isNavigable ? (
          <button
            onClick={() => onExplore?.(cousin)}
            className="rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: color }}
          >
            Explore this story →
          </button>
        ) : (
          <>
            <div
              className="h-1.5 w-20 rounded-full"
              style={{ backgroundColor: color }}
            />
            <p className="text-base text-muted">Coming soon</p>
          </>
        )}
      </div>
    </div>
  );
}
