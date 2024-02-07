import { useState } from "preact/hooks"

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
            <div role="search" className="max-w-[1140px]  mx-auto mb-2">
                <select className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onChange={handleChange}>
                    <option>Todo</option>
                    {
                        tags.map(item => (
                            <option value={item} key={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <section
    aria-label={title}
    class="grid grid-cols-10 auto-rows-[20rem] gap-4 max-w-[1140px] mx-auto text-white">
            {
                sortedPosts.map(({ slug, data }, index) =>(
                    <BentoItem key={slug} slug={slug} url={data.url} title={data.title} description={data.description} />
                ))
            }
            </section>
        </>
    )
}


function BentoItem ({ slug, url, title, description }: {slug: string, url: string, title: string, description: string}) {
    return (
        <a href={`/posts/${slug}`} 
    className={`
    relative
    group
    overflow-hidden
    col-span-5
    border 
    border-sky-500/20 
    rounded
    backdrop-blur-md
    shadow-inner
    shadow-white/10`}>
    <article
        class="flex flex-col justify-end h-full">
        <div className="
                absolute
                let-0
                bottom-0 
                top-0
                z-20 
                w-full 
                h-full
                bg-gradient-to-b
                from-transparent 
                from-20% 
                via-black/80 
                to-black/90"
        ></div>

        <div
                class='absolute z-10 left-0 top-0 bottom-0 w-full h-full bg-blue-950 group-hover:scale-110 transition-scale duration-1000 ease-in-out bg-bento bg-cover bg-no-repeat bg-blend-luminosity opacity-90'
                style={url && `background-image: url(${url})`}
              ></div>

        <header className="z-20 p-5">
            <h2 className="font-semibold text-2xl text-balance">{title}</h2>
            {description && <p className="leading-loose text-pretty">{description}</p>}
        </header>
    </article>
</a>
    )
}