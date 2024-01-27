// Importa las utilidades de `astro:content`
import docSchema from '../schemas/docSchema'
import { defineCollection } from 'astro:content'
// Define un `type` y un `schema` para cada colección
const docsCollection = defineCollection({
	type: 'content',
	schema: docSchema
})
// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
	posts: docsCollection
}