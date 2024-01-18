---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Componentización y desestructuración de propiedades'
pubDate: '2024/01/14'
description: 'Ejemplo de composición de componentes o compenntización y, de paso, un ejemplo de desestructuración de las props en React'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
url: '/javascript.webp'
author: 'Xurxo González Tenreiro'
tags: ['react']
---

# Componentización y desestructuración de props

Podemos desestructurar las props y pasárselo como atributo a un componente. Incluso se pasan las propiedades __children__

```js
export const Button = ({ handleClick, children, ...props }) => {
  return (
    <button onClick={handleClick} {...props} >
      {children}
    </button>
  )
}
```
Utilización del componente

```html
<Button handleClick={handleLike} className='btn'>
  Like 
</Button>
```