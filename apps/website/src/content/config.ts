import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { notionLoader } from "notion-astro-loader";

const blog = defineCollection({
	loader: notionLoader({
		auth: import.meta.env.NOTION_TOKEN,
		database_id: import.meta.env.NOTION_BLOG_DATABASE_ID,
	}),
});

const handbook = defineCollection({
	loader: notionLoader({
		auth: import.meta.env.NOTION_TOKEN,
		database_id: import.meta.env.NOTION_HANDBOOK_DATABASE_ID,
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

export const collections = {
	blog: blog,
	team: team,
	handbook: handbook,
};
