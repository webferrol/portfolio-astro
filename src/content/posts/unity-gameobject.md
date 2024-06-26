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

Antes de nada echar un vistazo a la [fuente oficial](https://docs.unity3d.com/es/530/Manual/GameObjects.html)

>**Cada objeto en su juego es un GameObject**. No obstante, los GameObjects no hacen nada por sí mismos. Estos necesitan propiedades especiales antes de que puedan volverse un personaje, un ambiente, o un efecto especial. Pero cada uno de estos objetos hacen diferentes cosas.

Si cada objeto fuera un GameObject, cómo hacemos nosotros para diferenciar un power-up interactivo de un cuarto estático? Qué hace que estos GameObjects sean diferentes del uno al otro?

>La respuesta a esta pregunta es que **los GameObjects son contenedores**. Estos pueden guardar las diferentes piezas que son requeridas para hacer un personaje, una luz, un árbol, un sonido, o lo que sea que usted quisiera construir. Entonces para de verdad entender GameObjects, usted necesita entender estas piezas que son llamadas **Components**.

Por tanto los **GameObject** son  cualquier objeto que está en **scene**, desde una luz, un modelo, un *sprite*, personajes, etc.

Por ejemplo para generar un **GameOject** como un *sprite* puedes utilizar sobre el panel **Assets** el botón derecho del ratón y seleccionar <code>Create > Sprites > Square</code>

Un **GameObject** por sí solo no hace mucho. Es necesario darle funcionalidad. Hay dos opciones:

1. Mediante código
2. Con componentes. Un ejemplo sería el Physics 2D/*Box Collider 2D* que serviría entre muchas cosas para detectar colisiones.

>Los *GameObject* pueden tener una jerarquía, es decir, se pueden agrupar y algunos *GameObject* pueden ser hijos o padres de otros *GameObject*. Cuando un *GameObject* hijo es padre de otro *GameObject*, su comportamiento cambia. Las jerarquías nos pueden servir para agrupar elementos. Por ejemplo podemos crear un *GameOject empty* y agrupar otros **GameObjects** como si fueran capas para trabajar con ellos.

![GameObject empty](/blog/gameobject-empty.webp)

## GetComponent

**GetComponent** es un método en Unity que se utiliza para **obtener un componente** adjunto a un GameObject **en tiempo de ejecución**. En Unity, los *GameObjects* pueden tener uno o más componentes adjuntos, como *transformaciones*, *renderizadores*, *colisionadores*, *scripts*, etc.

La sintaxis básica de `GetComponent` es la siguiente:

```csharp
GetComponent<TipoDeComponente>();
```

Donde `TipoDeComponente` es el tipo de componente que deseas obtener. Por ejemplo, si tienes un script llamado `MiScript` adjunto a un GameObject y deseas obtener una referencia a ese script, puedes hacerlo de la siguiente manera:

```csharp
MiScript script = GetComponent<MiScript>();
```

Esto buscará y devolverá el primer componente `MiScript` adjunto al GameObject en el que se está ejecutando el script.

También puedes usar `GetComponent` con tipos de componentes integrados en Unity, como `Transform`, `Rigidbody`, `Collider`, `Renderer`, etc.

Por ejemplo, para obtener una referencia al componente `Transform` adjunto a un GameObject, puedes hacerlo así:

```csharp
Transform transform = GetComponent<Transform>();
```

`GetComponent` solo busca en el GameObject actual y en sus hijos directos para encontrar el componente especificado. Si el componente no está presente, devolverá `null`. Si hay múltiples componentes del mismo tipo adjuntos al GameObject, solo devolverá el primero que encuentre.


## Prefabs

Los **prefabs** son literalmente *GameObject prefabricados*, es decir, creas un *GameObject*, le añades todo el comportamiento y componentes que quieras, lo dejas listo para usarse y lo conviertes en un **prefab**. Cuando lo conviertes en un *prefab*, se puede utilizar como una plantilla y puede utilizarse en todas las escenas de tu proyecto.

Podemos convertir cualquier *GameObject* en **prefabs** y tener los *GameObject* con todas sus propiedades disponibles en otra escena. Para convertirlos en **prefab** primero voy a crear una nueva carpeta con el botón secundario del ratón en <code>Create > Folder</code>, voy a llamar a la nueva carpeta **/Prefabs** y lo único que he de hacer es entrar a esta carpeta, coger el *GameObject* que quiero crear como *prefab* y arrastrarlo dentro.

## Atajos teclado

- <kbd>Ctrl</kbd> + <kbd>D</kbd> Puedes duplicar tantos *GameObjects* como desees.
- <kbd>W</kbd> Seleccionando un *GameObject* del panel de **Hierarchy** puedes desplazarlos por la *Scene*