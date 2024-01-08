---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Método toSorted()'
pubDate: 2024-01-02
description: 'El método sort() de JavaScript nos sirve para ordenar elementos de un array pero no evita la mutabilidad. Para ello toSorted().'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
author: 'Xurxo González Tenreiro'
tags: ['mutabilidad', 'métodos', 'arrays', 'javascript']
---
>[!NOTE] 
> toSorted

```js
const randomNumbers = Array(10).fill(0).map(item => Math.trunc(Math.random()*10) + 1) // Array es una forma más concisa en vez de new Array

const sortedNumbers = randomNumbers.toSorted((a,b) => a-b)
console.log(randomNumbers) // <- [ 1, 6, 6, 3, 3, 10, 5, 1, 9, 10 ]
console.log(sortedNumbers) // <- [ 1, 1, 3, 3, 5, 6, 6, 9, 10, 10 ]
```

>[!WARNING]
> El siguiente código causa mutación

```js
const randomNumbers = Array(10).fill(0).map(item => Math.trunc(Math.random()*10) + 1)

console.log(randomNumbers) // <- [ 1, 6, 6, 3, 3, 10, 5, 1, 9, 10 ]

const sortedNumbers = randomNumbers.sort((a,b) => a-b)

console.log(randomNumbers) // <- [ 1, 1, 3, 3, 5, 6, 6, 9, 10, 10 ]
console.log(sortedNumbers) // <- [ 1, 1, 3, 3, 5, 6, 6, 9, 10, 10 ]
```