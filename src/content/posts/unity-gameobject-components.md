---
title: 'Componentes de GameObjects'
pubDate: 2024-03-07
description: 'Los componentes son una forma de dar vida a nuestro GameOjects. Aquí hablaremos de algunos de ellos.'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
url: '/icons/brand-unity.png'
author: 'Xurxo González Tenreiro'
tags: ['unity']
---

# GameObject Components

## Collider 2D

>[Collider 2D components define the shape of a 2D GameObject for the purposes of physical collisions. A collider, which is invisible, doesn’t need to be the exact same shape as the GameObject’s mesh; a rough approximation is often more efficient, with no noticeable difference in gameplay.](https://docs.unity3d.com/Manual/Collider2D.html)

## Rigidbody

> [Rigidbodies enable physics-based behavior, such as reactions to gravity, mass, drag, and momentum. A Rigidbody 2D is a 2D component you can use to enable an object to act under the control of physics.](https://docs.unity3d.com/Manual/rigidbody2D.html)

Como indica activa leyes físicas como la gravedad. También es interasante como interactúa con el [Collider 2D](https://docs.unity3d.com/Manual/class-Rigidbody2D.html)

# Patrones de diseño en el nombramiento de carpetas

![Patrón de diseño en el nombramiento de directorios](/blog/files-pattern.webp)

Por ejemplo:

- _Scenes: El guión bajo es para que la carpeta se vea la primera el orden por considerarla como el directorio más importante.
- Sprites: puedes guardar <abbr title="Non Playable Character">npc's</abbr>. <abbr title="Non Playable Character">NPC</abbr> es un término que se ha popularizado en las redes sociales en los últimos años. Viene del mundo de los videojuegos, que a su vez lo tomaron de los clásicos juegos de rol de mesa. Se trata de las siglas en inglés de non playable character. Se puede traducir como PNJ, es decir, personaje no jugable.
