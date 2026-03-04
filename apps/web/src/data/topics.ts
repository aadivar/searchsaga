import { cameraCards, cameraTopic } from "./camera";
import { glassCards, glassTopic } from "./glass";
import { sandCards, sandTopic } from "./sand";
import type { DemoCard } from "./camera";

// ─── Shared Constants ───────────────────────────────────────

export const STAGE_ORDER = [
  "the-itch",
  "the-mutation",
  "the-dna",
  "the-birth",
  "the-growth-spurt",
  "the-territorial-fight",
  "the-offspring",
] as const;

export const STAGE_COLORS: Record<string, string> = {
  "the-itch": "#F97316",
  "the-mutation": "#8B5CF6",
  "the-dna": "#14B8A6",
  "the-birth": "#3B82F6",
  "the-growth-spurt": "#EAB308",
  "the-territorial-fight": "#EF4444",
  "the-offspring": "#EC4899",
};

export const STAGE_NAMES: Record<string, string> = {
  "the-itch": "The Itch",
  "the-mutation": "The Mutation",
  "the-dna": "The DNA",
  "the-birth": "The Birth",
  "the-growth-spurt": "The Growth Spurt",
  "the-territorial-fight": "The Territorial Fight",
  "the-offspring": "The Offspring",
};

export const STAGE_ICONS: Record<string, string> = {
  "the-itch": "🌱",
  "the-mutation": "⚡",
  "the-dna": "🧬",
  "the-birth": "🌸",
  "the-growth-spurt": "🌀",
  "the-territorial-fight": "⚔️",
  "the-offspring": "✨",
};

export const STAGE_DESCRIPTIONS: Record<string, string> = {
  "the-itch": "The problem or desire that started it all",
  "the-mutation": "The first wild experiment that changed everything",
  "the-dna": "The core idea that makes it tick",
  "the-birth": "The moment it became real",
  "the-growth-spurt": "When it spread and got powerful fast",
  "the-territorial-fight": "The battles it fought to survive",
  "the-offspring": "What it created next — and what's coming",
};

export const DOMAIN_COLORS: Record<string, string> = {
  technology: "#8B5CF6",
  nature: "#22C55E",
  science: "#3B82F6",
  "human-systems": "#EF4444",
  art: "#EC4899",
  math: "#F97316",
};

// ─── Topic Registry ─────────────────────────────────────────

export interface TopicData {
  slug: string;
  title: string;
  domain: string;
  subtitle: string;
  cards: DemoCard[];
}

export const topicRegistry: Record<string, TopicData> = {
  camera: {
    slug: "camera",
    ...cameraTopic,
    cards: cameraCards,
  },
  glass: {
    slug: "glass",
    ...glassTopic,
    cards: glassCards,
  },
  sand: {
    slug: "sand",
    ...sandTopic,
    cards: sandCards,
  },
};
