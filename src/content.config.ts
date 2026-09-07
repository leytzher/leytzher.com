import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.string(),
		authorInitials: z.string().default('LM'),
		pubDate: z.coerce.date(),
		readTime: z.string(),
		tags: z.array(z.string()),
		status: z.enum(['draft', 'published']).default('draft'),
	}),
});

export const collections = { articles };
