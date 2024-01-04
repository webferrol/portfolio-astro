---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Clonación de objetos'
pubDate: 2024-01-02
description: 'Existen varios mecanismos para evitar la mutabilidad de los objetos o de los primitivos o no mutables. Hay varias soluciones como structuredClone. Veamos unas cuantas.'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
author: 'Xurxo González Tenreiro'
tags: ['mutables', 'objetos', 'arrays', 'javascript']
---


# Clonado de datos mutables o no primitivos

Ahora veremos varias formas de clonar objetos y arrays con problemas de mutación.

Partiremos del siguiente código:

```js
const p1 = {
  nombre: "Xurxo",
  domicilio: {
    numero: "1",
    calle: "Celso Emilio Ferreiro",
  },
  titulos: [
    {
      id: 1,
      titulo: 'Filología clásica'
    },
    {
      id: 2,
      titutlo: 'DAI'
    }
  ]
}
```

## Object.assign({}, object)

> [!WARNING]
> Problemas de anidamiento

```js
const p2 = Object.assign({},p1);
p2.nombre = 'David';
p2.domicilio.numero = "2";
p2.domicilio.calle = "Calle del Percebe";
console.log(p1, p2)
```

Salida

```
{
  nombre: 'Xurxo',
  domicilio: { numero: '2', calle: 'Calle del Percebe' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
} {
  nombre: 'David',
  domicilio: { numero: '2', calle: 'Calle del Percebe' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
}
```

## Destructuring

> [!WARNING]
> Problemas de anidamiento

```js
const p2 = {...p1};
p2.nombre = "David";
p2.domicilio.calle="Desconocido";
console.log(p1, p2)
```
Salida

```
{
  nombre: 'Xurxo',
  domicilio: { numero: '1', calle: 'Desconocido' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
} {
  nombre: 'David',
  domicilio: { numero: '1', calle: 'Desconocido' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
}
```

## JSON.parse

> [!NOTE]
> Resolvemos el anidamiento sin librería externa

```js
const p2 = JSON.parse(JSON.stringify(p1));
p2.nombre = "David";
p2.domicilio.numero = "2";
p2.domicilio.calle = "Desconocido";
console.log(p1, p2)
```

Salida

```
{
  nombre: 'Xurxo',
  domicilio: { numero: '1', calle: 'Celso Emilio Ferreiro' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
} {
  nombre: 'David',
  domicilio: { numero: '2', calle: 'Desconocido' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
}
```

## Utilizando una librería externa

> [!NOTE]
> Resolvemos el anidamiento con una librería como lodash

```js
import * as _ from 'lodash';
const p2 = _.cloneDeep(p1);
p2.nombre = 'David';
p2.domicilio.numero = "2";
p2.domicilio.calle = "Desconocido";
console.log(p1, p2)
```

Salida

```
{
  nombre: 'Xurxo',
  domicilio: { numero: '1', calle: 'Celso Emilio Ferreiro' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
} {
  nombre: 'David',
  domicilio: { numero: '2', calle: 'Desconocido' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
}
```

## structuredClone()
> [!NOTE]
> La forma más eficaz

```js
const p2 = structuredClone(p1)
p2.nombre = 'David';
p2.domicilio.numero = "2";
p2.domicilio.calle = "Desconocido";
console.log(p1, p2)
```

Salida

```
{
  nombre: 'Xurxo',
  domicilio: { numero: '1', calle: 'Celso Emilio Ferreiro' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
} {
  nombre: 'David',
  domicilio: { numero: '2', calle: 'Desconocido' },
  titulos: [
    { id: 1, titulo: 'Filología clásica' },
    { id: 2, titutlo: 'DAI' }
  ]
}
```