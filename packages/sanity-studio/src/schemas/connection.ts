import { defineType, defineField } from "sanity";

export const connection = defineType({
  name: "connection",
  title: "Connection",
  type: "document",
  fields: [
    defineField({
      name: "from",
      title: "From Topic",
      type: "reference",
      to: [{ type: "topicNode" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "to",
      title: "To Topic",
      type: "reference",
      to: [{ type: "topicNode" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Connection Type",
      type: "string",
      options: {
        list: [
          { title: "Cousin", value: "cousin" },
          { title: "Offspring", value: "offspring" },
          { title: "DNA Source", value: "dna_source" },
          { title: "Inspired By", value: "inspired_by" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hook",
      title: "Hook",
      type: "string",
      description: "One sentence for the connection card — earns the swipe. Max 20 words.",
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: "strength",
      title: "Strength",
      type: "number",
      description: "Visual thread weight in galaxy (1-5)",
      validation: (rule) => rule.required().min(1).max(5),
      initialValue: 3,
    }),
    defineField({
      name: "crossDomain",
      title: "Cross Domain",
      type: "boolean",
      description: "Does this connection cross subject boundaries?",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      fromTitle: "from.title",
      toTitle: "to.title",
      type: "type",
    },
    prepare({ fromTitle, toTitle, type }) {
      return {
        title: `${fromTitle || "?"} → ${toTitle || "?"}`,
        subtitle: type,
      };
    },
  },
});
