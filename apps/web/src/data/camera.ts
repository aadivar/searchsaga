import type { CardType, Stage } from "@searchsaga/types";

export interface Cousin {
  title: string;
  hook: string;
  domain: string;
  emoji: string;
  topicSlug?: string;
}

export interface DemoCard {
  type: CardType;
  stage?: Stage;
  text?: string;
  subtext?: string;
  question?: string;
  cousin?: Cousin;
  connectionLeft?: Cousin;
  connectionRight?: Cousin;
  color?: string;
}

export const cameraTopic = {
  title: "How the Camera Grew Up",
  domain: "technology" as const,
  subtitle: "From dark rooms to your pocket — how humans learned to freeze time",
};

/**
 * "How the Camera Grew Up" — full card deck
 *
 * Every content card has a `cousin` — a left-swipe connection
 * that branches into a related topic. This is the soul of SearchSaga:
 * everything is connected, and kids discover it by exploring.
 */
export const cameraCards: DemoCard[] = [
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
    text: "Imagine you see the most beautiful sunset of your life.",
    subtext: "You want to keep it. But how? The moment passes. It's gone forever.",
    cousin: {
      title: "How Color Grew Up",
      hook: "That sunset you want to keep? Its colors don't actually exist. Your brain invents them from wavelengths of light.",
      domain: "science",
      emoji: "🌈",
    },
  },
  {
    type: "moment",
    stage: "the-itch",
    text: "For thousands of years, the only way to save a moment was to paint it.",
    subtext: "But paintings take hours. Days. And they depend on the painter's skill.",
    cousin: {
      title: "How Painting Grew Up",
      hook: "Cave painters 40,000 years ago had the same itch — freeze the moment. They used spit, charcoal, and ochre on rock walls.",
      domain: "art",
      emoji: "🎨",
    },
  },
  {
    type: "breathing",
    stage: "the-itch",
    color: "#F97316",
  },
  {
    type: "surprise",
    stage: "the-itch",
    text: "Ancient Arabs noticed something weird: light sneaking through a tiny hole in a tent projected the ENTIRE outside world — upside down — on the opposite wall.",
    cousin: {
      title: "How Light Grew Up",
      hook: "Light doesn't just travel in straight lines — it's both a wave AND a particle. Nobody fully understood this until Einstein, and honestly, it's still weird.",
      domain: "science",
      emoji: "💡",
    },
  },
  {
    type: "moment",
    stage: "the-itch",
    text: "They called it camera obscura — literally \"dark room\" in Latin.",
    subtext: "The name camera? It comes from this. Every camera you've ever used is named after a dark tent.",
    cousin: {
      title: "How Arabic Science Shaped the World",
      hook: "While Europe was in its Dark Ages, Arab scholars were inventing algebra, optics, and the scientific method. The camera obscura was just one of their gifts.",
      domain: "human-systems",
      emoji: "🌙",
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
    text: "For 800 years, the camera obscura was just a cool trick. Artists traced the projections, but nobody could freeze the image.",
    subtext: "The light just... passed through. Nothing held onto it.",
    cousin: {
      title: "How Glass Grew Up",
      hook: "The lenses that made the camera obscura work came from glass-makers in Venice — who were literally imprisoned on an island so their secrets couldn't escape.",
      domain: "technology",
      emoji: "🔮",
      topicSlug: "glass",
    },
  },
  {
    type: "interaction",
    stage: "the-mutation",
    text: "What if you could find a material that changes permanently when light touches it?",
    question: "What do you think happened next?",
    cousin: {
      title: "How Chemistry Grew Up",
      hook: "The search for light-sensitive materials started with alchemy — people literally trying to turn lead into gold accidentally discovered how silver reacts to light.",
      domain: "science",
      emoji: "⚗️",
    },
  },
  {
    type: "moment",
    stage: "the-mutation",
    text: "In 1826, a French inventor named Niépce coated a metal plate with a kind of tar that hardened in sunlight.",
    subtext: "He pointed a camera obscura at his window and waited.",
    cousin: {
      title: "How Printing Grew Up",
      hook: "Niépce wasn't even trying to make photos — he was trying to improve printing. His camera experiments were a side quest that became the main quest.",
      domain: "technology",
      emoji: "📜",
    },
  },
  {
    type: "surprise",
    stage: "the-mutation",
    text: "He waited EIGHT HOURS. The exposure took an entire day. The first photograph ever taken is a blurry rooftop — and it took from morning to evening to capture.",
    cousin: {
      title: "How Patience Shaped Discovery",
      hook: "The biggest breakthroughs often came from people who just... waited longer than anyone else thought reasonable. Darwin waited 20 years to publish evolution.",
      domain: "human-systems",
      emoji: "⏳",
    },
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
    text: "The camera didn't come from nowhere. It was a collision of things that already existed.",
    subtext: "Optics from ancient glass-makers. Chemistry from alchemists. Mechanics from clockmakers.",
    cousin: {
      title: "How Clocks Grew Up",
      hook: "Clockmakers built the precision mechanics that cameras needed. And clocks had their own itch — monks needed to know when to pray. Prayer built the machines that built cameras.",
      domain: "technology",
      emoji: "⏰",
    },
  },
  {
    type: "moment",
    stage: "the-dna",
    text: "Silver compounds that darken in light? Known since the 1600s. Lenses that focus light? Ancient Egypt. The dark room principle? 400 BC.",
    subtext: "All the ingredients were lying around for centuries. Someone just had to combine them.",
    cousin: {
      title: "How Ideas Collide",
      hook: "Almost every invention is a remix. The ingredients exist for decades before someone connects them. The iPhone? Touch screens existed for 30 years. The genius was the combination.",
      domain: "human-systems",
      emoji: "💥",
    },
  },
  {
    type: "breathing",
    stage: "the-dna",
    color: "#14B8A6",
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
    text: "In 1839, Daguerre figured out how to fix an image in minutes, not hours. The daguerreotype was born.",
    subtext: "For the first time in history, ordinary people could see their own face exactly as it was. Not painted. Not imagined. Real.",
    cousin: {
      title: "How Mirrors Grew Up",
      hook: "Before cameras, most people had NEVER seen their own face clearly. Mirrors were luxury items. A clear reflection was something only the rich could afford.",
      domain: "technology",
      emoji: "🪞",
    },
  },
  {
    type: "surprise",
    stage: "the-birth",
    text: "People were TERRIFIED. Some believed the camera stole your soul. Others thought it would kill portrait painters forever.",
    cousin: {
      title: "How Fear of Technology Repeats",
      hook: "People feared the printing press would spread lies. They feared trains would make your organs explode. They feared TV would rot brains. Every new technology gets the same panic.",
      domain: "human-systems",
      emoji: "😱",
    },
  },
  {
    type: "moment",
    stage: "the-birth",
    text: "The painter Paul Delaroche supposedly saw a daguerreotype and declared: \"From today, painting is dead.\"",
    subtext: "Painting didn't die. It just stopped trying to copy reality — and that's how modern art was born.",
    cousin: {
      title: "How Modern Art Was Born",
      hook: "The camera didn't kill painting — it freed it. Once photos could capture reality, painters asked: what can WE do that cameras can't? The answer was Impressionism, Cubism, Surrealism.",
      domain: "art",
      emoji: "🖼️",
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
    text: "George Eastman had a radical idea: what if cameras weren't just for professionals?",
    subtext: "In 1888, he created Kodak. You pressed a button. They did the rest.",
    cousin: {
      title: "How Mass Production Changed Everything",
      hook: "Kodak did to cameras what Ford did to cars — made something expensive become cheap enough for everyone. This pattern repeats: computers, phones, DNA sequencing.",
      domain: "technology",
      emoji: "🏭",
    },
  },
  {
    type: "surprise",
    stage: "the-growth-spurt",
    text: "By 1999, humans were taking 80 BILLION photos a year. Today? Over 1.4 TRILLION. That's 44,000 photos every single second.",
    cousin: {
      title: "How Memory & Storage Grew Up",
      hook: "1.4 trillion photos need somewhere to live. The entire history of storing information — from clay tablets to the cloud — is a story of fitting more into less.",
      domain: "technology",
      emoji: "💾",
    },
  },
  {
    type: "interaction",
    stage: "the-growth-spurt",
    text: "Your phone camera is 10,000x more powerful than the first digital camera from 1975.",
    question: "What do you think that first digital camera weighed?",
    cousin: {
      title: "How Chips Grew Up",
      hook: "The reason your phone camera is 10,000x better? Semiconductors. Tiny chips that double in power every two years. This pattern — Moore's Law — has held true for 60 years.",
      domain: "technology",
      emoji: "🔬",
    },
  },
  {
    type: "moment",
    stage: "the-growth-spurt",
    text: "The first digital camera weighed 3.6 kilograms and took 23 seconds to save a single black-and-white photo onto a cassette tape.",
    subtext: "It was built by a Kodak engineer named Steve Sasson. Kodak shelved it — they were afraid it would kill their film business. It did.",
    cousin: {
      title: "How Giants Fall",
      hook: "Kodak invented digital photography and then buried it. Nokia had smartphones before Apple. Blockbuster turned down Netflix. The biggest threat to a giant is always the thing they refuse to see.",
      domain: "human-systems",
      emoji: "🦕",
    },
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
    text: "When cameras got cheap and everywhere, a war started: who controls the image?",
    subtext: "Governments use cameras for surveillance. Activists use them to expose injustice. Both claim the same tool.",
    cousin: {
      title: "How Privacy Grew Up",
      hook: "Privacy didn't even exist as an idea until 1890 — when cameras got small enough to take photos of people without them knowing. The camera literally invented the privacy debate.",
      domain: "human-systems",
      emoji: "🔒",
    },
  },
  {
    type: "moment",
    stage: "the-territorial-fight",
    text: "Today, AI can generate photorealistic images that never happened. Deepfakes can put words in anyone's mouth.",
    subtext: "The camera was built to capture truth. Now it can manufacture lies. The fight over what's real is just beginning.",
    cousin: {
      title: "How AI Grew Up",
      hook: "AI learned to see by studying millions of photographs. Now it can create photos of things that never existed. The student has outpaced the teacher.",
      domain: "technology",
      emoji: "🤖",
    },
  },
  {
    type: "breathing",
    stage: "the-territorial-fight",
    color: "#8B5CF6",
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
    text: "The camera's children are everywhere. Medical imaging sees inside your body without cutting you open.",
    subtext: "X-rays, MRIs, ultrasounds — all descendants of the same idea: use energy to capture what the eye can't see.",
    cousin: {
      title: "How X-Rays Grew Up",
      hook: "The first X-ray ever taken was of a hand wearing a ring — the scientist's wife. She saw her own skeleton and said: 'I have seen my death.' Medicine was transformed overnight.",
      domain: "science",
      emoji: "🩻",
    },
  },
  {
    type: "moment",
    stage: "the-offspring",
    text: "Satellites photograph every inch of Earth. We can watch ice caps melt, forests shrink, and cities grow — in real time.",
    subtext: "Self-driving cars see the road through cameras. Your phone unlocks by recognizing your face.",
    cousin: {
      title: "How Maps Grew Up",
      hook: "Satellite cameras gave us Google Earth — but maps started 4,000 years ago scratched on clay tablets. From 'here be dragons' to seeing your own house from space.",
      domain: "technology",
      emoji: "🗺️",
    },
  },
  {
    type: "surprise",
    stage: "the-offspring",
    text: "The James Webb Space Telescope is essentially a camera — and it just photographed light from 300 million years after the Big Bang. We're watching the universe's baby pictures.",
    cousin: {
      title: "How Telescopes Grew Up",
      hook: "Galileo's telescope in 1609 was weaker than a kid's toy today. Now we have a camera orbiting the Sun, a million miles from Earth, photographing the birth of stars.",
      domain: "science",
      emoji: "🔭",
    },
  },
  {
    type: "moment",
    stage: "the-offspring",
    text: "A dark tent in the Arabian desert. A blurry rooftop in France. A trillion photos a year in your pocket.",
    subtext: "What will the camera's next offspring be? What new way of seeing hasn't been invented yet?",
    cousin: {
      title: "How the Eye Evolved",
      hook: "The camera copied the eye. But eyes took 500 million years to evolve — starting as a single light-sensitive cell. Nature's R&D department is slow but unbeatable.",
      domain: "nature",
      emoji: "👁️",
    },
  },

  // ═══ Final Connection Card ═══
  {
    type: "connection",
    connectionLeft: {
      title: "How the Eye Evolved",
      hook: "The camera didn't invent seeing — it copied a 500-million-year-old design that nature perfected first.",
      domain: "nature",
      emoji: "👁️",
    },
    connectionRight: {
      title: "How AI Grew Up",
      hook: "Cameras gave machines eyes. But seeing isn't the same as understanding — that's where AI comes in.",
      domain: "technology",
      emoji: "🤖",
    },
  },
];
