"use client";

import { useState } from "react";
import {
  STAGE_ORDER,
  STAGE_COLORS,
  STAGE_NAMES,
  STAGE_ICONS,
  STAGE_DESCRIPTIONS,
} from "@/data/topics";

export function StageNavigator({
  currentStage,
  visitedStages,
  onStageClick,
}: {
  currentStage: string;
  visitedStages: Set<string>;
  onStageClick: (stage: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-3 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end">
      {/* Collapsed: small dots like original */}
      {!isExpanded && (
        <button
          className="flex flex-col items-center gap-1 rounded-full p-1.5"
          onClick={() => setIsExpanded(true)}
          aria-label="Expand stage navigation"
        >
          {STAGE_ORDER.map((stage) => {
            const color = STAGE_COLORS[stage];
            const isActive = stage === currentStage;
            const isPast = visitedStages.has(stage);
            return (
              <div
                key={stage}
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 12 : stage === currentStage ? 8 : 6,
                  height: isActive ? 12 : stage === currentStage ? 8 : 6,
                  backgroundColor: color,
                  opacity: isActive ? 1 : isPast ? 0.7 : 0.3,
                  boxShadow: isActive
                    ? `0 0 8px ${color}80`
                    : "none",
                  transform: isActive ? "scale(1.4)" : "scale(1)",
                }}
              />
            );
          })}
        </button>
      )}

      {/* Expanded: full stage labels with click-to-navigate */}
      {isExpanded && (
        <div
          className="flex flex-col gap-1 rounded-2xl border border-border bg-surface/95 p-2 shadow-xl backdrop-blur-md"
          style={{ animation: "stageNavIn 200ms ease-out" }}
        >
          <style>{`
            @keyframes stageNavIn {
              from { transform: translateX(10px); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
          `}</style>

          {/* Close button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="mb-1 self-end px-2 text-xs text-muted hover:text-foreground"
          >
            ✕
          </button>

          {STAGE_ORDER.map((stage) => {
            const color = STAGE_COLORS[stage];
            const isActive = stage === currentStage;
            const isPast = visitedStages.has(stage);

            return (
              <button
                key={stage}
                onClick={() => {
                  onStageClick(stage);
                  setIsExpanded(false);
                }}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-all hover:bg-surface-raised active:scale-[0.97]"
                style={{
                  backgroundColor: isActive ? color + "18" : undefined,
                }}
              >
                {/* Dot */}
                <div
                  className="shrink-0 rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? 14 : 10,
                    height: isActive ? 14 : 10,
                    backgroundColor: color,
                    opacity: isActive ? 1 : isPast ? 0.7 : 0.35,
                    boxShadow: isActive
                      ? `0 0 8px ${color}80`
                      : "none",
                  }}
                />
                {/* Label */}
                <div className="flex flex-col">
                  <span
                    className="whitespace-nowrap text-sm transition-colors"
                    style={{
                      color: isActive ? color : undefined,
                      fontWeight: isActive ? 700 : isPast ? 500 : 400,
                      opacity: isActive ? 1 : isPast ? 0.8 : 0.5,
                    }}
                  >
                    {STAGE_ICONS[stage]} {STAGE_NAMES[stage]}
                  </span>
                  <span className="text-[10px] leading-tight text-muted">
                    {STAGE_DESCRIPTIONS[stage]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
