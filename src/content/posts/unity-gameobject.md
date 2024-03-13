---
title: 'Los GameObject en Unity'
pubDate: 2024-03-06
description: 'Traremeos de forma esquemática y descriptiva la parte de los GameObject en Unity.'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
url: '/icons/brand-unity.png'
author: 'Xurxo González Tenreiro'
tags: ['unity']
---

# Los GameObject en Unity

>Los **GameObject** son  cualquier objeto que está en **scene**, desde una luz, un modelo, un *sprite*, personajes, etc.

Por ejemplo para generar un **GameOject** como un *sprite* puedes utilizar sobre el panel **Assets** el botón derecho del ratón y seleccionar <code>Create > Sprites > Square</code>

Un **GameObject** por sí solo no hace mucho. Es necesario darle funcionalidad. Hay dos opciones:

1. Mediante código
2. Con componentes. Un ejemplo sería el Physics 2D/*Box Collider 2D* que serviría entre muchas cosas para detectar colisiones.

>Los *GameObject* pueden tener una jerarquía, es decir, se pueden agrupar y algunos *GameObject* pueden ser hijos o padres de otros *GameObject*. Cuando un *GameObject* hijo es padre de otro *GameObject*, su comportamiento cambia. Las jerarquías nos pueden servir para agrupar elementos. Por ejemplo podemos crear un *GameOject empty* y agrupar otros **GameObjects** como si fueran capas para trabajar con ellos.

![GameObject empty](/blog/gameobject-empty.webp)

## Prefabs

Los **prefabs** son literalmente *GameObject prefabricados*, es decir, creas un *GameObject*, le añades todo el comportamiento y componentes que quieras, lo dejas listo para usarse y lo conviertes en un **prefab**. Cuando lo conviertes en un *prefab*, se puede utilizar como una plantilla y puede utilizarse en todas las escenas de tu proyecto.

Podemos convertir cualquier *GameObject* en **prefabs** y tener los *GameObject* con todas sus propiedades disponibles en otra escena. Para convertirlos en **prefab** primero voy a crear una nueva carpeta con el botón secundario del ratón en <code>Create > Folder</code>, voy a llamar a la nueva carpeta **/Prefabs** y lo único que he de hacer es entrar a esta carpeta, coger el *GameObject* que quiero crear como *prefab* y arrastrarlo dentro.

## Atajos teclado

- <kbd>Ctrl</kbd> + <kbd>D</kbd> Puedes duplicar tantos *GameObjects* como desees.
- <kbd>W</kbd> Seleccionando un *GameObject* del panel de **Hierarchy** puedes desplazarlos por la *Scene*