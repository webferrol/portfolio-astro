---
title: 'Dejar de escapar (escape) entidades HTML'
pubDate: 2024-03-18
description: 'A veces al inyectar código HTML en nuestros scripts podemos tener problemas con las entidades HTML.'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
canonical: 'https://webferrol.netlify.app/posts/unscape-html-entities/'
author: 'Xurxo González Tenreiro'
url: '/javascript.webp'
tags: ['javascript', 'typescript']
---

# Dejar de escapar (escape) entidades HTML

A veces al inyectar código <abbr title="Hipertext Marckup Language">HTML</abbr> con **secuencias de escape** en nuestros scripts, generalmente **entidades HTML**, podemos observar que dichas *entidades* no son impresas en sus caracteres correspondientes.

Una solución es crear un **dicionario de datos** para utilizar estas entidades como clave (**property**) y obtener como valor su correspondiente carácter.

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


En primer lugar creamos el **diccionario de datos**. Un *objeto* con las **HTML entities** como **propiedad** y el carácter que deseemos representar como **valor**:

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

Cuando nos llegue el código HTML en formato *String* y éste contenga alguna o algunas **entidades HTML** podremos utilizar nuestro **diccionario de datos** (el objeto creado anteriormente) valiéndonos de sus claves (**property**)  para obtener el *valor* o carácter deseado.

A continuación mostramos el código para generar un *String* de las claves encontradas  del objeto. Cada una de estas claves separadas por el carácter "|":

```ts
const properties = Object.getOwnPropertyNames(UNESCAPE_HTML_OBJECT).join('|')
```

Finalmente implementé la función que obtiene los caracteres finales a partir de las **HTML entities** que hacen de clave:

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