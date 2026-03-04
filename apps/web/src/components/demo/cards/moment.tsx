"use client";

import type { DemoCard } from "@/data/camera";
import { STAGE_COLORS } from "@/data/topics";

export function MomentCard({ card }: { card: DemoCard }) {
  const color = STAGE_COLORS[card.stage || ""] || "#888";
  return (
    <div className="flex h-full flex-col justify-center gap-8 px-8 md:px-16">
      <div
        className="h-1.5 w-16 rounded-full opacity-40"
        style={{ backgroundColor: color }}
      />
      <p className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
        {card.text}
      </p>
      {card.subtext && (
        <p className="text-xl leading-relaxed text-muted md:text-2xl">
          {card.subtext}
        </p>
      )}
    </div>
  );
}
