import type { DemoCard, Cousin } from "./camera";

export const glassTopic = {
  title: "How Glass Grew Up",
  domain: "technology" as const,
  subtitle:
    "From lightning strikes to skyscrapers — how melted sand changed everything",
};

export const glassCards: DemoCard[] = [
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
    text: "Thousands of years ago, someone picked up a strange, smooth rock from the desert floor. It was shiny. It was see-through. It wasn't like anything else.",
    subtext: "That rock was made by lightning hitting sand — nature's first glass.",
    cousin: {
      title: "How Lightning Works",
      hook: "Lightning heats the air to 30,000°C — five times hotter than the surface of the sun. When it hits sand, it fuses grains into glass tubes called fulgurites.",
      domain: "science",
      emoji: "⚡",
    },
  },
  {
    type: "surprise",
    stage: "the-itch",
    text: "Lightning can heat sand to 1,800°C in a fraction of a second — creating hollow glass tubes buried underground.",
    cousin: {
      title: "How Rocks Tell Stories",
      hook: "Every rock is a time capsule. Geologists read layers of stone like pages in a book — each one recording millions of years of Earth's history.",
      domain: "nature",
      emoji: "🪨",
    },
  },
  {
    type: "interaction",
    stage: "the-itch",
    text: "Humans found these glass nuggets and thought they were magic. But what if you could MAKE this stuff whenever you wanted?",
    question: "What would you need?",
    cousin: {
      title: "How Fire Was Tamed",
      hook: "Before glass, humans had to tame fire itself. The jump from 'fire is scary' to 'fire is a tool' took hundreds of thousands of years.",
      domain: "technology",
      emoji: "🔥",
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
    text: "Around 3500 BC, in ancient Mesopotamia, someone figured it out. Heat sand with ash and limestone. Melt it. Shape it. Glass was born — by human hands.",
    subtext: "The first glass was rough and cloudy. But it sparkled.",
    cousin: {
      title: "How Sand Became Glass",
      hook: "Sand is just tiny rocks — but not all sand makes glass. You need silica sand, a special kind found in deserts and riverbeds, with grains of pure quartz.",
      domain: "nature",
      emoji: "🏖️",
      topicSlug: "sand",
    },
  },
  {
    type: "surprise",
    stage: "the-mutation",
    text: "The earliest glass objects were beads — tiny, precious, traded like gold across the ancient world.",
    cousin: {
      title: "How Trade Routes Grew Up",
      hook: "Glass beads were one of the first 'global' products — carried along the Silk Road from Mesopotamia to China thousands of years before Amazon.",
      domain: "human-systems",
      emoji: "🐫",
    },
  },
  {
    type: "moment",
    stage: "the-mutation",
    text: "For over a thousand years, glass was a luxury. Only kings and priests owned it. It was rarer than silver.",
    cousin: {
      title: "How Money Grew Up",
      hook: "Before coins, people traded glass beads, shells, salt, and cattle. The idea of 'money' was invented and reinvented hundreds of times across cultures.",
      domain: "human-systems",
      emoji: "💰",
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
    text: "Glass is sand + heat + time. That's the recipe. But the magic is in the structure: atoms frozen mid-flow, neither solid nor liquid.",
    subtext: "Scientists still debate: is glass a solid, a liquid, or something in between?",
    cousin: {
      title: "How Atoms Work",
      hook: "Everything you see is made of atoms — but atoms are 99.9999% empty space. If an atom were the size of a stadium, the nucleus would be a pea on the field.",
      domain: "science",
      emoji: "⚛️",
    },
  },
  {
    type: "surprise",
    stage: "the-dna",
    text: "Glass doesn't have a crystal structure like ice or diamond. Its atoms are FROZEN in random positions — like a photograph of a liquid.",
    cousin: {
      title: "How Color Grew Up",
      hook: "Add cobalt to glass, it turns blue. Add gold, it turns ruby red. Ancient glassmakers were the first color chemists — mixing metals to paint with light.",
      domain: "science",
      emoji: "🌈",
    },
  },
  {
    type: "interaction",
    stage: "the-dna",
    text: "Here's the weird part: old church windows are slightly thicker at the bottom. People said the glass was 'flowing' downward over centuries.",
    question: "True or myth?",
    cousin: {
      title: "How the Roman Empire Built Things",
      hook: "Romans perfected glassblowing and put glass in windows for the first time. They built things to last — their concrete is still stronger than ours 2,000 years later.",
      domain: "human-systems",
      emoji: "🏛️",
    },
  },
  {
    type: "moment",
    stage: "the-dna",
    text: "It's a myth! Glass at room temperature would take longer than the age of the universe to flow. The windows were just made unevenly.",
    cousin: {
      title: "How Time Works",
      hook: "Time isn't the same everywhere. Near a black hole, time literally slows down. An astronaut orbiting one would age slower than everyone on Earth.",
      domain: "science",
      emoji: "⏳",
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
    text: "Around 50 BC, Syrian craftsmen invented the blowpipe. Suddenly you could inflate molten glass like a balloon. Shapes that took days now took minutes.",
    subtext: "Glassblowing was the ancient world's 3D printing — fast, flexible, revolutionary.",
    cousin: {
      title: "How 3D Printing Grew Up",
      hook: "3D printing started as a curiosity in the 1980s. Now it prints houses, rocket engines, and even human organs. Manufacturing will never be the same.",
      domain: "technology",
      emoji: "🖨️",
    },
  },
  {
    type: "surprise",
    stage: "the-birth",
    text: "The Romans mass-produced glass cups so cheaply that ordinary people could afford them for the first time in history.",
    cousin: {
      title: "How Secrets Were Kept",
      hook: "Venetian glassmakers on Murano island faced execution if they left. Their techniques were state secrets — the intellectual property laws of the Middle Ages.",
      domain: "human-systems",
      emoji: "🤫",
    },
  },
  {
    type: "moment",
    stage: "the-birth",
    text: "When Rome fell, the secret of clear glass almost died with it. For centuries, European glass was green, bubbly, and rough.",
    subtext: "But on one tiny island near Venice, the art survived.",
    cousin: {
      title: "How Islands Shape History",
      hook: "Islands are laboratories of evolution — and civilization. From Murano's glass to Iceland's democracy to Japan's unique culture, isolation breeds innovation.",
      domain: "nature",
      emoji: "🏝️",
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
    text: "In the 1200s, Venetian glassmakers on Murano island cracked the code: cristallo — glass so clear you could see through it perfectly.",
    subtext: "This one breakthrough changed everything that came next.",
    cousin: {
      title: "How Telescopes Grew Up",
      hook: "Clear glass led directly to lenses, which led to telescopes. Galileo pointed one at the sky in 1609 and proved the Earth wasn't the center of everything.",
      domain: "science",
      emoji: "🔭",
    },
  },
  {
    type: "surprise",
    stage: "the-growth-spurt",
    text: "Clear glass → lenses → spectacles → microscopes → telescopes. One material unlocked FIVE world-changing inventions.",
    cousin: {
      title: "How the Eye Evolved",
      hook: "The eye evolved independently over 40 times in nature. Trilobites had crystal lenses made of calcite — literal mineral glasses — 500 million years ago.",
      domain: "nature",
      emoji: "👁️",
    },
  },
  {
    type: "interaction",
    stage: "the-growth-spurt",
    text: "Before spectacles, if your eyesight faded after age 40, your career as a scholar, artist, or craftsman was basically over.",
    question: "When were glasses invented?",
    cousin: {
      title: "How Medicine Grew Up",
      hook: "For most of history, doctors did more harm than good — bloodletting, mercury potions, drilling holes in skulls. Modern medicine is barely 150 years old.",
      domain: "science",
      emoji: "💊",
    },
  },
  {
    type: "moment",
    stage: "the-growth-spurt",
    text: "Around 1286, in Italy. Spectacles doubled the productive life of every knowledge worker in Europe. The Renaissance might not have happened without them.",
    cousin: {
      title: "How Books Grew Up",
      hook: "Spectacles arrived just before the printing press. Together, they created an explosion of reading — more books were printed in 50 years than in the previous 1,000.",
      domain: "technology",
      emoji: "📚",
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
    text: "In the 1800s, glass went industrial. Factories replaced artisans. Machines could roll flat sheets of glass — and suddenly, buildings could have huge windows.",
    subtext: "The Crystal Palace in London (1851) was a building made almost entirely of glass. People thought it was impossible.",
    cousin: {
      title: "How Skyscrapers Grew Up",
      hook: "Without flat glass, there are no skyscrapers. The glass curtain wall made it possible to build towers of light instead of walls of stone.",
      domain: "technology",
      emoji: "🏙️",
    },
  },
  {
    type: "surprise",
    stage: "the-territorial-fight",
    text: "In 1959, Pilkington invented float glass — molten glass poured over liquid tin. Every window you've ever looked through was made this way.",
    cousin: {
      title: "How Machines Replaced Hands",
      hook: "The Industrial Revolution didn't just speed things up — it changed what 'making something' meant. A craftsman's lifetime of skill, encoded in iron and steam.",
      domain: "human-systems",
      emoji: "⚙️",
    },
  },
  {
    type: "moment",
    stage: "the-territorial-fight",
    text: "Glass fought with plastic, metal, and stone for centuries. Plastic almost won — it was cheaper, lighter, and didn't shatter.",
    subtext: "But glass had one trick that nothing else could match: it was perfectly transparent and didn't scratch.",
    cousin: {
      title: "How Plastic Grew Up",
      hook: "Plastic was invented to save elephants — billiard balls were made of ivory. Now there's more plastic in the ocean than fish will be by 2050.",
      domain: "technology",
      emoji: "♻️",
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
    text: "Fiber optic cables are hair-thin glass threads that carry the entire internet. Every message, video, and search you've ever made traveled through glass.",
    subtext: "Light bouncing inside glass — the same principle as a shiny ancient bead, but carrying the world's knowledge.",
    cousin: {
      title: "How the Internet Grew Up",
      hook: "The internet started as a Cold War backup plan — if bombs destroyed phone lines, data could route around the damage. Nobody imagined cat videos.",
      domain: "technology",
      emoji: "🌐",
    },
  },
  {
    type: "surprise",
    stage: "the-offspring",
    text: "Gorilla Glass on your phone is 'ion-stuffed' — potassium atoms are jammed into the surface, making it stronger than steel for its thickness.",
    cousin: {
      title: "How Phones Grew Up",
      hook: "The first mobile phone weighed 2 pounds and cost $4,000 in 1983. Now a phone in your pocket has more computing power than the computers that landed on the Moon.",
      domain: "technology",
      emoji: "📱",
    },
  },
  {
    type: "moment",
    stage: "the-offspring",
    text: "From a lightning-struck desert rock to the screen in your hand. Glass didn't just grow up — it helped humanity see, connect, and build the modern world.",
    subtext: "What will glass become next? Bendable screens? Buildings that generate electricity? Windows that become walls?",
    cousin: {
      title: "How Solar Energy Works",
      hook: "Solar panels are glass sandwiches — light passes through glass into silicon cells that turn photons into electricity. The sun delivers more energy in one hour than humanity uses in a year.",
      domain: "science",
      emoji: "☀️",
    },
  },

  // ═══ Final Connection Card ═══
  {
    type: "connection",
    connectionLeft: {
      title: "How Sand Became Glass",
      hook: "Before glass, there was sand — and sand is just tiny rocks, ground down by millions of years of rivers, glaciers, and waves.",
      domain: "nature",
      emoji: "🏖️",
      topicSlug: "sand",
    },
    connectionRight: {
      title: "How the Camera Grew Up",
      hook: "Glass lenses made cameras possible. Without Venetian crystal, we'd never have learned to freeze a moment in time.",
      domain: "technology",
      emoji: "📷",
      topicSlug: "camera",
    },
  },
];
