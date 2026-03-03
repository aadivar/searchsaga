import { defineType, defineField } from "sanity";

export const topicNode = defineType({
  name: "topicNode",
  title: "Topic Node",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "domain",
      title: "Domain",
      type: "string",
      options: {
        list: [
          { title: "Science", value: "science" },
          { title: "Technology", value: "technology" },
          { title: "Nature", value: "nature" },
          { title: "Math", value: "math" },
          { title: "Human Systems", value: "human-systems" },
          { title: "Art", value: "art" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "One-line hook for the topic",
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "reference", to: [{ type: "card" }] }],
      description: "Ordered deck of 15-25 cards",
    }),
    defineField({
      name: "stages",
      title: "Stage Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
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
            }),
            defineField({
              name: "title",
              title: "Stage Title",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "Stage Text",
              type: "text",
              description: "80-150 words per stage in kid voice",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "cousins",
      title: "Cousin Connections",
      type: "array",
      of: [{ type: "reference", to: [{ type: "connection" }] }],
      description: "Bidirectional links to other topics",
    }),
    defineField({
      name: "unconnectedDots",
      title: "Unconnected Dots",
      type: "array",
      of: [{ type: "string" }],
      description: "Future topic teasers",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Review", value: "review" },
          { title: "Safety Flagged", value: "safety-flagged" },
          { title: "Published", value: "published" },
        ],
      },
      initialValue: "draft",
    }),
    defineField({
      name: "safetyReport",
      title: "Safety Report",
      type: "object",
      fields: [
        defineField({
          name: "wordShield",
          title: "Word Shield",
          type: "object",
          fields: [
            defineField({ name: "passed", title: "Passed", type: "boolean" }),
            defineField({
              name: "flags",
              title: "Flags",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
        defineField({
          name: "contextShield",
          title: "Context Shield",
          type: "object",
          fields: [
            defineField({ name: "passed", title: "Passed", type: "boolean" }),
            defineField({
              name: "flags",
              title: "Flags",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
        defineField({ name: "reviewedAt", title: "Reviewed At", type: "datetime" }),
        defineField({ name: "reviewedBy", title: "Reviewed By", type: "string" }),
      ],
    }),
    defineField({
      name: "confidence",
      title: "Confidence Score",
      type: "number",
      description: "Editor quality score (0-1)",
      validation: (rule) => rule.min(0).max(1),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "domain", status: "status" },
    prepare({ title, subtitle, status }) {
      return {
        title,
        subtitle: `${subtitle} — ${status}`,
      };
    },
  },
});
