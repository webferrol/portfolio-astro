// Importa las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content'
// Define un `type` y un `schema` para cada colección
const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: z.string(),
        url: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		tags: z.array(z.string()),
	}),
})
// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
	posts: postsCollection,
}
