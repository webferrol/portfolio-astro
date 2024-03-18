---
title: 'Dejar de escapar entidades HTML'
pubDate: 2024-03-18
description: 'A veces al inyectar código HTML en nuestros scripts podemos tener problemas con las entidades HTML.'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
author: 'Xurxo González Tenreiro'
url: '/javascript.webp'
tags: ['javascript', 'typescript']
---

# Dejar de escapar entidades HTML

A veces al inyectar código <abbr title="Hipertext Marckup Language">HTML</abbr> en nuestros *scripts* podemos tener problemas con las **entidades HTML**.
Por tanto podemos sustituir en **JavaScript** o **TypeScript** esas *entidades* con sus correspondientes caracteres. Comparar ambas imágens:

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: .5rem">
<img src="/blog/unescape-problem.webp" alt="Problemas con las HTML entities">
<img src="/blog/unescape-problem-fixed.webp" alt="Solución final">
</div>

## Descripción del código

Podemos para agilizar nuestro trabajo crea un *diccionarios de datos*:

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

Para automatizar todo el proceso extraje las propiedades del objeto en un array y lo transformé en un **string** con el caracter separador "|"

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