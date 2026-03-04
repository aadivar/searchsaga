"use client";

import type { DemoCard } from "@/data/camera";

export function BreathingCard({ card }: { card: DemoCard }) {
  const color = card.color || "#14B8A6";
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div
        className="h-48 w-48 rounded-full opacity-30 md:h-56 md:w-56"
        style={{
          backgroundColor: color,
          animation: "breathe 4s ease-in-out infinite",
        }}
      />
      <p className="text-lg text-muted/40">pause and think...</p>
    </div>
  );
}
