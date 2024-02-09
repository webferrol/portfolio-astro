import { getCollection } from 'astro:content'

const posts = await getCollection('posts')

// Filtrado
// const posts = await getCollection('posts', ({data}) => {
//   return data.tags.includes('arrays') // Ejemplo para buscar con palabras clave
// })

let sortedPosts = posts.sort((a, b) => {
  return  Number(b.data.pubDate) - Number(a.data.pubDate)
})

const tags = [...new Set(posts.map((post) => post.data.tags).flat())]

export {
  posts,
  sortedPosts,
  tags
}
