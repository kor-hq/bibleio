import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { notionLoader } from "notion-astro-loader";
import {
	notionPageSchema,
	propertySchema,
	transformedPropertySchema,
} from "notion-astro-loader/schemas";

const hasNotionToken = !!import.meta.env.NOTION_TOKEN;

// Blog schemas

const notionBlogSchema = notionPageSchema({
	properties: z.object({
		slug: transformedPropertySchema.rich_text,
		Name: transformedPropertySchema.title,
		date: propertySchema.date.transform((property) =>
			property?.date?.start ? new Date(property.date.start) : undefined,
		),
		author: propertySchema.relation,
		image: propertySchema.files.transform((property) => {
			if (!property?.files || property.files.length === 0) {
				return undefined;
			}
			const file = property.files[0];
			return file.type === "file" ? file.file.url : file.external.url;
		}),
	}),
});

const fallbackBlogSchema = z.object({
	title: z.string(),
	slug: z.string(),
	date: z.date(),
	authors: z.array(z.string()).optional(),
	imageUrl: z.string().optional(),
});

// Handbook schemas

const notionHandbookSchema = notionPageSchema({
	properties: z.object({
		slug: transformedPropertySchema.rich_text,
		Name: transformedPropertySchema.title,
		category: propertySchema.select.optional(),
		lastUpdated: propertySchema.date.transform((property) =>
			property?.date?.start ? new Date(property.date.start) : undefined,
		),
		author: propertySchema.relation,
	}),
});

const fallbackHandbookSchema = z.object({
	slug: z.string(),
	title: z.string(),
	category: z.string().optional(),
	lastUpdated: z.date(),
	authors: z.array(z.string()).optional(),
});

// ------------------- Collection definitions -------------------

const blog = defineCollection({
	loader: hasNotionToken
		? notionLoader({
				auth: import.meta.env.NOTION_TOKEN,
				database_id: import.meta.env.NOTION_BLOG_DATABASE_ID,
			})
		: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/fallback/blog" }),
	schema: z.union([notionBlogSchema, fallbackBlogSchema]),
});

const handbook = defineCollection({
	loader: hasNotionToken
		? notionLoader({
				auth: import.meta.env.NOTION_TOKEN,
				database_id: import.meta.env.NOTION_HANDBOOK_DATABASE_ID,
			})
		: glob({
				pattern: "**/*.{md,mdx}",
				base: "./src/content/fallback/handbook",
			}),
	schema: z.union([notionHandbookSchema, fallbackHandbookSchema]),
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
