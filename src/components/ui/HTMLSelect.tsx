import { useRef } from "preact/hooks"

export default function HTMLSearchElement ({ tags } : {tags: string[] }) {
    const formRef = useRef<HTMLFormElement>(null)

    const handleChange = (event: Event) => {

       const { current } = formRef
       const isForm = current instanceof HTMLFormElement
       if (!isForm || current === null) return 

       const { currentTarget } = event

       const isValue = currentTarget instanceof HTMLSelectElement

       if (!isValue || currentTarget === null) return

       if (currentTarget.value.length) {
           current.setAttribute('action', `/tags/${currentTarget.value}`)
       } else {
        current.setAttribute('action', '/blog')
       }

       current.submit()



    }

    return (
            <form ref={formRef} action='/tags' role="search" className="max-w-[1140px]  mx-auto mb-2" method="post">
                <select
                    placeholder="Categorías"
                    onChange={handleChange} 
                    className="bg-bg dark:bg-bg-dark py-1 px-2 border-solid border-2 rounded">
                    <option>Categoría</option>
                    <option value="">Todo</option>
                    {
                        tags.map(item => (
                            <option value={item} key={item}>{item}</option>
                        ))
                    }
                </select>
            </form>
    )
  }
