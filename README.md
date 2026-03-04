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

## Building in Open

SearchSaga is built entirely in the open — every commit, every decision, every pivot. We believe the best tools for kids should be shaped by the community that cares about them: parents, educators, developers, and the kids themselves.

This isn't a startup with a secret roadmap. It's an experiment in whether AI can make learning genuinely magical — and we want you to hold us accountable to that standard.

- Every feature is discussed in [Issues](../../issues) before it's built
- Architecture decisions are documented in `docs/SPECS.md`
- Progress is tracked transparently in `docs/PROGRESS.md`

---

## Sponsorship Needed

SearchSaga is a passion project with real infrastructure costs. We need sponsors and credits to keep building at the quality kids deserve.

| What | Why | Status |
|------|-----|--------|
| **Claude Max / Anthropic API** | Powers the 7-agent content pipeline — Researcher, Storyteller, Card Architect, Connector, Editor, Visual Architect, Publisher. Every story requires multiple Claude calls for fact-checking, age-appropriate rewriting, and safety review. | Needed |
| **ElevenLabs** | Warm, expressive TTS narration per card — the "older cousin" voice that reads stories aloud. Essential for younger readers (ages 8–9) and accessibility. | Needed |
| **Sanity.io** | Headless CMS hosting for structured story content — cards, stages, cousin links, media. The editorial backbone that lets non-developers contribute stories. | Needed |
| **Grok (xAI)** | Image generation for visual cards — infographics, illustrated moments, and topic cover art. Style-locked prompts ensure kid-safe, consistent visuals. | Needed |
| **Vercel / Hosting** | Frontend deployment, edge caching, preview deployments for PR reviews. | Needed |
| **Domain & CDN** | Custom domain, asset delivery, voice file caching for offline PWA support. | Needed |

**How to sponsor:**
- Reach out via [Issues](../../issues) or email (listed in profile)
- API credit grants, pro-plan sponsorships, or open-source program invitations all help
- Every sponsor gets credited in the app and in this README

> If your company builds tools that can make education better, we'd love to partner. This project reaches zero revenue — every credit goes directly into content for kids.

---

## Contributors Welcome

We're looking for people who care about education, curiosity, and building things that matter for kids.

**Areas where we need help:**

| Area | What we need | Good for |
|------|-------------|----------|
| **Scalability brainstorming** | How do we go from 3 stories to 3,000? Content pipelines, caching strategies, CDN architecture for global delivery. | Backend / infra engineers |
| **Content writing** | Draft new 7-stage stories on topics kids love — space, dinosaurs, cooking, music, sports, the ocean. | Writers, educators, subject enthusiasts |
| **Accessibility** | Screen reader testing, motor-impaired navigation, cognitive load review, WCAG compliance. | A11y specialists |
| **Illustration & design** | Card visual templates, topic cover art direction, animation design for transitions. | Designers, illustrators |
| **Multi-language** | Hindi first, then regional languages. Translation + cultural adaptation, not just word swaps. | Translators, localization experts |
| **AI safety for kids** | Content moderation pipelines, age-appropriate language filters, bias detection in generated content. | ML engineers, child safety researchers |
| **Educator perspective** | Classroom integration ideas, curriculum alignment, assignment templates ("follow 5 connections, write about your path"). | Teachers, homeschool parents |

**How to contribute:**
1. Pick an [Issue](../../issues) or open one with your idea
2. Fork → branch → PR (keep PRs focused and small)
3. Join the discussion — even feedback-only contributions matter

---

## Explore Further

Every SearchSaga story is rooted in real knowledge. Here are curated links to go deeper on the topics in our prototype — filtered for quality and age-appropriateness.

### 📷 How the Camera Grew Up

| Topic | Wikipedia | Grokipedia / xAI | Other |
|-------|-----------|-------------------|-------|
| Camera obscura | [Camera obscura](https://en.wikipedia.org/wiki/Camera_obscura) | [Ask Grok: "How did the camera obscura work?"](https://x.com/i/grok?text=How+did+the+camera+obscura+work) | — |
| Daguerreotype | [Daguerreotype](https://en.wikipedia.org/wiki/Daguerreotype) | [Ask Grok: "What was the first photograph?"](https://x.com/i/grok?text=What+was+the+first+photograph+ever+taken) | — |
| Film photography | [Photographic film](https://en.wikipedia.org/wiki/Photographic_film) | [Ask Grok: "How does film capture light?"](https://x.com/i/grok?text=How+does+film+photography+capture+light) | — |
| Digital cameras | [Digital camera](https://en.wikipedia.org/wiki/Digital_camera) | [Ask Grok: "How do phone cameras work?"](https://x.com/i/grok?text=How+do+phone+cameras+work+for+kids) | — |
| Photography history | [History of photography](https://en.wikipedia.org/wiki/History_of_photography) | [Ask Grok: "Timeline of camera evolution"](https://x.com/i/grok?text=Timeline+of+camera+evolution+for+kids) | — |

### 🔮 How Glass Grew Up

| Topic | Wikipedia | Grokipedia / xAI | Other |
|-------|-----------|-------------------|-------|
| Glass | [Glass](https://en.wikipedia.org/wiki/Glass) | [Ask Grok: "How is glass made from sand?"](https://x.com/i/grok?text=How+is+glass+made+from+sand+explain+for+kids) | — |
| Stained glass | [Stained glass](https://en.wikipedia.org/wiki/Stained_glass) | [Ask Grok: "How were stained glass windows made?"](https://x.com/i/grok?text=How+were+stained+glass+windows+made) | — |
| Optical lens | [Lens (optics)](https://en.wikipedia.org/wiki/Lens_(optics)) | [Ask Grok: "How do lenses bend light?"](https://x.com/i/grok?text=How+do+lenses+bend+light+simple+explanation) | — |
| Fiber optics | [Optical fiber](https://en.wikipedia.org/wiki/Optical_fiber) | [Ask Grok: "How does the internet travel through glass?"](https://x.com/i/grok?text=How+does+internet+travel+through+glass+fiber+optics) | — |
| Gorilla Glass | [Gorilla Glass](https://en.wikipedia.org/wiki/Gorilla_Glass) | [Ask Grok: "What makes phone screens so strong?"](https://x.com/i/grok?text=What+makes+phone+screens+so+strong+Gorilla+Glass) | — |

### 🏖️ How Sand Became Glass

| Topic | Wikipedia | Grokipedia / xAI | Other |
|-------|-----------|-------------------|-------|
| Sand | [Sand](https://en.wikipedia.org/wiki/Sand) | [Ask Grok: "What is sand actually made of?"](https://x.com/i/grok?text=What+is+sand+actually+made+of+for+kids) | — |
| Silicon | [Silicon](https://en.wikipedia.org/wiki/Silicon) | [Ask Grok: "Why is silicon so important?"](https://x.com/i/grok?text=Why+is+silicon+so+important+for+technology) | — |
| Semiconductors | [Semiconductor](https://en.wikipedia.org/wiki/Semiconductor) | [Ask Grok: "How do microchips work?"](https://x.com/i/grok?text=How+do+microchips+work+simple+explanation) | — |
| Silicon Valley | [Silicon Valley](https://en.wikipedia.org/wiki/Silicon_Valley) | [Ask Grok: "Why is it called Silicon Valley?"](https://x.com/i/grok?text=Why+is+it+called+Silicon+Valley) | — |
| Fulgurite | [Fulgurite](https://en.wikipedia.org/wiki/Fulgurite) | [Ask Grok: "What happens when lightning hits sand?"](https://x.com/i/grok?text=What+happens+when+lightning+hits+sand) | — |

> **For parents & educators:** These links are pre-filtered starting points. Wikipedia articles can be read in [Simple English](https://simple.english.wikipedia.org/) for younger readers. Grok queries are phrased at an 8–12 reading level.

---

## Community & Feedback

We believe the best way to build for kids is to listen — to kids, parents, and educators.

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

---

<p align="center">
  <b>SearchSaga</b> — Subjects, Re-imagined for the Age of AI.
  <br/>
  <sub>Built with curiosity. For curious minds.</sub>
</p>
