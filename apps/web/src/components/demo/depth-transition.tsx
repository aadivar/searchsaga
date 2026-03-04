"use client";

import { useState, useEffect, useRef } from "react";

export function DepthTransition({
  children,
  topicSlug,
  direction,
}: {
  children: React.ReactNode;
  topicSlug: string;
  direction: "forward" | "back" | "idle";
}) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [animClass, setAnimClass] = useState("deck-active");
  const prevSlug = useRef(topicSlug);
  const isTransitioning = useRef(false);

  useEffect(() => {
    if (topicSlug === prevSlug.current) {
      setDisplayChildren(children);
      return;
    }

    if (isTransitioning.current) return;
    isTransitioning.current = true;

    // Exit animation
    const exitClass =
      direction === "back" ? "deck-exit-right" : "deck-exit-left";
    setAnimClass(exitClass);

    const timer = setTimeout(() => {
      // Swap to new children and enter
      setDisplayChildren(children);
      const enterClass =
        direction === "back" ? "deck-enter-left" : "deck-enter-right";
      setAnimClass(enterClass);

      // Force reflow then activate
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimClass("deck-active");
          prevSlug.current = topicSlug;
          isTransitioning.current = false;
        });
      });
    }, 250);

    return () => clearTimeout(timer);
  }, [topicSlug, children, direction]);

  return (
    <>
      <style>{`
        .deck-active {
          transform: translateX(0);
          opacity: 1;
          transition: transform 300ms ease-out, opacity 300ms ease-out;
        }
        .deck-exit-left {
          transform: translateX(-100%);
          opacity: 0;
          transition: transform 250ms ease-in, opacity 250ms ease-in;
        }
        .deck-exit-right {
          transform: translateX(100%);
          opacity: 0;
          transition: transform 250ms ease-in, opacity 250ms ease-in;
        }
        .deck-enter-left {
          transform: translateX(-100%);
          opacity: 0;
        }
        .deck-enter-right {
          transform: translateX(100%);
          opacity: 0;
        }
      `}</style>
      <div className={`h-full w-full ${animClass}`}>{displayChildren}</div>
    </>
  );
}
