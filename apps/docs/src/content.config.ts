import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const DocsSchema = z.object({
	title: z.string(),
	directory: z.optional(z.boolean()),
	section: z.optional(z.boolean()),
	order: z.optional(z.number()),
});

const design = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/design" }),
	schema: DocsSchema,
});
const api = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/api" }),
	schema: DocsSchema,
});
const biblejson = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/biblejson" }),
	schema: DocsSchema,
});

export const collections = {
	design: design,
	api: api,
	biblejson: biblejson,
};
