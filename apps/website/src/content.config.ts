import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { notionLoader } from "notion-astro-loader";

const hasNotionToken = !!import.meta.env.NOTION_TOKEN;

const blog = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/blog",
	}),
	schema: z.object({
		title: z.string(),
	}),
});

const handbook = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/handbook",
	}),
	schema: z.object({
		title: z.string(),
	}),
});

const team = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/team" }),
	schema: z.object({
		name: z.string(),
		notionUserId: z.string().optional(), // if you write any content
		pfp: z.string(),
		field: z.array(z.string()),
		description: z.string().optional(),
		links: z
			.array(
				z.object({
					name: z.enum([
						"website",
						"github",
						"linkedin",
						"mastodon",
						"x",
						"bluesky",
						"instagram",
					]),
					link: z.string(),
				}),
			)
			.optional(),
	}),
});

export const collections = { blog, handbook, team };
