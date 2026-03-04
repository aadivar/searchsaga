"use client";

import type { DemoCard } from "@/data/camera";
import { STAGE_COLORS } from "@/data/topics";

export function SurpriseCard({ card }: { card: DemoCard }) {
  const color = STAGE_COLORS[card.stage || ""] || "#F97316";
  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-6 px-8 md:px-12"
      style={{ backgroundColor: color + "15" }}
    >
      <p
        className="text-center text-4xl font-black leading-tight md:text-5xl"
        style={{ color }}
      >
        {card.text}
      </p>
    </div>
  );
}
