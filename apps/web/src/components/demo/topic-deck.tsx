"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import type { DemoCard, Cousin } from "@/data/camera";
import type { TopicData } from "@/data/topics";
import { STAGE_COLORS, STAGE_ORDER, DOMAIN_COLORS } from "@/data/topics";
import { CardRenderer } from "./card-renderer";
import { StageNavigator } from "./stage-navigator";

export function TopicDeck({
  topicSlug,
  cards,
  topicMeta,
  onCousinExplore,
  topicStack,
  onBack,
}: {
  topicSlug: string;
  cards: DemoCard[];
  topicMeta: TopicData;
  onCousinExplore: (cousin: Cousin) => void;
  topicStack: string[];
  onBack: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visitedStages, setVisitedStages] = useState<Set<string>>(
    () => new Set(cards[0]?.stage ? [cards[0].stage] : [])
  );

  // Reset scroll when topic changes
  useEffect(() => {
    setCurrentIndex(0);
    setVisitedStages(new Set(cards[0]?.stage ? [cards[0].stage] : []));
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [topicSlug, cards]);

  const stageFirstCardIndex = useMemo(() => {
    const map: Record<string, number> = {};
    cards.forEach((card, i) => {
      if (card.type === "stage_marker" && card.stage && !(card.stage in map)) {
        map[card.stage] = i;
      }
    });
    return map;
  }, [cards]);

  const currentStage = useMemo(() => {
    for (let i = currentIndex; i >= 0; i--) {
      if (cards[i]?.stage) return cards[i].stage!;
    }
    return STAGE_ORDER[0];
  }, [currentIndex, cards]);

  useEffect(() => {
    if (currentStage) {
      setVisitedStages((prev) => {
        if (prev.has(currentStage)) return prev;
        return new Set([...prev, currentStage]);
      });
    }
  }, [currentStage]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const cardHeight = containerRef.current.clientHeight;
    const index = Math.round(scrollTop / cardHeight);
    setCurrentIndex(Math.min(index, cards.length - 1));
  }, [cards.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleStageClick = useCallback(
    (stage: string) => {
      const cardIndex = stageFirstCardIndex[stage];
      if (cardIndex == null || !containerRef.current) return;
      const cardHeight = containerRef.current.clientHeight;
      containerRef.current.scrollTo({
        top: cardIndex * cardHeight,
        behavior: "smooth",
      });
    },
    [stageFirstCardIndex]
  );

  const currentCard = cards[currentIndex];
  const currentColor = currentCard?.stage
    ? STAGE_COLORS[currentCard.stage]
    : "#888";
  const depth = topicStack.length;

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-background">
      {/* Top bar */}
      <div className="fixed left-0 right-16 top-0 z-50 flex items-center justify-between bg-background/80 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          {depth > 1 ? (
            <button
              onClick={onBack}
              className="text-sm text-muted hover:text-foreground"
            >
              ← Back
            </button>
          ) : (
            <a href="/" className="text-sm text-muted hover:text-foreground">
              ← Back
            </a>
          )}
          {/* Depth breadcrumbs */}
          {depth > 1 && (
            <div className="flex items-center gap-1">
              {topicStack.map((slug, i) => (
                <span key={slug} className="flex items-center gap-1">
                  {i > 0 && <span className="text-xs text-muted">→</span>}
                  <span
                    className={`text-xs ${
                      i === depth - 1
                        ? "font-bold text-foreground"
                        : "text-muted"
                    }`}
                  >
                    {slug}
                  </span>
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm font-bold text-foreground">
            {topicMeta.title}
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-xs font-medium text-white"
            style={{ backgroundColor: DOMAIN_COLORS[topicMeta.domain] }}
          >
            {topicMeta.domain}
          </span>
        </div>
      </div>

      {/* Stage progress bar */}
      <div
        className="fixed left-0 top-0 z-40 h-1 transition-all duration-500"
        style={{
          backgroundColor: currentColor,
          width: `${((currentIndex + 1) / cards.length) * 100}%`,
        }}
      />

      {/* Card scroll */}
      <div
        ref={containerRef}
        className="h-full w-full snap-y snap-mandatory overflow-y-scroll"
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex h-dvh w-full snap-start snap-always items-center justify-center"
          >
            <div className="h-full w-full max-w-2xl">
              <CardRenderer card={card} onCousinExplore={onCousinExplore} />
            </div>
          </div>
        ))}
      </div>

      {/* Stage navigator */}
      <StageNavigator
        currentStage={currentStage}
        visitedStages={visitedStages}
        onStageClick={handleStageClick}
      />

      {/* Bottom info */}
      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-surface/80 px-4 py-1.5 backdrop-blur-sm">
        <span className="text-xs text-muted">
          {currentIndex + 1} / {cards.length}
        </span>
        {currentCard?.cousin && (
          <>
            <span className="text-xs text-border">|</span>
            <span
              className="flex items-center gap-1 text-xs"
              style={{
                color: DOMAIN_COLORS[currentCard.cousin.domain] || "#888",
              }}
            >
              {currentCard.cousin.emoji} {currentCard.cousin.title}
              <span className="text-muted"> ← swipe</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}
