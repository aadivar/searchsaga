"use client";

import { useState } from "react";
import type { ExplorationNode } from "@/app/(content)/demo/page";
import { DOMAIN_COLORS } from "@/data/topics";

export function GalaxyMinimap({
  explorationPath,
  currentTopicSlug,
  onNavigateToTopic,
}: {
  explorationPath: ExplorationNode[];
  currentTopicSlug: string;
  onNavigateToTopic: (slug: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Deduplicate by slug (keep first visit)
  const uniqueNodes: ExplorationNode[] = [];
  const seen = new Set<string>();
  for (const node of explorationPath) {
    if (!seen.has(node.slug)) {
      seen.add(node.slug);
      uniqueNodes.push(node);
    }
  }

  const visitedCount = uniqueNodes.length;

  // Layout: spread nodes horizontally across SVG
  const svgWidth = 280;
  const svgHeight = 200;
  const nodeRadius = 28;
  const nodePositions = uniqueNodes.map((_, i) => ({
    x: 60 + i * ((svgWidth - 120) / Math.max(uniqueNodes.length - 1, 1)),
    y: svgHeight / 2 + (i % 2 === 1 ? -20 : 20),
  }));

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-surface/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
        style={{
          border: `2px solid ${visitedCount > 1 ? DOMAIN_COLORS[uniqueNodes[uniqueNodes.length - 1].domain] || "#888" : "var(--color-border)"}`,
          animation: visitedCount > 1 ? "pulseRing 2s ease-in-out infinite" : "none",
        }}
        aria-label="Open exploration map"
      >
        {/* Mini constellation icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="8" r="2.5" fill="var(--color-foreground)" opacity="0.7" />
          <circle cx="18" cy="8" r="2.5" fill="var(--color-foreground)" opacity="0.7" />
          <circle cx="12" cy="18" r="2.5" fill="var(--color-foreground)" opacity="0.7" />
          <line x1="6" y1="8" x2="18" y2="8" stroke="var(--color-foreground)" strokeWidth="1" opacity="0.3" />
          <line x1="18" y1="8" x2="12" y2="18" stroke="var(--color-foreground)" strokeWidth="1" opacity="0.3" />
          <line x1="6" y1="8" x2="12" y2="18" stroke="var(--color-foreground)" strokeWidth="1" opacity="0.3" />
        </svg>
        {visitedCount > 1 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
            {visitedCount}
          </span>
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          className="fixed bottom-20 left-6 z-50 w-80 rounded-2xl border border-border bg-surface/95 p-5 shadow-xl backdrop-blur-md"
          style={{
            animation: "minimapIn 200ms ease-out",
          }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-bold text-foreground">
              Your Exploration
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {uniqueNodes.length === 1 ? (
            <div className="flex flex-col items-center gap-3 py-6">
              <span className="text-4xl">{uniqueNodes[0].emoji || "📷"}</span>
              <p className="text-center text-sm text-muted">
                Swipe into a cousin to explore deeper!
              </p>
            </div>
          ) : (
            <svg
              width={svgWidth}
              height={svgHeight}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="mx-auto"
            >
              {/* Connection lines */}
              {uniqueNodes.map((node, i) => {
                if (i === 0) return null;
                const from = nodePositions[i - 1];
                const to = nodePositions[i];
                return (
                  <line
                    key={`line-${i}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={DOMAIN_COLORS[node.domain] || "#888"}
                    strokeWidth="2"
                    strokeDasharray="100"
                    opacity="0.5"
                    style={{
                      animation: `drawLine 0.6s ease-out ${i * 0.2}s both`,
                    }}
                  />
                );
              })}

              {/* Nodes */}
              {uniqueNodes.map((node, i) => {
                const pos = nodePositions[i];
                const color = DOMAIN_COLORS[node.domain] || "#888";
                const isCurrent = node.slug === currentTopicSlug;
                return (
                  <g
                    key={node.slug}
                    className="cursor-pointer"
                    onClick={() => {
                      onNavigateToTopic(node.slug);
                      setIsOpen(false);
                    }}
                  >
                    {/* Pulse ring for current */}
                    {isCurrent && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={nodeRadius + 6}
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        opacity="0.3"
                        style={{
                          animation: "pulseRing 2s ease-in-out infinite",
                        }}
                      />
                    )}
                    {/* Node circle */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeRadius}
                      fill={color}
                      opacity={isCurrent ? 1 : 0.7}
                    />
                    {/* Emoji */}
                    <text
                      x={pos.x}
                      y={pos.y + 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="20"
                    >
                      {node.emoji || "•"}
                    </text>
                    {/* Title below */}
                    <text
                      x={pos.x}
                      y={pos.y + nodeRadius + 16}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight={isCurrent ? "bold" : "normal"}
                      fill="var(--color-foreground)"
                      opacity={isCurrent ? 1 : 0.6}
                    >
                      {node.title.length > 18
                        ? node.title.slice(0, 16) + "…"
                        : node.title}
                    </text>
                  </g>
                );
              })}
            </svg>
          )}

          <p className="mt-3 text-center text-xs text-muted">
            {uniqueNodes.length} topic{uniqueNodes.length !== 1 ? "s" : ""}{" "}
            explored
          </p>
        </div>
      )}
    </>
  );
}
