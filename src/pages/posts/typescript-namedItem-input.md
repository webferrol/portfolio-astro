---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Obtener el valor de un control de formulario en TypeScript'
pubDate: 2024-01-02
description: 'Para obtener en JavaScript los valores de un control de formulario : input de tipo texto. Podemos utilizar el método namedItem. ¿Cómo hacerlo de manera correcta en TypeScript?'
email: 'xurxo@webferrol.com'
author: 'Xurxo González Tenreiro'
tags: ['typescript', 'namedItem', 'instanceof', 'react']
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

  if (!isInput || input === null) return
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
  