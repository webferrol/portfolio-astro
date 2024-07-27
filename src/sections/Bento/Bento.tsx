import { useState } from "preact/hooks"
import { BentoItem } from "@sections/Bento/BentoItem.tsx"
import { HTMLSearchElement } from "@sections/Bento/HTMLSearchElement"

interface MyProps {
    title: string,
    posts: any[],
    tags: string[]
}

export default function Bento ({ title, posts, tags }: MyProps) {
    const [sortedPosts, setSortedPosts] = useState(posts)

    const handleChange = (event: Event) => {
       const { currentTarget } = event
       const isValue = currentTarget instanceof HTMLSelectElement

       if (!isValue || currentTarget === null) return

       if (!currentTarget.value) {
        setSortedPosts(posts)
        return
       }

       const ordered = posts.filter(post => post.data.tags.includes(currentTarget.value))
       setSortedPosts(ordered)
       
    }

    return (
        <>
            <HTMLSearchElement tags={tags} onSearch={handleChange} />
            <section
    aria-label={title}
    class="grid grid-cols-10 auto-rows-[20rem] gap-4 max-w-[1140px] mx-auto text-white">
            {
                sortedPosts.map(({ slug, data }) => (
                    <BentoItem 
                        key={slug} 
                        slug={slug}
                        url={data.url} 
                        title={data.title} 
                        description={data.description} 
                    />
                ))
            }
            </section>
        </>
    )
}
