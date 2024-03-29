export function HTMLSearchElement ({ tags, onSearch } : {tags: string[], onSearch: (event: Event) => void}) {
    
  return (
          <label aria-label="Selecciona una categoría" role="search" className="block max-w-[1140px]  mx-auto mb-2">
              <select className="bg-bg dark:bg-bg-dark py-1 px-2 border-solid border-2 rounded" onChange={onSearch}>
                  <option value="">Todo</option>
                  {
                      tags.map(item => (
                          <option value={item} key={item}>{item}</option>
                      ))
                  }
              </select>
          </label>
  )
}