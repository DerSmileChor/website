import { z, defineCollection } from "astro:content";

const performanceCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),

      image: z.object({
        src: z.union([image(), z.string().url()]),
        alt: z.string(),
      }),

      gallery: z
        .array(
          z.object({
            src: z.union([image(), z.string().url()]),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .default([]),

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

      attribution: z
      .object({
        creator: z.string(),
        source: z.string(),
        url: z.string().url(),
      })
      .optional(),

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