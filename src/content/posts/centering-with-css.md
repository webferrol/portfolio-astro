---
title: 'Centrado en CSS con position o display'
pubDate: 2024-01-21
description: 'Con las propiedades position o display tenemos valores para poder centrar elementos en css. Veamos'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
url: '/web-developer.webp'
author: 'Xurxo González Tenreiro'
tags: ['css']
---

# Centrado de elementos

__Tabla de contenidos__

1. [Con position](#position-absolute)
2. [Con flex](#display-flex)
3. [Con grid](#display-grid)

## position: absolute

Con las propiedades __left: 0__, __top: 0__, __right: 0__, __bottom: 0__ y __margin: auto__

```html
<div class="container">
  <div class="item-container"></div>
</div>
```

```css
.container {
  position: relative;
  background-color: red;
  width: 100px;
  height: 100px;
  .item-container {
    position: absolute;
    inset: 0; /*top, right, bottom, left*/
    margin: auto;
    width: 50%;
    height: 50%;
    background-color: teal;
  }
}
```

La propiedad de CSS __inset__ define el __bloque lógico__ que nos permite prescindir de __left: 0__, __top: 0__, __right: 0__, __bottom: 0__ y __margin: auto__.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="zYbzRro" data-user="webferrol-the-typescripter" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/webferrol-the-typescripter/pen/zYbzRro">
  Centering with position</a> by webFerrol (<a href="https://codepen.io/webferrol-the-typescripter">@webferrol-the-typescripter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## display: flex

Con flex también podemos centrar los elementos hijos

```css
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## display: grid

Con grid también podemos centrar los elementos hijos

```css
.grid-container {
  display: grid;
  place-items: center;
}
```