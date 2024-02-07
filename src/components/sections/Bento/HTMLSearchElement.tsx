export function HTMLSearchElement ({ tags, onSearch } : {tags: string[], onSearch: (event: Event) => void}) {
    
  return (
          <div role="search" className="max-w-[1140px]  mx-auto mb-2">
              <select className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onChange={onSearch}>
                  <option value="">Todo</option>
                  {
                      tags.map(item => (
                          <option value={item} key={item}>{item}</option>
                      ))
                  }
              </select>
          </div>
  )
}