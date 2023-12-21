import { defineCollection, z } from 'astro:content';

const books = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		bookAuthor: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		coverImage: z.string().optional(),
		affiliateLink: z.string().optional(),
		youTubeLink: z.string().optional(),
		spotifyLink: z.string().optional(),
		spotifyEmbedURL: z.string().optional(),
		applePodcastsLink: z.string().optional(),
		applePodcastsEmbedURL: z.string().optional(),
		highlightColor: z.string().optional()
	}),
});

export const collections = { books };
