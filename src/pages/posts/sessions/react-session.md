---
layout: '../../../layouts/MarkdownLayout.astro'
title: 'React'
pubDate: 2024-01-02
description: 'Sesión explicativa de React.'
email: 'xurxo@webferrol.com'
author: 'Xurxo González Tenreiro'
image:
    url: '/react.svg'
    alt: 'React libray.'
tags: ['react', 'javascript']
---

<link rel="stylesheet" href="../../src/assets/markdown.css">

# React

## React. ¿Qué es?

### React es JavaScript

React es ante todo __JavaScript__ por tanto hay que tener nociones de un mínimo de [JavaScript imprescindible](#javaScript-imprescindible)

### React es una librería/biblioteca

Como indica su [página oficial](https://es.react.dev/) se trata de una __biblioteca__ o __librería__ para la creación de __interfaces__ des usuario _web_ y _nativas_.

No es más que una  __librería nativa de JavaScript__ que nos facilita el trabajo a la hora de __renderizar__ código, trabajar con __estados__ y mucho más.

## Librerías de React

Para trabajar con __reactjs__ son imprecindibles dos __dependencias__

```js

import React from 'react'
import ReactDOM from 'react-dom/client'


```

Estas serán colocadas en el __entry point__ de nuestro proyecto. Por ejemplo en __vitejs__ sería __main.jsx__

## Functional Component

En __react__ los __componentes__ son __funciones__ que retornan un __elemento react__ y no un __elemento del DOM__

Destacar que el nombre de estas funciones empiezan con la primera letra en mayúscula (__Pascal case__)

```jsx
/*
 * Function Component
 * @return {React.Element} - ¡No retorna un DOM.Element'
*/
function Button ({ text }) {
   return (
    <button>{text}</button>
  )
}
```
Por ejemplo, el siguiente código utiliza el componente Button para crear un botón con el texto "+ 1":

```jsx
const App = () => {
  return (
    <>
      <Button text="+ 1" />
    </>
  )
}
```

## Fragmento

Un __fragmento__ en React es un elemento React que __no tiene ningún nodo DOM asociado__. Los fragmentos se utilizan para agrupar __elementos React sin agregar nodos extra al DOM__, por ejemplo una etiqueta __div__.

Los fragmentos se pueden utilizar para varios propósitos, como:

- Agrupar elementos con texto.
- Renderizar una lista de fragmentos.
- Asignar múltiples elementos a una variable.
- Pasar fragmentos como props.

Ejemplo con sintaxis larga:

```jsx
import React from 'react'
const App = () => {
  return (
    <React.Fragement>
      <Button text="+ 1" />
    </React.Fragment>
  )
}
```
Ejemplo con sintaxis abreviada

```jsx
const App = () => {
  return (
    <>
      <Button text="+ 1" />
    </>
  )
}
```

## Impresión de expresiones (variables, constantes, literales, objetos, retorno de funciones ....)

Un __componente react__ siempre retorna una __etiqueta de marcado__. Pero estas marcas no son __JavaScript__

```jsx
  return (<h1>Hola</h1>)
```

Si deseamos escribir JavaScript puro entre estas marcas o sea utilizar __expresiones__, en __React__ se deben utilizar las llaves de apertura y cierre: __{expresión}__. Mira el siguiente __Functional Component__:

```jsx
function Saludar () {
  const nombre = 'Xurxo'
  return (
    <h1>Hola {nombre}</h1>
  )
}
```

## Props

Las __props__ son las _propiedades_ de un __componente__. Son datos que se pasan de un componente padre a un componente hijo. Por ejemplo, si tienes un componente Button que muestra un botón, puedes pasarle una __prop__ text para que el botón muestre ese texto:

```jsx
function Button(props) {
  return <button>{props.text}</button>
}
```

Debe considerarse además que al usar cualquier expresión _JavaScript_ dentro de _JSX_ debe envolverlos con _{}_, en este caso el objeto __props__, de otra forma _JSX_ lo considerará como texto plano. En el ejemplo anterior podemos lanzar el __componente__:

```jsx
<>
  {/* Pasamos un valor de tipo string */}
  <Button text='1' />
  {/* Pasamos un valor de tipo number */}
  <Button text={1} />
</>
```

## Responder eventos

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  // ¡Nota que onClick={handleClick} no tiene paréntesis al final! No llames a la función manejadora de eventos
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## Hooks

Los __hooks__ son una _API de React_ que nos permite __tener estado__, y otras características de React, en los componentes creados con una function.

Un __hook__ es gancho y, precisamente, lo que hace, es que te _permiten enganchar tus componentes funcionales a todas las características que ofrece React_.

### useStates

A menudo, querrás que tu __componente__ _recuerde_ alguna información y la muestre. 

El _hook_ __useState__ es utilizado para __crear variables de estado__, quiere decir que su valor es __dinámico__, que este _puede cambiar_ en el tiempo y eso requiere una re-renderización del componente donde se utiliza.

```js
const [count, setCount] = useState(0);
```
En el ejemplo de arriba el _hook_ __useState__:

1. Recibe un parámetro:
  - El valor inicial de nuestra variable de estado.
2. Devuelve un _array_ con dos variables:
  - En primer lugar tenemos la variable que contiene el valor.
  - La siguiente variable es una __función set__, requiere el nuevo valor del estado, y este modifica el valor de la variable que anteriormente mencionamos.

```jsx
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```
### useRef

__useRef__ es un Hook de React que te permite referenciar un valor que no es necesario para el renderizado.


```jsx
import { useRef } from 'react'

function EjemploRef ({ initialValue }) {
  const myRef = useRef(initialValue)

  return (
    <input
      ref={myRef} 
      type='text'
    />
  )
}
```