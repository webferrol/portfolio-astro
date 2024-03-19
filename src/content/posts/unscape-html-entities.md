---
title: 'Dejar de escapar (escape) entidades HTML'
pubDate: 2024-03-18
description: 'A veces al inyectar código HTML en nuestros scripts podemos tener problemas con las entidades HTML.'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
author: 'Xurxo González Tenreiro'
url: '/javascript.webp'
tags: ['javascript', 'typescript']
---

# Dejar de escapar (escape) entidades HTML

A veces al inyectar código <abbr title="Hipertext Marckup Language">HTML</abbr> en nuestros *scripts* podemos observar que las **entidades HTML** no son impresas en sus caracteres correspondientes.

Una solución es crear un _dicionario de datos_ para utilizar estas entidades como clave (propiedad) y obtener como valor su correspondiente caracter.

El problema lo podemos observar en las siguientes capturas:

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: .5rem">
<figure>
  <img src="/blog/unescape-problem.webp" alt="En la captura se observa el texto 'CSS &amp;#8211; Sintaxis">
  <figcaption>Problemas con las HTML entities</figcaption>
</figure>
<figure>
  <img src="/blog/unescape-problem-fixed.webp" alt="En la captura observamos la solución: CSS - Sintaxis">
  <figcaption>Lo que deseamos es esto</figcaption>
</figure>
</div>

## Descripción del código


En primer lugar creamos el *diccionario de datos*. Un objeto con la *HTML entity* como *propiedad* y el caracter que deseemos representar como *valor*:

```ts
interface keysValueStr {
  [key: string]: string; 
}

const UNESCAPE_HTML_OBJECT: keysValueStr = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&#39;': "'",
  '&quot;': '"',
  '&#8221;': '"',
  '&#8220;': '"',
  '&#8211;': '-',
}
```

Como nos va a llegar un **string** con todas las **entidades HTML** y las queremos sustituir con la **property** del objeto, nuestro **dicionario de datos** podemos automatizar todo el proceso para obtener un **string** con el carácter separador "|"

```ts
const properties = Object.getOwnPropertyNames(UNESCAPE_HTML_OBJECT).join('|')
```

Finalmente implementé la función que obtiene los caracteres a partir **html entities** que funcionaban como clave:

```ts
const unescapeHTML = (str: string) =>
  str.replace(
    new RegExp(properties, 'g'),
    tag =>
      (UNESCAPE_HTML_OBJECT[tag] || tag)
  );
```

## Todo junto
  
```ts
interface keysValueStr {
  [key: string]: string; 
}

const UNESCAPE_HTML_OBJECT: keysValueStr = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&#39;': "'",
  '&quot;': '"',
  '&#8221;': '"',
  '&#8220;': '"',
  '&#8211;': '-',
}

const properties = Object.getOwnPropertyNames(UNESCAPE_HTML_OBJECT).join('|')

const unescapeHTML = (str: string) =>
  str.replace(
    new RegExp(properties, 'g'),
    tag =>
      (UNESCAPE_HTML_OBJECT[tag] || tag)
  );
```

## Ejemplo de uso

```ts
const strHTML = 'CSS &#8211; Sintaxis'
console.log(unescapeHTML(strHTML)) // <- CSS - Sintaxis
```