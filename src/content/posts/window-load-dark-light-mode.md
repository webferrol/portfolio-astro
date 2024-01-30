---
title: 'Evitar parpadeo al cargar modo oscuro o claro'
pubDate: 2024-01-30
description: 'El parpadeo del tema oscouro o claro por defecto es molesto al cargarse la página. Aquí vemos como evitarlo.'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
url: '/javascript.webp'
author: 'Xurxo González Tenreiro'
tags: ['javascript']
---

# localStorage y document.documentElement

<iframe width="560" height="315" src="https://www.youtube.com/embed/W3DL-nRq9WU?si=ECYXGH1sfej6krW2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Ejemplo en funcionamiento](https://youtu.be/W3DL-nRq9WU)

En el **modo dark o light mode** del navegador a parte e cargarse la configuración del sistema operativo podemos permitir en **JavaScript** que el usuario seleccione su *modo* preferido.

Por un instantante al renderizarse la página se carga la configuración del estilo puesto por defecto, con lo que podemos tener un parpadeo indeseable de dicha configuración inicial.

Al poner el **script** en el **header** se lee la información almacenada en el fichero del store antes de cargar el resto de la página con lo cual garantizamos la forma correcta de carga.

```html
<header>
  <script>
    const theme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.add(theme)
  </script>
</header>
```