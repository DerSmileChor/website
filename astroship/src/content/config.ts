import { z, defineCollection } from "astro:content";

const performanceCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Astroship"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      name: z.string(),
      title: z.string(),
      avatar: z.object({
        src: z.union([image(), z.string().url()]),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
    }),
});

const locationCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      name: z.string(),
      title: z.string(),
      avatar: z.object({
        src: z.union([image(), z.string().url()]),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
    }),
});

export const collections = {
  performance: performanceCollection,
  team: teamCollection,
  location: locationCollection
};