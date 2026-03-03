"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  cameraCards,
  cameraTopic,
  type DemoCard,
  type Cousin,
} from "@/data/camera";

// ─── Colors & Icons ────────────────────────────────────────

const stageColors: Record<string, string> = {
  "the-itch": "#F97316",
  "the-mutation": "#8B5CF6",
  "the-dna": "#14B8A6",
  "the-birth": "#3B82F6",
  "the-growth-spurt": "#EAB308",
  "the-territorial-fight": "#EF4444",
  "the-offspring": "#EC4899",
};

const stageIcons: Record<string, string> = {
  "the-itch": "🌱",
  "the-mutation": "⚡",
  "the-dna": "🧬",
  "the-birth": "🌸",
  "the-growth-spurt": "🌀",
  "the-territorial-fight": "⚔️",
  "the-offspring": "✨",
};

const domainColors: Record<string, string> = {
  technology: "#8B5CF6",
  nature: "#22C55E",
  science: "#3B82F6",
  "human-systems": "#EF4444",
  art: "#EC4899",
  math: "#F97316",
};

// ─── Swipeable Card Wrapper ────────────────────────────────
// Handles horizontal swipe to reveal cousin connection

function SwipeableCard({
  card,
  children,
}: {
  card: DemoCard;
  children: React.ReactNode;
}) {
  const [offsetX, setOffsetX] = useState(0);
  const [showCousin, setShowCousin] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const locked = useRef<"x" | "y" | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    locked.current = null;
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    locked.current = null;
    setIsDragging(true);
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (showCousin) return;
    const dx = clientX - startX.current;
    const dy = clientY - startY.current;

    if (!locked.current) {
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        locked.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }
      return;
    }

    if (locked.current === "x" && card.cousin) {
      // Only allow swipe left (negative dx)
      const clamped = Math.min(0, dx);
      setOffsetX(clamped);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.clientY);
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (offsetX < -100) {
      setShowCousin(true);
      setOffsetX(0);
    } else {
      setOffsetX(0);
    }
    locked.current = null;
  };

  if (!card.cousin) {
    return <>{children}</>;
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Cousin peek indicator */}
      {!showCousin && (
        <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
          <div
            className="flex h-12 w-6 items-center justify-center rounded-l-lg text-xs text-white opacity-60"
            style={{
              backgroundColor: domainColors[card.cousin.domain] || "#888",
            }}
          >
            ←
          </div>
        </div>
      )}

      {/* Swipe hint glow */}
      {offsetX < -20 && !showCousin && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-1/3 opacity-20"
          style={{
            background: `linear-gradient(to left, ${domainColors[card.cousin.domain] || "#888"}, transparent)`,
          }}
        />
      )}

      {/* Main card content */}
      {!showCousin && (
        <div
          className="h-full w-full"
          style={{
            transform: `translateX(${offsetX}px)`,
            transition: offsetX === 0 ? "transform 0.3s ease-out" : "none",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleEnd}
          onMouseLeave={() => {
            if (isDragging) handleEnd();
          }}
        >
          {children}
        </div>
      )}

      {/* Cousin connection card (revealed after swipe) */}
      {showCousin && (
        <CousinCard
          cousin={card.cousin}
          onBack={() => setShowCousin(false)}
        />
      )}
    </div>
  );
}

// ─── Cousin Connection Card ────────────────────────────────

function CousinCard({
  cousin,
  onBack,
}: {
  cousin: Cousin;
  onBack: () => void;
}) {
  const color = domainColors[cousin.domain] || "#888";
  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-6 px-8"
      style={{
        animation: "slideInFromRight 0.35s ease-out",
      }}
    >
      <button
        onClick={onBack}
        className="absolute left-6 top-20 text-sm text-muted hover:text-foreground"
      >
        ← back to story
      </button>

      <span className="text-5xl">{cousin.emoji}</span>

      <span
        className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
        style={{ backgroundColor: color }}
      >
        {cousin.domain}
      </span>

      <h3 className="text-center text-2xl font-bold text-foreground">
        {cousin.title}
      </h3>

      <p className="max-w-md text-center text-lg leading-relaxed text-muted">
        {cousin.hook}
      </p>

      <div className="mt-4 flex flex-col items-center gap-2">
        <div
          className="h-1 w-16 rounded-full"
          style={{ backgroundColor: color }}
        />
        <p className="text-sm text-muted">Coming soon</p>
      </div>
    </div>
  );
}

// ─── Card Components ───────────────────────────────────────

function StageMarkerCard({ card }: { card: DemoCard }) {
  const color = stageColors[card.stage || ""] || "#888";
  const icon = stageIcons[card.stage || ""] || "•";
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-6xl">{icon}</span>
      <h2 className="text-3xl font-bold" style={{ color }}>
        {card.text}
      </h2>
      <div
        className="h-1 w-16 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function MomentCard({ card }: { card: DemoCard }) {
  const color = stageColors[card.stage || ""] || "#888";
  return (
    <div className="flex h-full flex-col justify-center gap-6 px-8">
      <div
        className="h-1 w-12 rounded-full opacity-40"
        style={{ backgroundColor: color }}
      />
      <p className="text-2xl font-semibold leading-relaxed text-foreground">
        {card.text}
      </p>
      {card.subtext && (
        <p className="text-lg leading-relaxed text-muted">{card.subtext}</p>
      )}
      {card.cousin && (
        <p className="mt-2 text-xs text-muted opacity-50">
          ← swipe left to explore a connection
        </p>
      )}
    </div>
  );
}

function SurpriseCard({ card }: { card: DemoCard }) {
  const color = stageColors[card.stage || ""] || "#F97316";
  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-4 p-8"
      style={{ backgroundColor: color + "12" }}
    >
      <p
        className="max-w-lg text-center text-2xl font-bold leading-snug md:text-3xl"
        style={{ color }}
      >
        {card.text}
      </p>
      {card.cousin && (
        <p className="mt-4 text-xs text-muted opacity-50">
          ← swipe left to explore a connection
        </p>
      )}
    </div>
  );
}

function BreathingCard({ card }: { card: DemoCard }) {
  const color = card.color || "#14B8A6";
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className="h-32 w-32 rounded-full opacity-30"
        style={{
          backgroundColor: color,
          animation: "breathe 4s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function InteractionCard({ card }: { card: DemoCard }) {
  const [revealed, setRevealed] = useState(false);
  const color = stageColors[card.stage || ""] || "#888";
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-8">
      <div
        className="h-1 w-12 rounded-full opacity-40"
        style={{ backgroundColor: color }}
      />
      <p className="max-w-md text-center text-xl font-medium text-foreground">
        {card.text}
      </p>
      {card.question && !revealed && (
        <button
          onClick={() => setRevealed(true)}
          className="rounded-full border-2 px-6 py-2.5 text-base font-medium transition-colors hover:bg-surface-raised"
          style={{ borderColor: color, color }}
        >
          {card.question}
        </button>
      )}
      {revealed && (
        <p className="text-base text-muted">↑ Swipe up to find out</p>
      )}
      {card.cousin && (
        <p className="mt-2 text-xs text-muted opacity-50">
          ← swipe left to explore a connection
        </p>
      )}
    </div>
  );
}

function ConnectionCard({ card }: { card: DemoCard }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-4">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Where to next?
      </p>
      <div className="flex w-full max-w-lg gap-4">
        {card.connectionLeft && (
          <button className="flex flex-1 flex-col gap-3 rounded-2xl border-2 border-border bg-surface p-5 text-left transition-all hover:shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{card.connectionLeft.emoji}</span>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                style={{
                  backgroundColor:
                    domainColors[card.connectionLeft.domain] || "#888",
                }}
              >
                {card.connectionLeft.domain}
              </span>
            </div>
            <span className="text-lg font-bold text-foreground">
              {card.connectionLeft.title}
            </span>
            <span className="text-sm leading-snug text-muted">
              {card.connectionLeft.hook}
            </span>
          </button>
        )}
        {card.connectionRight && (
          <button className="flex flex-1 flex-col gap-3 rounded-2xl border-2 border-border bg-surface p-5 text-left transition-all hover:shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{card.connectionRight.emoji}</span>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                style={{
                  backgroundColor:
                    domainColors[card.connectionRight.domain] || "#888",
                }}
              >
                {card.connectionRight.domain}
              </span>
            </div>
            <span className="text-lg font-bold text-foreground">
              {card.connectionRight.title}
            </span>
            <span className="text-sm leading-snug text-muted">
              {card.connectionRight.hook}
            </span>
          </button>
        )}
      </div>
      <p className="text-xs text-muted">swipe left or right to choose</p>
    </div>
  );
}

// ─── Card Renderer ─────────────────────────────────────────

function CardRenderer({ card }: { card: DemoCard }) {
  const inner = (() => {
    switch (card.type) {
      case "stage_marker":
        return <StageMarkerCard card={card} />;
      case "moment":
        return <MomentCard card={card} />;
      case "surprise":
        return <SurpriseCard card={card} />;
      case "breathing":
        return <BreathingCard card={card} />;
      case "interaction":
        return <InteractionCard card={card} />;
      case "connection":
        return <ConnectionCard card={card} />;
      default:
        return <MomentCard card={card} />;
    }
  })();

  if (card.cousin && card.type !== "breathing" && card.type !== "stage_marker") {
    return <SwipeableCard card={card}>{inner}</SwipeableCard>;
  }
  return inner;
}

// ─── Progress Dots ─────────────────────────────────────────

function ProgressDots({
  cards,
  currentIndex,
}: {
  cards: DemoCard[];
  currentIndex: number;
}) {
  return (
    <div className="fixed right-3 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-1">
      {cards.map((card, i) => {
        const color = card.stage ? stageColors[card.stage] : "#888";
        const isActive = i === currentIndex;
        const isPast = i < currentIndex;
        return (
          <div
            key={i}
            className="transition-all duration-300"
            style={{
              width: card.type === "stage_marker" ? 10 : 5,
              height: card.type === "stage_marker" ? 10 : 5,
              borderRadius: "50%",
              backgroundColor: isActive
                ? color
                : isPast
                  ? color + "60"
                  : "#D1D5DB30",
              transform: isActive ? "scale(1.6)" : "scale(1)",
              boxShadow: isActive ? `0 0 8px ${color}80` : "none",
            }}
          />
        );
      })}
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────

export default function DemoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const cardHeight = containerRef.current.clientHeight;
    const index = Math.round(scrollTop / cardHeight);
    setCurrentIndex(Math.min(index, cameraCards.length - 1));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const currentCard = cameraCards[currentIndex];
  const currentColor = currentCard?.stage
    ? stageColors[currentCard.stage]
    : "#888";

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
      `}</style>

      {/* Top bar */}
      <div className="fixed left-0 right-12 top-0 z-50 flex items-center justify-between bg-background/80 px-6 py-4 backdrop-blur-sm">
        <a href="/" className="text-sm text-muted hover:text-foreground">
          ← Back
        </a>
        <div className="flex flex-col items-end">
          <span className="text-sm font-bold text-foreground">
            {cameraTopic.title}
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-xs font-medium text-white"
            style={{ backgroundColor: domainColors[cameraTopic.domain] }}
          >
            {cameraTopic.domain}
          </span>
        </div>
      </div>

      {/* Stage progress bar */}
      <div
        className="fixed left-0 top-0 z-40 h-1 transition-all duration-500"
        style={{
          backgroundColor: currentColor,
          width: `${((currentIndex + 1) / cameraCards.length) * 100}%`,
        }}
      />

      {/* Card scroll */}
      <div
        ref={containerRef}
        className="h-full w-full snap-y snap-mandatory overflow-y-scroll"
        style={{ scrollBehavior: "smooth" }}
      >
        {cameraCards.map((card, i) => (
          <div
            key={i}
            className="flex h-dvh w-full snap-start snap-always items-center justify-center"
          >
            <div className="h-full w-full max-w-2xl">
              <CardRenderer card={card} />
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <ProgressDots cards={cameraCards} currentIndex={currentIndex} />

      {/* Bottom info */}
      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-surface/80 px-4 py-1.5 backdrop-blur-sm">
        <span className="text-xs text-muted">
          {currentIndex + 1} / {cameraCards.length}
        </span>
        {currentCard?.cousin && (
          <>
            <span className="text-xs text-border">|</span>
            <span className="flex items-center gap-1 text-xs" style={{ color: domainColors[currentCard.cousin.domain] || "#888" }}>
              {currentCard.cousin.emoji} {currentCard.cousin.title}
              <span className="text-muted"> ← swipe</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}
