# 🔍 SearchSaga

**Subjects, Re-imagined for the Age of AI. For curious minds, ages 8–12.**

SearchSaga turns subjects into connected adventures. Every topic unfolds as a 7-stage evolution story — and every story branches into surprising connections. Kids don't just learn; they discover how everything is secretly linked.

> *What if the camera is connected to glass, which is connected to sand, which is connected to microchips?*

---

## The Vision

Subjects in school feel disconnected. Kids memorize facts but never see how everything links together. SearchSaga is built for the way curious minds actually think: one question leads to another, and the journey matters more than the destination.

**Core mechanics:**
- **7 Stages** — Every topic follows the same evolutionary arc: The Itch → The Mutation → The DNA → The Birth → The Growth Spurt → The Territorial Fight → The Offspring
- **Cousin Connections** — Swipe left on any card to discover a related topic from a completely different field. Camera → Glass → Sand.
- **Galaxy Map** — Your exploration path lights up as a constellation. See where you've been and where you could go next.

---

## Demo

**Live prototype:** 3 interconnected stories, 90+ cards, full swipe navigation.

```
pnpm install
pnpm dev
# Visit http://localhost:3000
```

The demo includes:
- 📷 **How the Camera Grew Up** — From dark rooms to your pocket
- 🔮 **How Glass Grew Up** — From lightning strikes to skyscrapers
- 🏖️ **How Sand Became Glass** — From beach grains to microchips

Navigate 3 levels deep through cousin connections. Track your journey on the galaxy mini-map.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| **Monorepo** | Turborepo + pnpm workspaces |
| **Frontend** | Next.js 15 (App Router, Turbopack) |
| **CMS** | Sanity.io (embedded at `/studio`) |
| **Styling** | Tailwind CSS v4, CSS-only animations |
| **Types** | TypeScript, shared across packages |
| **AI Pipeline** | Python — 7 content agents + 2 safety guardians |
| **Voice** | ElevenLabs TTS (planned) |
| **PWA** | Offline-first, per-topic caching (planned) |

### Project Structure

```
searchsaga/
├── apps/web/                    Next.js 15 frontend
│   ├── src/app/(content)/       Public pages (home, demo)
│   ├── src/components/demo/     Card system, navigation, galaxy map
│   └── src/data/                Story data (camera, glass, sand)
├── packages/
│   ├── sanity-studio/           Sanity config + schemas
│   ├── types/                   Shared TypeScript types
│   └── ui/                      Shared components (incremental)
├── services/content-pipeline/   Python AI pipeline (stubs)
└── docs/                        PRD, specs, progress tracking
```

---

## Roadmap

### Phase 0: Prove the Story ← *current*
- [x] Project scaffold — monorepo, CMS schemas, type system
- [x] Card system — 7 card types with snap-scroll navigation
- [x] Bold card design — immersive, screen-filling typography
- [x] 3-depth prototype — Camera → Glass → Sand with full stories
- [x] Stage navigator — 7-dot nav with expand-to-browse
- [x] Galaxy mini-map — SVG exploration tracker
- [ ] Community feedback — share prototype, gather reactions

### Phase 1: Voice & Visuals
- [ ] **Voice narration** — ElevenLabs TTS per card, warm "older cousin" voice
- [ ] **Whisper integration** — Voice search for kids who'd rather talk than type
- [ ] **Visual cards** — Grok Imagine for infographics and illustrations per topic
- [ ] **Video snippets** — Short animated explainers for Surprise cards

### Phase 2: AI Content Pipeline
- [ ] Researcher Agent — deep facts, surprises, cousin candidates
- [ ] Storyteller Agent — 7-stage narrative in kid voice
- [ ] Card Architect — stage → atomic cards with rhythm enforcement
- [ ] Visual Architect — infographic data + style-locked image prompts (Grok Imagine)
- [ ] Connector Agent — non-obvious cross-subject cousin links
- [ ] Editor Agent — quality + voice check, confidence scoring
- [ ] Publisher Agent — CMS-ready JSON output

### Phase 3: Safety & Trust
- [ ] Word Shield guardian — language-level content safety
- [ ] Context Shield guardian — semantic/contextual safety review
- [ ] Image generation safety — prompt review → generation → vision moderation
- [ ] COPPA compliance — no personal data, aggregate analytics only

### Phase 4: Full Experience
- [ ] Three-axis swipe engine — vertical depth, horizontal branching
- [ ] Card transitions — parallax, slide, thread animations (Framer Motion)
- [ ] Natural session ending — wind-down after 15–20 minutes
- [ ] Voice mode — auto-play narration toggle, ElevenLabs TTS
- [ ] PWA + offline — per-topic caching with depth limits

### Phase 5: Galaxy & Community
- [ ] Full interactive galaxy — D3 force graph, pan/zoom, mobile pinch
- [ ] Path replay — animated journey trace, shareable as video
- [ ] Social teasers — 15-sec Surprise Card animations for Shorts/Reels
- [ ] Educator toolkit — "follow 5 connections, write about your path"
- [ ] Parent feedback channel — flag any card for review

### Phase 6: Scale
- [ ] Daily pipeline automation — scheduled generation, content buffer
- [ ] Multi-language — Hindi first, then regional languages
- [ ] Localized voices — ElevenLabs TTS per language
- [ ] Content calendar — seeded by most-referenced unconnected dots

---

## Community & Feedback

SearchSaga is being built in the open. We believe the best way to build for kids is to listen — to kids, parents, and educators.

**How to share feedback:**
- Try the demo and tell us what surprised you
- Open an issue for bugs, ideas, or content suggestions
- If you're an educator, we'd love to hear how this could work in classrooms

**What we're looking for:**
- Does the 7-stage arc feel natural? Do kids want to keep scrolling?
- Are cousin connections surprising enough? Do they spark "wait, really?"
- Is the reading level right for ages 8–12?
- What topics would your kids explore first?

---

## Development

```bash
# Install
pnpm install

# Dev (all packages)
pnpm dev

# Build
pnpm build

# Type check
pnpm type-check
```

---

## License

All rights reserved. This project is not open source yet — shared for feedback and demonstration purposes.
