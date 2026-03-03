import { defineType, defineField } from "sanity";

export const card = defineType({
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Card Type",
      type: "string",
      options: {
        list: [
          { title: "Moment", value: "moment" },
          { title: "Surprise", value: "surprise" },
          { title: "Visual", value: "visual" },
          { title: "Stage Marker", value: "stage_marker" },
          { title: "Connection", value: "connection" },
          { title: "Interaction", value: "interaction" },
          { title: "Breathing", value: "breathing" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      description:
        "Max 25 words for Moment, 15 for Surprise, 12 per side for Connection. Null for Breathing/Visual.",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "stage",
      title: "Stage",
      type: "string",
      options: {
        list: [
          { title: "The Itch", value: "the-itch" },
          { title: "The Mutation", value: "the-mutation" },
          { title: "The DNA", value: "the-dna" },
          { title: "The Birth", value: "the-birth" },
          { title: "The Growth Spurt", value: "the-growth-spurt" },
          { title: "The Territorial Fight", value: "the-territorial-fight" },
          { title: "The Offspring", value: "the-offspring" },
        ],
      },
      description: "Which of the 7 stages this card belongs to",
    }),
    defineField({
      name: "audio",
      title: "Audio",
      type: "file",
      options: { accept: "audio/*" },
      description: "ElevenLabs TTS audio for voice mode",
    }),
    defineField({
      name: "connectionLeft",
      title: "Connection Left",
      type: "reference",
      to: [{ type: "connection" }],
      description: "Left cousin option (for connection cards)",
    }),
    defineField({
      name: "connectionRight",
      title: "Connection Right",
      type: "reference",
      to: [{ type: "connection" }],
      description: "Right cousin option (for connection cards)",
    }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      description: "For interaction cards — curious, not quiz-like",
    }),
    defineField({
      name: "answerCardIndex",
      title: "Answer Card Index",
      type: "number",
      description: "Index of the card that reveals the answer",
    }),
  ],
  preview: {
    select: { title: "text", type: "type", stage: "stage" },
    prepare({ title, type, stage }) {
      return {
        title: title ? (title.length > 50 ? title.slice(0, 50) + "..." : title) : `[${type}]`,
        subtitle: `${type}${stage ? ` — ${stage}` : ""}`,
      };
    },
  },
});
