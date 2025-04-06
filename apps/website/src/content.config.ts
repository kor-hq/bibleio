import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
	title: z.string(),
	draft: z.boolean().optional(),
	date: z.date(),
	authors: z.array(z.string()),
	imageUrl: z.string().optional(),
});

const handbookSchema = z.object({
	title: z.string(),
	draft: z.boolean().optional(),
	category: z.enum(["org", "design", "engineering", "community"]),
	lastUpdated: z.date(),
	authors: z.array(z.string()),
});

const teamSchema = z.object({
	name: z.string(),
	username: z.string(),
	pfp: z.string(),
	field: z.array(z.string()),
	description: z.string().optional(),
	links: z
		.array(
			z.object({
				name: z.string(),
				link: z.string(),
			}),
		)
		.optional(),
});

// ------------------- Collection definitions -------------------

const blog = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/blog",
	}),
	schema: blogSchema,
});

const handbook = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/handbook",
	}),
	schema: handbookSchema,
});

const team = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/team" }),
	schema: teamSchema,
});

export const collections = {
	blog: blog,
	team: team,
	handbook: handbook,
};
