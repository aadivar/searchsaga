"use client";

import type { DemoCard } from "@/data/camera";
import { STAGE_COLORS, STAGE_ICONS, STAGE_ORDER, STAGE_DESCRIPTIONS } from "@/data/topics";

export function StageMarkerCard({ card }: { card: DemoCard }) {
  const color = STAGE_COLORS[card.stage || ""] || "#888";
  const icon = STAGE_ICONS[card.stage || ""] || "•";
  const description = STAGE_DESCRIPTIONS[card.stage || ""] || "";
  const stageNum = card.stage
    ? STAGE_ORDER.indexOf(card.stage) + 1
    : 0;

  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-6"
      style={{ backgroundColor: color + "14" }}
    >
      <span className="text-[120px] leading-none">{icon}</span>
      <h2
        className="text-center text-5xl font-black tracking-tight md:text-6xl"
        style={{ color }}
      >
        {card.text}
      </h2>
      <p className="max-w-sm text-center text-lg leading-relaxed text-muted">
        {description}
      </p>
      <div
        className="h-1.5 w-24 rounded-full"
        style={{ backgroundColor: color }}
      />
      {stageNum > 0 && (
        <span
          className="rounded-full px-4 py-1.5 text-sm font-semibold text-white"
          style={{ backgroundColor: color + "90" }}
        >
          Stage {stageNum} of 7
        </span>
      )}
    </div>
  );
}
