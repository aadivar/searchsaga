"use client";

import type { DemoCard, Cousin } from "@/data/camera";
import { StageMarkerCard } from "./cards/stage-marker";
import { MomentCard } from "./cards/moment";
import { SurpriseCard } from "./cards/surprise";
import { BreathingCard } from "./cards/breathing";
import { InteractionCard } from "./cards/interaction";
import { ConnectionCard } from "./cards/connection";
import { SwipeableCard } from "./swipeable-card";

export function CardRenderer({
  card,
  onCousinExplore,
}: {
  card: DemoCard;
  onCousinExplore?: (cousin: Cousin) => void;
}) {
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
        return (
          <ConnectionCard card={card} onCousinExplore={onCousinExplore} />
        );
      default:
        return <MomentCard card={card} />;
    }
  })();

  if (
    card.cousin &&
    card.type !== "breathing" &&
    card.type !== "stage_marker"
  ) {
    return (
      <SwipeableCard card={card} onCousinExplore={onCousinExplore}>
        {inner}
      </SwipeableCard>
    );
  }
  return inner;
}
