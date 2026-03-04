import type { DemoCard, Cousin } from "./camera";

export const sandTopic = {
  title: "How Sand Became Glass",
  domain: "nature" as const,
  subtitle:
    "The tiny grain that built our world — from beaches to microchips",
};

export const sandCards: DemoCard[] = [
  // ═══════════════════════════════════════
  // Stage 1: The Itch
  // ═══════════════════════════════════════
  {
    type: "stage_marker",
    stage: "the-itch",
    text: "The Itch",
  },
  {
    type: "moment",
    stage: "the-itch",
    text: "Pick up a handful of sand. You're holding millions of tiny rocks, each one ground down by rivers, glaciers, and waves over millions of years.",
    subtext: "Every grain has a story older than human civilization.",
    cousin: {
      title: "How Mountains Grew Up",
      hook: "Mountains are born when tectonic plates crash into each other at 2 centimeters per year. The Himalayas are still growing — about 1cm taller every year.",
      domain: "nature",
      emoji: "🏔️",
    },
  },
  {
    type: "surprise",
    stage: "the-itch",
    text: "There are roughly 7.5 quintillion grains of sand on Earth — that's 7,500,000,000,000,000,000. More than the stars you can see in the night sky.",
    cousin: {
      title: "How Stars Work",
      hook: "Stars are giant nuclear reactors — hydrogen atoms smash together to make helium, releasing light that takes millions of years to reach your eyes.",
      domain: "science",
      emoji: "⭐",
    },
  },
  {
    type: "moment",
    stage: "the-itch",
    text: "But not all sand is the same. Desert sand is too round and smooth — wind polishes it. The sand that makes glass needs to be sharp and angular.",
    subtext: "Riverbeds and coastal dunes have the right stuff. Desert sand? Almost useless.",
    cousin: {
      title: "How Deserts Shape Life",
      hook: "Deserts cover a third of Earth's land but hold secrets: underground rivers, animals that never drink water, and the Sahara — which was green with lakes just 6,000 years ago.",
      domain: "nature",
      emoji: "🏜️",
    },
  },

  // ═══════════════════════════════════════
  // Stage 2: The Mutation
  // ═══════════════════════════════════════
  {
    type: "stage_marker",
    stage: "the-mutation",
    text: "The Mutation",
  },
  {
    type: "moment",
    stage: "the-mutation",
    text: "The key ingredient in glass sand is silica — silicon dioxide. It's the second most common substance in Earth's crust, hiding in plain sight.",
    subtext: "Quartz crystals, flint, opal — they're all forms of silica.",
    cousin: {
      title: "How Crystals Grow",
      hook: "Crystals form atom by atom, building perfect geometric patterns over thousands of years. A single quartz crystal started growing before the dinosaurs existed.",
      domain: "science",
      emoji: "💎",
    },
  },
  {
    type: "surprise",
    stage: "the-mutation",
    text: "Silicon — the element in sand — is the same element in every computer chip. The beach and your laptop are made of the same stuff.",
    cousin: {
      title: "How Computers Grew Up",
      hook: "The first computer filled an entire room and could do less than your calculator. Now a chip the size of your fingernail contains 50 billion transistors.",
      domain: "technology",
      emoji: "💻",
    },
  },
  {
    type: "interaction",
    stage: "the-mutation",
    text: "Pure silica sand melts at 1,713°C — way too hot for ancient furnaces. So how did early glassmakers get around this?",
    question: "What's the trick?",
    cousin: {
      title: "How Fire Was Tamed",
      hook: "Controlling fire was humanity's first technology — and arguably its most important. Every material science breakthrough since has been about getting hotter, more precisely.",
      domain: "technology",
      emoji: "🔥",
    },
  },
  {
    type: "moment",
    stage: "the-mutation",
    text: "They added soda ash (from burned seaweed) and limestone. These 'flux' materials lower the melting point to about 1,000°C — achievable with a wood fire.",
    subtext: "Sand + ash + lime = glass. The recipe hasn't fundamentally changed in 5,500 years.",
    cousin: {
      title: "How Chemistry Grew Up",
      hook: "Chemistry started with glassmakers, dyers, and perfumers — people mixing things to see what happened. The periodic table was discovered because a Russian professor needed a textbook.",
      domain: "science",
      emoji: "🧪",
    },
  },
  {
    type: "breathing",
    stage: "the-mutation",
    color: "#8B5CF6",
  },

  // ═══════════════════════════════════════
  // Stage 3: The DNA
  // ═══════════════════════════════════════
  {
    type: "stage_marker",
    stage: "the-dna",
    text: "The DNA",
  },
  {
    type: "moment",
    stage: "the-dna",
    text: "A grain of sand under a microscope is breathtaking — each one is a tiny sculpture shaped by its journey. Shell fragments, mineral crystals, volcanic glass.",
    subtext: "Dr. Gary Greenberg photographs sand grains at 250x magnification. They look like gemstones.",
    cousin: {
      title: "How Microscopes Grew Up",
      hook: "The first microscopes used glass lenses (made from sand!) to see a world invisible to the naked eye. Bacteria, cells, atoms — each lens upgrade revealed a new universe.",
      domain: "technology",
      emoji: "🔬",
    },
  },
  {
    type: "surprise",
    stage: "the-dna",
    text: "Sand on a beach in Normandy contains tiny fragments of D-Day — metal shrapnel from 1944, ground down into grains and mixed with shells and quartz.",
    cousin: {
      title: "How Wars Change Materials",
      hook: "Almost every material breakthrough was accelerated by war — radar needed special glass, tanks needed new steel, the atomic bomb needed purified uranium.",
      domain: "human-systems",
      emoji: "🎖️",
    },
  },
  {
    type: "moment",
    stage: "the-dna",
    text: "Silicon's secret power: it's a semiconductor. It doesn't conduct electricity like metal, and it doesn't block it like rubber. It does BOTH — depending on what you do to it.",
    subtext: "That in-between behavior is why we build computer chips from sand.",
    cousin: {
      title: "How Electricity Grew Up",
      hook: "Benjamin Franklin flew a kite in a thunderstorm. Nikola Tesla dreamed of wireless power. Edison lit a city. And it all started because someone rubbed amber on fur.",
      domain: "science",
      emoji: "⚡",
    },
  },

  // ═══════════════════════════════════════
  // Stage 4: The Birth
  // ═══════════════════════════════════════
  {
    type: "stage_marker",
    stage: "the-birth",
    text: "The Birth",
  },
  {
    type: "moment",
    stage: "the-birth",
    text: "Ancient Egypt was one of the first civilizations to make glass from sand on an industrial scale. They colored it with copper for turquoise and cobalt for deep blue.",
    subtext: "Tutankhamun's death mask has glass inlays — 3,300 years old and still brilliant.",
    cousin: {
      title: "How Egypt Built the Pyramids",
      hook: "The Great Pyramid contains 2.3 million stone blocks, each weighing 2.5 tons. It was built without wheels, iron tools, or pulleys — and we still argue about how.",
      domain: "human-systems",
      emoji: "🔺",
    },
  },
  {
    type: "surprise",
    stage: "the-birth",
    text: "Egyptian blue glass was so valuable it was traded weight-for-weight with gold. A single glass bead could buy a slave.",
    cousin: {
      title: "How Jewelry Grew Up",
      hook: "The oldest known jewelry is 150,000 years old — shell beads from a cave in Morocco. Humans decorated themselves long before they built houses or grew crops.",
      domain: "art",
      emoji: "💍",
    },
  },
  {
    type: "moment",
    stage: "the-birth",
    text: "The Phoenicians — master sailors and traders — spread glass-making across the Mediterranean. Every port they visited learned the craft.",
    subtext: "They also invented the alphabet. Busy people.",
    cousin: {
      title: "How the Alphabet Grew Up",
      hook: "Before the alphabet, writing used thousands of symbols. The Phoenicians simplified it to 22 letters. Every alphabet in Europe, the Middle East, and India traces back to them.",
      domain: "human-systems",
      emoji: "🔤",
    },
  },

  // ═══════════════════════════════════════
  // Stage 5: The Growth Spurt
  // ═══════════════════════════════════════
  {
    type: "stage_marker",
    stage: "the-growth-spurt",
    text: "The Growth Spurt",
  },
  {
    type: "moment",
    stage: "the-growth-spurt",
    text: "In the 1940s, scientists figured out how to purify silicon from sand to 99.9999999% purity. Nine nines. That's like finding ONE wrong grain in a billion.",
    subtext: "This ultra-pure silicon became the foundation of every computer chip ever made.",
    cousin: {
      title: "How Chips Grew Up",
      hook: "The first microchip had 1 transistor. Your phone has 15 billion. Moore's Law predicted this doubling every two years — and it held true for 60 years.",
      domain: "technology",
      emoji: "🔲",
    },
  },
  {
    type: "surprise",
    stage: "the-growth-spurt",
    text: "The 'Silicon' in Silicon Valley is literal. The entire tech industry is built on purified beach sand.",
    cousin: {
      title: "How Startups Grew Up",
      hook: "Silicon Valley started in a garage in Palo Alto — Hewlett and Packard in 1939. Now more value has been created there than in entire countries.",
      domain: "human-systems",
      emoji: "🚀",
    },
  },
  {
    type: "interaction",
    stage: "the-growth-spurt",
    text: "Sand is the most consumed natural resource on Earth after water. We use 50 billion tonnes per year. Beaches are disappearing. Sand is being stolen.",
    question: "Wait — sand can be stolen?",
    cousin: {
      title: "How Resources Cause Conflicts",
      hook: "Wars have been fought over gold, oil, water, and diamonds. Now add sand to the list — entire islands have been illegally dredged to make concrete for cities.",
      domain: "human-systems",
      emoji: "⛏️",
    },
  },
  {
    type: "moment",
    stage: "the-growth-spurt",
    text: "Yes. Sand mafias operate in India, Morocco, and Southeast Asia. They steal entire beaches at night using trucks and barges. It sounds made up, but it's real.",
    cousin: {
      title: "How Concrete Grew Up",
      hook: "Concrete is the most used material on Earth after water. It needs sand — lots of it. If concrete were a country, it would be the third-largest CO2 emitter.",
      domain: "technology",
      emoji: "🧱",
    },
  },
  {
    type: "breathing",
    stage: "the-growth-spurt",
    color: "#EAB308",
  },

  // ═══════════════════════════════════════
  // Stage 6: The Territorial Fight
  // ═══════════════════════════════════════
  {
    type: "stage_marker",
    stage: "the-territorial-fight",
    text: "The Territorial Fight",
  },
  {
    type: "moment",
    stage: "the-territorial-fight",
    text: "Sand is running out. Not the stuff in deserts — that's useless for building. The sharp, angular sand from riverbeds that we actually need.",
    subtext: "We're using it faster than nature can make it. Rivers take thousands of years to grind rocks into usable sand.",
    cousin: {
      title: "How Recycling Grew Up",
      hook: "Glass is 100% recyclable — forever. A glass bottle can be melted and remade infinite times without losing quality. Sand doesn't have to be a one-way trip.",
      domain: "technology",
      emoji: "♻️",
    },
  },
  {
    type: "surprise",
    stage: "the-territorial-fight",
    text: "Singapore has imported so much sand for land reclamation that Indonesia, Malaysia, and Cambodia have banned sand exports to them.",
    cousin: {
      title: "How Cities Grew Up",
      hook: "Half of humanity now lives in cities — up from 3% in 1800. By 2050, it'll be 68%. Every one of those buildings, roads, and bridges needs sand.",
      domain: "human-systems",
      emoji: "🌆",
    },
  },
  {
    type: "moment",
    stage: "the-territorial-fight",
    text: "Sand vs. desert sand. River sand vs. ocean sand. Construction sand vs. silicon sand. Not all sand is equal — and the kind we need most is the kind that's disappearing.",
    cousin: {
      title: "How Ecosystems Balance",
      hook: "Remove sand from a river and the whole ecosystem changes — fish lose spawning grounds, banks erode, bridges collapse. Everything is connected.",
      domain: "nature",
      emoji: "🌿",
    },
  },

  // ═══════════════════════════════════════
  // Stage 7: The Offspring
  // ═══════════════════════════════════════
  {
    type: "stage_marker",
    stage: "the-offspring",
    text: "The Offspring",
  },
  {
    type: "moment",
    stage: "the-offspring",
    text: "From sand to glass to lenses to cameras to screens to fiber optics to microchips. One humble grain of quartz became the backbone of modern civilization.",
    subtext: "The sand on a beach contains the same silicon that powers your phone, your internet, and your future.",
    cousin: {
      title: "How the Internet Grew Up",
      hook: "Data travels through glass fiber at the speed of light — hair-thin threads of sand-turned-glass carrying every message, video, and search on Earth.",
      domain: "technology",
      emoji: "🌐",
    },
  },
  {
    type: "surprise",
    stage: "the-offspring",
    text: "Scientists are now making 'sand batteries' — storing renewable energy as heat in giant silos of sand. The grain that built civilization might also save it.",
    cousin: {
      title: "How Solar Energy Works",
      hook: "Solar panels are made of silicon — purified sand. The sun hits the silicon, electrons move, and you get electricity. Sand catching sunlight to power the world.",
      domain: "science",
      emoji: "☀️",
    },
  },
  {
    type: "moment",
    stage: "the-offspring",
    text: "A grain of sand. Smaller than a pencil tip. Older than any human memory. And the most quietly powerful material on Earth.",
    subtext: "What will sand become next? Quantum computers? Space habitats? Buildings that grow themselves?",
    cousin: {
      title: "How Space Travel Grew Up",
      hook: "Moon dust is basically sand — regolith. NASA is figuring out how to melt lunar sand into glass for building moon bases. Sand will follow us to the stars.",
      domain: "science",
      emoji: "🚀",
    },
  },

  // ═══ Final Connection Card ═══
  {
    type: "connection",
    connectionLeft: {
      title: "How Glass Grew Up",
      hook: "Sand's most famous offspring — melted, shaped, and polished into the material that let humanity see, build, and connect.",
      domain: "technology",
      emoji: "🔮",
      topicSlug: "glass",
    },
    connectionRight: {
      title: "How Chips Grew Up",
      hook: "Purified sand became silicon wafers, which became microchips, which became the brains inside everything from phones to spaceships.",
      domain: "technology",
      emoji: "🔲",
    },
  },
];
