# SearchSaga — Product Requirements

> Connecting the Dots — a search experience for curious minds

**Stack**: Next.js, TypeScript, Sanity.io, Python (AI pipeline), D3.js, ElevenLabs (TTS)
**Created**: 2026-03-03
**Status**: In Progress

---

## Features

| ID | Feature | Status | Sprint | Notes |
|----|---------|--------|--------|-------|
| F001 | Manual story authoring — 5 proof stories | not-started | 1 | Lock voice, rhythm, card feel |
| F002 | Card rhythm template & type specs | not-started | 1 | Define heartbeat pattern, 7 card types, word limits |
| F003 | Sanity CMS schemas & data model | not-started | 1 | Topic Node, Card, Connection schemas per Section 12 |
| F004 | CMS review workflow | not-started | 1 | Draft → Review → Safety-Flagged → Published states |
| F005 | AI Researcher Agent | not-started | 2 | Deep research, facts, surprises, cousin candidates |
| F006 | AI Storyteller Agent | not-started | 2 | 7-stage evolution narrative in kid voice |
| F007 | AI Card Architect Agent | not-started | 2 | Stage → atomic cards with rhythm enforcement |
| F008 | AI Visual Architect Agent | not-started | 2 | Infographic data + style-locked image prompts |
| F009 | AI Connector Agent | not-started | 2 | Non-obvious cross-subject cousin links |
| F010 | AI Editor Agent | not-started | 2 | Quality + voice check, confidence scoring |
| F011 | AI Publisher Agent | not-started | 2 | CMS-ready JSON, triggers safety gate |
| F012 | Guardian Agent 1 — Word Shield | not-started | 3 | Language-level content safety scan |
| F013 | Guardian Agent 2 — Context Shield | not-started | 3 | Semantic/contextual safety, holistic deck review |
| F014 | Safety gate & quarantine workflow | not-started | 3 | Both-must-pass orchestration, block/flag routing |
| F015 | Image generation & safety pipeline | not-started | 3 | Prompt review → generation → vision moderation |
| F016 | Three-axis swipe engine | not-started | 4 | Vertical depth, horizontal branching, gesture detection |
| F017 | Card rendering system — all 7 types | not-started | 4 | Moment, Surprise, Visual, Stage Marker, Connection, Interaction, Breathing |
| F018 | Card transitions & animations | not-started | 4 | Parallax up, slide left/right, thread animation |
| F019 | Connection card fork UX | not-started | 4 | Left/right cousin display, swipe choice flow |
| F020 | Natural session ending | not-started | 4 | Greyed-out unconnected dots wind-down after 15-20 min |
| F021 | Design system implementation | not-started | 5 | Warm white default + dark mode toggle, typography, hand-drawn aesthetic, stage icons |
| F022 | Simplified galaxy view | not-started | 5 | Node grid of explored topics, domain filtering, tap to enter scroll |
| F023 | Personal web tracking | not-started | 5 | Local exploration state, nodes lit up, progress display |
| F024 | PWA + offline mode | not-started | 5 | Per-topic caching, configurable depth limit, service worker |
| F025 | SEO — topic pages | not-started | 5 | Each topic = indexed page, meta tags, structured data |
| F026 | Daily pipeline automation | not-started | 6 | Scheduled generation, notification to Aadi, buffer queue |
| F027 | COPPA compliance & privacy | not-started | 6 | No personal data, aggregate analytics, parent-managed profiles |
| F028 | Analytics — privacy-first | not-started | 6 | Plausible/PostHog, COPPA compliant, no trackers |
| F029 | Full interactive galaxy | not-started | 7 | D3 force graph, pan/zoom, mobile pinch, thread tapping |
| F030 | Path replay animation | not-started | 7 | Animated journey trace on galaxy, shareable as video/image |
| F031 | Path sharing — social | not-started | 7 | Shareable journey links for WhatsApp, social |
| F032 | Social teasers | not-started | 8 | 15-sec Surprise Card animations for Shorts/Reels |
| F033 | Parent feedback channel | not-started | 8 | Flag any card, queued for review |
| F034 | Content calendar automation | not-started | 8 | Queue seeded by Connector from most-referenced unconnected dots |
| F035 | Educator toolkit | not-started | 8 | "Follow 5 connections, write about your path" prompts |
| F036 | Voice mode — English | not-started | 4 | ElevenLabs TTS per card, warm "older cousin" voice, auto-play toggle |
| F037 | Voice generation in pipeline | not-started | 3 | Voice Agent step after Editor, generates audio per card, stores in CMS |
| F038 | Multi-language text — translation pipeline | not-started | 7 | AI translation of card text, Hindi first, then regional languages |
| F039 | Multi-language voice — ElevenLabs | not-started | 7 | Localized TTS voices per language, matched to translated text |
| F040 | Offline audio caching | not-started | 5 | Audio files included in per-topic PWA cache, depth limit factors in audio size |

### Status Legend
- `not-started` — Not yet begun
- `in-progress` — Currently being built
- `done` — Complete and working
- `blocked` — Waiting on something

---

## Phases

### Phase 0: Prove the Story (Sprint 1 — Week 1-2)
- [ ] F001 — Manual story authoring: 5 complete evolutions written by hand
- [ ] F002 — Card rhythm template: heartbeat pattern locked, all 7 card types specced

**Exit criteria:** 5 stories tested at dinner table. Voice locked. Rhythm proven.

### Phase 1: Foundation — CMS & Data Model (Sprint 1 — Week 2-3)
- [ ] F003 — Sanity CMS schemas matching Section 12 data model
- [ ] F004 — CMS review workflow with safety states

**Exit criteria:** Can manually enter a full topic node with all card types and connections.

### Phase 2: AI Content Pipeline (Sprint 2-3 — Week 3-5)
- [ ] F005 — Researcher Agent
- [ ] F006 — Storyteller Agent
- [ ] F007 — Card Architect Agent
- [ ] F008 — Visual Architect Agent
- [ ] F009 — Connector Agent (hardest — plan for most iteration)
- [ ] F010 — Editor Agent
- [ ] F011 — Publisher Agent
- [ ] F012 — Guardian Agent 1 — Word Shield
- [ ] F013 — Guardian Agent 2 — Context Shield
- [ ] F014 — Safety gate & quarantine workflow
- [ ] F015 — Image generation & safety pipeline
- [ ] F037 — Voice generation step in pipeline (ElevenLabs TTS per card)

**Exit criteria:** Pipeline generates topic with audio → guardians scan → CMS draft. 10 nodes matching manual quality.

### Phase 3: Build the Scroll (Sprint 4 — Week 6-8)
- [ ] F016 — Three-axis swipe engine
- [ ] F017 — Card rendering system (all 7 types)
- [ ] F018 — Card transitions & animations
- [ ] F019 — Connection card fork UX
- [ ] F020 — Natural session ending
- [ ] F036 — Voice mode (English) — auto-play toggle, warm "older cousin" ElevenLabs voice

**Exit criteria:** Working scroll with 20+ connected nodes. Voice mode works. Daughters test passes.

### Phase 4: Launch Polish (Sprint 5-6 — Week 9-10)
- [ ] F021 — Design system (warm white default + dark mode toggle, typography, hand-drawn aesthetic)
- [ ] F022 — Simplified galaxy view (node grid, not force graph)
- [ ] F023 — Personal web tracking (local state)
- [ ] F024 — PWA + offline mode (per-topic cache, depth limit)
- [ ] F040 — Offline audio caching (audio in per-topic cache, depth limit factors in audio size)
- [ ] F025 — SEO topic pages
- [ ] F026 — Daily pipeline automation
- [ ] F027 — COPPA compliance & privacy

**Exit criteria:** searchsaga.com live. 30 nodes. Daily cadence running. Works offline.

### Phase 5: Growth (Sprint 7-8 — Month 3+)
- [ ] F028 — Analytics (privacy-first)
- [ ] F029 — Full interactive galaxy (D3 force graph)
- [ ] F030 — Path replay animation
- [ ] F031 — Path sharing (social)
- [ ] F038 — Multi-language text (AI translation pipeline, Hindi first)
- [ ] F039 — Multi-language voice (ElevenLabs localized TTS)
- [ ] F032 — Social teasers (Shorts/Reels)
- [ ] F033 — Parent feedback channel
- [ ] F034 — Content calendar automation
- [ ] F035 — Educator toolkit

**Exit criteria:** All 6 domains covered. Social sharing live. 90+ nodes. 30%+ weekly return.

---

## Key Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Offline strategy | PWA with per-topic caching | Kids on tablets with intermittent connectivity (India-first). Depth limit prevents storage bloat. |
| Galaxy at launch | Simplified grid/list view | Full D3 force graph deferred to Phase 5. Scroll is the product. |
| Search | Deferred | Galaxy IS the search at <500 nodes. Algolia added when needed. |
| User state | Anonymous device-linked | No accounts required. localStorage for personal web. Optional parent-managed sync later. |
| Connector agent | Extra iteration budget | Hardest agent. Manual connection bank as fallback. |
| Launch content | 30+ nodes pre-loaded | Avoid content bottleneck. Motivated kid shouldn't exhaust library in one sitting. |
| Voice TTS | ElevenLabs | Warm, natural voices. Multi-language support. Per-character pricing fits card-length text. |
| Voice in pipeline | After Editor, before Publisher | Editor polishes text → Voice Agent generates audio → Publisher bundles with CMS JSON. |
| Multi-language | Hindi first, then regional | India-first market. Translation via AI pipeline, not manual. Voice per language via ElevenLabs. |
| Offline audio | Included in per-topic cache | Audio significantly increases cache size. Depth limit accounts for ~50KB audio/card. Optional "text-only offline" toggle. |

---

## Success Metrics

| Metric | Target (Month 3) | Measures |
|--------|-------------------|----------|
| Nodes per session | 4+ | Web navigation quality |
| Swipe-right rate | 40%+ | Connection cards compelling |
| Weekly return | 30%+ | Daily cadence creates habit |
| Cards per session | 50+ | Kids in flow |
| Session time | 5+ min | Sustained engagement |
| Path shares | 5% | Worth sharing |
| Safety incidents | 0 | Guardians + review working |
| Aadi daily time | <25 min | Sustainable |

---

_This file is automatically updated by the Shiplog PRD agent. Manual edits are preserved._
