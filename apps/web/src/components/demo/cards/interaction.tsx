"use client";

import { useState } from "react";
import type { DemoCard } from "@/data/camera";
import { STAGE_COLORS } from "@/data/topics";

export function InteractionCard({ card }: { card: DemoCard }) {
  const [revealed, setRevealed] = useState(false);
  const color = STAGE_COLORS[card.stage || ""] || "#888";
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-8">
      <div
        className="h-1.5 w-16 rounded-full opacity-40"
        style={{ backgroundColor: color }}
      />
      <p className="max-w-2xl text-center text-3xl font-bold text-foreground md:text-4xl">
        {card.text}
      </p>
      {card.question && !revealed && (
        <button
          onClick={() => setRevealed(true)}
          className="rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: color }}
        >
          {card.question}
        </button>
      )}
      {revealed && (
        <p className="text-2xl text-muted md:text-3xl">
          ↑ Swipe up to find out
        </p>
      )}
    </div>
  );
}
