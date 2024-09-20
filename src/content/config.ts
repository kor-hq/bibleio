import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    directory: z.optional(z.boolean()),
    section: z.optional(z.boolean()),
  }),
});

export const collections = {
  design: docs,
  api: docs,
  biblejson: docs,
};
