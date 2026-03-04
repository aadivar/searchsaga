"use client";

import type { DemoCard, Cousin } from "@/data/camera";
import { DOMAIN_COLORS, topicRegistry } from "@/data/topics";

export function ConnectionCard({
  card,
  onCousinExplore,
}: {
  card: DemoCard;
  onCousinExplore?: (cousin: Cousin) => void;
}) {
  const handleClick = (cousin: Cousin) => {
    if (cousin.topicSlug && cousin.topicSlug in topicRegistry) {
      onCousinExplore?.(cousin);
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
      <p className="text-3xl font-black text-foreground md:text-4xl">
        Where next?
      </p>
      <div className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
        {card.connectionLeft && (
          <button
            onClick={() => handleClick(card.connectionLeft!)}
            className="flex min-h-[120px] flex-1 flex-col gap-3 rounded-2xl p-6 text-left text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor:
                DOMAIN_COLORS[card.connectionLeft.domain] || "#888",
            }}
          >
            <span className="text-5xl">{card.connectionLeft.emoji}</span>
            <span className="text-xl font-bold">
              {card.connectionLeft.title}
            </span>
            <span className="text-base leading-snug opacity-90">
              {card.connectionLeft.hook}
            </span>
            {card.connectionLeft.topicSlug &&
              card.connectionLeft.topicSlug in topicRegistry && (
                <span className="mt-1 text-sm font-semibold opacity-80">
                  Explore →
                </span>
              )}
          </button>
        )}
        {card.connectionRight && (
          <button
            onClick={() => handleClick(card.connectionRight!)}
            className="flex min-h-[120px] flex-1 flex-col gap-3 rounded-2xl p-6 text-left text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor:
                DOMAIN_COLORS[card.connectionRight.domain] || "#888",
            }}
          >
            <span className="text-5xl">{card.connectionRight.emoji}</span>
            <span className="text-xl font-bold">
              {card.connectionRight.title}
            </span>
            <span className="text-base leading-snug opacity-90">
              {card.connectionRight.hook}
            </span>
            {card.connectionRight.topicSlug &&
              card.connectionRight.topicSlug in topicRegistry && (
                <span className="mt-1 text-sm font-semibold opacity-80">
                  Explore →
                </span>
              )}
          </button>
        )}
      </div>
    </div>
  );
}
