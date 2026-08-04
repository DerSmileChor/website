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

const aboutCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      entryId: z
        .string()
        .regex(
          /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
          "Use lowercase letters, numbers, and hyphens only.",
        ),

      draft: z.boolean().default(false),

      name: z.string().default(""),
      title: z.string().default(""),

      group: z.enum([
        "conductor",
        "pianists",
        "general",
      ]),

      biography: z.string().default(""),

      image: z
        .union([
          image(),
          z.string().url(),
        ])
        .optional(),

      imageAlt: z.string().default(""),

      publishDate: z
        .string()
        .transform((str) => new Date(str)),

      order: z.number().int().default(0),
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

const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

const roleSchema = z.object({
  experience: z.string(),
  role: z.string(),
  featured: z.boolean().default(false),
  lookingFor: z.array(z.string()),
  expectations: z.array(z.string()),
  button: z.object({
    text: z.string(),
    link: z.string(),
  }),
});

const pagesCollection = defineCollection({
  schema: ({ image }) =>
    z.discriminatedUnion("pageType", [
    z.object({
      pageType: z.literal("home"),
      title: z.string(),

      accent: z.string()
      .regex(/^#[0-9A-Fa-f]{6}$/),

      hero: z.object({
        heading: z.string(),
        description: z.string(),
        videoId: z.string(),
        videoTitle: z.string(),
      }),

      featuresIntro: z.object({
        headingBeforeAccent: z.string(),
        headingAccent: z.string(),
        headingAfterAccent: z.string(),
        description: z.string(),
      }),

      features: z.array(featureSchema),
    }),

    z.object({
      pageType: z.literal("join"),
      title: z.string(),

    heading: z.string(),

          accent: z.string()
      .regex(/^#[0-9A-Fa-f]{6}$/),

    seasonInfo: z.object({
      label: z.string(),
      content: z.string(),
    }),

      roles: z.array(roleSchema),

      codeOfConduct: z.object({
        heading: z.string(),
        description: z.string(),
        buttonText: z.string(),
        href: z.string(),
      }),
    }),
    z.object({
  pageType: z.literal("contact"),
  title: z.string(),

  hero: z.object({
    heading: z.string(),
    description: z.string(),
  }),

  accent: z.string()
  .regex(/^#[0-9A-Fa-f]{6}$/),

  contact: z.object({
    heading: z.string(),
    intro: z.string(),
    email: z.string().email(),
  }),

  social: z.object({
    heading: z.string(),

    instagram: z.object({
      label: z.string(),
      url: z.string().url(),
    }),

    facebook: z.object({
      label: z.string(),
      url: z.string().url(),
    }),
  }),

  form: z.object({
    namePlaceholder: z.string(),
    nameRequiredMessage: z.string(),
    emailPlaceholder: z.string(),
    emailRequiredMessage: z.string(),
    emailInvalidMessage: z.string(),
    messagePlaceholder: z.string(),
    messageRequiredMessage: z.string(),
    buttonText: z.string(),
  }),

  location: z.object({
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    mapButton: z.string(),
    mapUrl: z.string().url(),
  }),
}),

    z.object({
  pageType: z.literal("performance"),
  title: z.string(),

  accent: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/),

  heading: z.string(),
  description: z.string(),
}),
    z.object({
  pageType: z.literal("about"),

  title: z.string(),

  accent: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/),

  hero: z.object({
    heading: z.string(),
    description: z.string(),
  }),

  whoWeAre: z.object({
    heading: z.string(),
    content: z.string(),
  }),

peopleSections: z.object({
  generalHeading: z.string(),
  leadershipHeading: z.string(),
}),

  coreTeam: z.object({
    enabled: z.boolean().default(false),

    heading: z.string(),

    description: z.string().default(""),

    image: z
      .object({
        src: z.union([
          image(),
          z.string().url(),
        ]),
        alt: z.string(),
      })
      .optional(),
  }),

  whereWeHaveBeen: z.object({
    heading: z.string(),

    introduction: z.string(),

    initialVisible: z
      .number()
      .int()
      .min(1)
      .default(6),

    locations: z.array(z.string()),

    showMoreText: z.string(),
  }),

  whereWeComeFrom: z.object({
    heading: z.string(),

    content: z.string(),

    image: z
      .object({
        src: z.union([
          image(),
          z.string().url(),
        ]),

        alt: z.string(),

        attribution: z
          .object({
            enabled: z.boolean().default(false),
            creator: z.string().default(""),
            source: z.string().default(""),
            url: z.string().default(""),
          })
          .optional(),
      })
      .optional(),
  }),
}),

  ]),
});

export const collections = {
  performance: performanceCollection,
  about: aboutCollection,
  pages: pagesCollection
};