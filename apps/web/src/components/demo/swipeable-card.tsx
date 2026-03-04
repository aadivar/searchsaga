"use client";

import { useState, useRef, useEffect } from "react";
import type { DemoCard, Cousin } from "@/data/camera";
import { DOMAIN_COLORS } from "@/data/topics";
import { CousinCard } from "./cousin-card";

// Track globally how many times the swipe hint has been shown
let hintShownCount = 0;

export function SwipeableCard({
  card,
  children,
  onCousinExplore,
}: {
  card: DemoCard;
  children: React.ReactNode;
  onCousinExplore?: (cousin: Cousin) => void;
}) {
  const [offsetX, setOffsetX] = useState(0);
  const [showCousin, setShowCousin] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const locked = useRef<"x" | "y" | null>(null);

  // Show hint animation only on the first 2 cards with cousins
  useEffect(() => {
    if (!card.cousin || hintShownCount >= 2) return;
    hintShownCount++;
    const timer = setTimeout(() => setShowHint(true), 800);
    const hide = setTimeout(() => setShowHint(false), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, [card.cousin]);

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

  const cousinColor = DOMAIN_COLORS[card.cousin.domain] || "#888";

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Swipe hint glow on drag */}
      {offsetX < -20 && !showCousin && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-1/3 opacity-20"
          style={{
            background: `linear-gradient(to left, ${cousinColor}, transparent)`,
          }}
        />
      )}

      {/* Main card content */}
      {!showCousin && (
        <div
          className="h-full w-full"
          style={{
            transform: `translateX(${offsetX}px)`,
            transition:
              offsetX === 0 ? "transform 0.3s ease-out" : "none",
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

          {/* Horizontal swipe hint — appears below content, only first 2 times */}
          {showHint && (
            <div
              className="pointer-events-none absolute bottom-24 left-0 right-0 flex items-center justify-center gap-2"
              style={{ animation: "swipeHint 2s ease-in-out" }}
            >
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90"
                style={{ backgroundColor: cousinColor + "CC" }}
              >
                <span style={{ animation: "nudgeLeft 1s ease-in-out infinite" }}>
                  ←
                </span>
                swipe to explore {card.cousin.emoji} {card.cousin.title}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Cousin connection card (revealed after swipe) */}
      {showCousin && (
        <CousinCard
          cousin={card.cousin}
          onBack={() => setShowCousin(false)}
          onExplore={onCousinExplore}
        />
      )}
    </div>
  );
}
