# SearchSaga — Architecture & Specs

> Architecture decisions and technical specifications log.

**Stack**: Next.js, TypeScript, Sanity.io, Python (AI pipeline), D3.js, ElevenLabs (TTS)
**Created**: 2026-03-03

---

## Architecture Decisions

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-03 | ElevenLabs for TTS voice mode | Natural multi-language voices, per-character pricing fits short card text (~25 words/card). Warm "older cousin" persona. |
| 2026-03-03 | Voice as pipeline step, not runtime | Pre-generate audio in pipeline (after Editor) rather than real-time TTS. Enables offline, reduces latency, one-time cost per node. |
| 2026-03-03 | Hindi as first non-English language | India-first market. Largest user base. AI translation + ElevenLabs Hindi voices. |
| 2026-03-03 | Offline audio opt-in with depth limit | Audio ~50KB/card × 20 cards = ~1MB/topic. Depth limit caps cached topics. "Text-only offline" toggle for low-storage devices. |
| 2026-03-03 | Warm white default theme + dark mode toggle | White (#FFFBF5) background with vibrant accents. Dark mode available via next-themes data-theme toggle. Kid-friendly, high contrast. |
| 2026-03-03 | Turborepo + pnpm monorepo | apps/web (Next.js), packages/sanity-studio, packages/types, packages/ui, services/content-pipeline (Python). Single repo, coordinated builds. |
| 2026-03-03 | Sanity Studio embedded in Next.js | Studio at /studio route via next-sanity NextStudio. Single deployment. Route groups separate (content) and (studio) layouts. |
| 2026-03-03 | Tailwind CSS v4 with @theme tokens | CSS-first config, @custom-variant for dark mode, design tokens as CSS variables. No tailwind.config.js. |

---

## Technical Stack

- **Next.js** — Static gen, ISR, React ecosystem
- **TypeScript** — Type safety across frontend
- **Sanity.io** — Structured CMS, graph refs, API-first
- **Python** — AI pipeline orchestration (7 agents + 2 guardians)
- **Claude API** — All content + safety agents
- **ElevenLabs** — TTS voice generation, multi-language
- **DALL-E 3** — Image generation with style-locked prefix
- **D3.js + Framer Motion** — Galaxy visualization (Phase 5)
- **Tailwind CSS v4** — CSS-first @theme tokens, warm white default + dark mode toggle
- **Vercel** — Hosting, ISR, edge
- **Plausible/PostHog** — Privacy-first analytics

---

## Conventions

_Code conventions and patterns will be logged here automatically by the Specs agent._

---

_This file is append-only. The Shiplog Specs agent adds entries after each session. Existing content is never modified or deleted._
