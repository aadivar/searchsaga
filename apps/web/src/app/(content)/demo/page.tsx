"use client";

import { useState, useCallback } from "react";
import type { Cousin } from "@/data/camera";
import { topicRegistry } from "@/data/topics";
import { TopicDeck } from "@/components/demo/topic-deck";
import { DepthTransition } from "@/components/demo/depth-transition";
import { GalaxyMinimap } from "@/components/demo/galaxy-minimap";

export interface ExplorationNode {
  slug: string;
  title: string;
  domain: string;
  emoji?: string;
  visitedAt: number;
  enteredFrom?: string;
}

export default function DemoPage() {
  const [topicStack, setTopicStack] = useState<string[]>(["camera"]);
  const [transitionDirection, setTransitionDirection] = useState<
    "forward" | "back" | "idle"
  >("idle");
  const [explorationPath, setExplorationPath] = useState<ExplorationNode[]>([
    {
      slug: "camera",
      title: topicRegistry.camera.title,
      domain: topicRegistry.camera.domain,
      emoji: "📷",
      visitedAt: Date.now(),
    },
  ]);

  const currentSlug = topicStack[topicStack.length - 1];
  const currentTopic = topicRegistry[currentSlug];

  const handleCousinExplore = useCallback(
    (cousin: Cousin) => {
      if (!cousin.topicSlug || !(cousin.topicSlug in topicRegistry)) return;
      setTransitionDirection("forward");
      setTopicStack((prev) => [...prev, cousin.topicSlug!]);
      setExplorationPath((prev) => [
        ...prev,
        {
          slug: cousin.topicSlug!,
          title: cousin.title,
          domain: cousin.domain,
          emoji: cousin.emoji,
          visitedAt: Date.now(),
          enteredFrom: currentSlug,
        },
      ]);
    },
    [currentSlug]
  );

  const handleBack = useCallback(() => {
    if (topicStack.length <= 1) return;
    setTransitionDirection("back");
    setTopicStack((prev) => prev.slice(0, -1));
  }, [topicStack.length]);

  const handleMinimapNavigate = useCallback(
    (slug: string) => {
      const idx = topicStack.indexOf(slug);
      if (idx >= 0) {
        setTransitionDirection("back");
        setTopicStack((prev) => prev.slice(0, idx + 1));
      }
    },
    [topicStack]
  );

  if (!currentTopic) return null;

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-background">
      {/* Inline animations */}
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.3); opacity: 0.4; }
        }
        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(249, 115, 22, 0); }
        }
        @keyframes minimapIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes swipeHint {
          0% { opacity: 0; transform: translateX(20px); }
          15% { opacity: 1; transform: translateX(0); }
          85% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-10px); }
        }
        @keyframes nudgeLeft {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-6px); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <DepthTransition
        topicSlug={currentSlug}
        direction={transitionDirection}
      >
        <TopicDeck
          topicSlug={currentSlug}
          cards={currentTopic.cards}
          topicMeta={currentTopic}
          onCousinExplore={handleCousinExplore}
          topicStack={topicStack}
          onBack={handleBack}
        />
      </DepthTransition>

      {/* Galaxy mini-map */}
      <GalaxyMinimap
        explorationPath={explorationPath}
        currentTopicSlug={currentSlug}
        onNavigateToTopic={handleMinimapNavigate}
      />
    </div>
  );
}
