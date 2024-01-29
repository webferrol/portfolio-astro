---
title: 'Obtener el valor de un control de formulario en TypeScript'
pubDate: 2024-01-02
description: 'Para obtener en JavaScript los valores de un control de formulario : input de tipo texto. Podemos utilizar el método namedItem. ¿Cómo hacerlo de manera correcta en TypeScript?'
email: 'xurxo@webferrol.com'
author: 'Xurxo González Tenreiro'
url: 'https://imgs.search.brave.com/VSLIq9bXq8GhSpQgKCABOqDy14W1Gf20W-XL3PkrlgM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zb2Z0/d2FyZWNyYWZ0ZXJz/LmlvL19uZXh0L2lt/YWdlP3VybD1odHRw/czovL3N3Y3JhZnRl/cnMuZnJhMS5jZG4u/ZGlnaXRhbG9jZWFu/c3BhY2VzLmNvbS9D/YXRlZ29yaWVzL1RT/X2NhdGVnb3J5LnBu/ZyZ3PTE5MjAmcT03/NQ'
tags: ['typescript', 'namedItem', 'react']
---
# Get input value with TypeScript

## Tenemos varias estrategias. Destacamos:

### Estrategia 1

Menos correcto puesto que obtendríamos un error en **tiempo de ejecución** si por ejemplo no existiera el elemento con ese nombre.

#### Ejemplo de código en React

```ts
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const { elements } = event.currentTarget

  const input = elements.namedItem('name-input') as HTMLInputElement
}
```
### Estrategia 2

Mucho más correcto con un mínimo coste de proceso.

Tener en cuenta lo que devuelve __namedItem__:

  - Element
  - RadioNodeList
  - null


  <code><small>
    (method) HTMLFormControlsCollection.namedItem(name: string): Element | RadioNodeList | null
  </small></code>


#### Ejemplo de código en React

```ts
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('name-input')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input === null) return
}
```
  