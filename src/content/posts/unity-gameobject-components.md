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

## Canvas

El **canvas es el elemento de Unity que controla la interfaz**. No deja de ser un *GameObject* como otro cualquiera, con la diferencia de que tiene un componente llamado canvas y sus hijos se consideran automáticamente todos elementos de la interfaz.

### Propiedades

#### Render mode

[Fuente: Aprende Unity: Primeros juegos](https://www.linkedin.com/learning/aprende-unity-primeros-juegos/el-canvas-de-unity?resume=false&u=187489433)

1. Screen Space - Overlay

Este modo hace que todos los elementos de la interfaz siempre se muestren por encima de cualquier otro elemento que haya en la escena, incluido cualquier otro "asset" como, por ejemplo, el propio nivel.

2. Screen Space - Camera

Este modo hace que la interfaz se renderice a través de una cámara. Como ves, al seleccionarlo, te sale un aviso y te pide que especifiques una cámara.

![Screen Space warning](/blog/render-mode.webp)

En escena podemos tener varias cámaras, pero por ahora solo tenemos la cámara por defecto, es decir, la "main camera". Para poder especificarlo en el canvas, es tan sencillo como clicar sobre ella y arrastrarla directamente a la casilla donde pone Render camera. Una de las ventajas de Unity es que siempre te pone avisos cuando te falta algo o algo está fallando. Y otra ventaja es que a veces el problema se soluciona de forma tan simple como arrastrar un objeto a una casilla. Al utilizar la herramienta de Tilemap, es posible que la interfaz quede por detrás del mapa utilizando el modo de Screen Space - Camera. Para solucionar eso, es tan simple como cambiar el Order in layer, este parámetro de aquí, por un número más alto.

3. World Space

Este modo sirve para juegos que necesitan tener la interfaz integrada en el propio juego como si fuera cualquier otro **GameObject**. Por ejemplo, para menús que están dentro de objetos del propio juego o interfaces que aparecen en sitios concretos del juego. Con este modo, la interfaz se transforma en un 'GameObject' y sus elementos aceptan coordenadas 3D para ser colocadas en la escena y en el mundo como tú quieras.

## Collider 2D

>[Collider 2D components define the shape of a 2D GameObject for the purposes of physical collisions. A collider, which is invisible, doesn’t need to be the exact same shape as the GameObject’s mesh; a rough approximation is often more efficient, with no noticeable difference in gameplay.](https://docs.unity3d.com/Manual/Collider2D.html)

## Rigidbody

> [Rigidbodies enable physics-based behavior, such as reactions to gravity, mass, drag, and momentum. A Rigidbody 2D is a 2D component you can use to enable an object to act under the control of physics.](https://docs.unity3d.com/Manual/rigidbody2D.html)

Como indica activa leyes físicas como la gravedad. También es interasante como interactúa con el [Collider 2D](https://docs.unity3d.com/Manual/class-Rigidbody2D.html)
