import { z } from 'astro:content'

const docSchema = z.object({
		title: z.string(),
		email: z.string(),
		pubDate: z.date(),
		description: z.string(),
		canonical: z.string().optional(),
		author: z.string(),
    url: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()),
	})

export default docSchema