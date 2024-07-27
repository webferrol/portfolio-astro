function BentoItem (
  { slug, url, title, description }: 
  { slug: string, url: string, title: string, description: string}) {
  return (
      <a href={`/posts/${slug}`} 
  className={`
  relative
  group
  overflow-hidden
  col-span-10
  md:col-span-5
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

export {
  BentoItem
}