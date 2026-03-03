/** The seven evolutionary stages every topic follows */
export type Stage =
  | "the-itch"
  | "the-mutation"
  | "the-dna"
  | "the-birth"
  | "the-growth-spurt"
  | "the-territorial-fight"
  | "the-offspring";

/** All 7 card types in the scroll experience */
export type CardType =
  | "moment"
  | "surprise"
  | "visual"
  | "stage_marker"
  | "connection"
  | "interaction"
  | "breathing";

/** How two topics are related */
export type ConnectionType =
  | "cousin"
  | "offspring"
  | "dna_source"
  | "inspired_by";

/** Content workflow status */
export type ContentStatus = "draft" | "review" | "safety-flagged" | "published";

/** Knowledge domain categories */
export type Domain =
  | "science"
  | "technology"
  | "nature"
  | "math"
  | "human-systems"
  | "art";

/** Stage text content for a topic */
export interface StageContent {
  stage: Stage;
  title: string;
  text: string;
}

/** Safety report from Guardian agents */
export interface SafetyReport {
  wordShield: {
    passed: boolean;
    flags: string[];
  };
  contextShield: {
    passed: boolean;
    flags: string[];
  };
  reviewedAt?: string;
  reviewedBy?: string;
}

/** A single card in the scroll experience */
export interface Card {
  _id: string;
  _type: "card";
  type: CardType;
  text?: string;
  image?: {
    _type: "image";
    asset: { _ref: string };
    alt?: string;
  };
  stage?: Stage;
  audio?: {
    _type: "file";
    asset: { _ref: string };
  };
  connectionLeft?: { _ref: string };
  connectionRight?: { _ref: string };
  question?: string;
  answerCardIndex?: number;
}

/** A connection (link) between two topic nodes */
export interface Connection {
  _id: string;
  _type: "connection";
  from: { _ref: string };
  to: { _ref: string };
  type: ConnectionType;
  hook: string;
  strength: number;
  crossDomain: boolean;
}

/** A topic node — the core content unit */
export interface TopicNode {
  _id: string;
  _type: "topicNode";
  title: string;
  slug: { current: string };
  domain: Domain;
  subtitle: string;
  cards: Card[];
  stages: StageContent[];
  cousins: Connection[];
  unconnectedDots: string[];
  images: Array<{
    _type: "image";
    asset: { _ref: string };
    alt?: string;
  }>;
  status: ContentStatus;
  safetyReport?: SafetyReport;
  confidence?: number;
}
