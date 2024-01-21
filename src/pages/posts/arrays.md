---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Arrays, vectores, listas o matrices'
pubDate: 2024/01/14
description: 'Dentro de los datos no primitivos o mutables están los arrays. Aquí consideramos aspectos de inicialización, recorrido y métodos más comunes utilizados.'
email: 'xurxo@webferrol.com'
ogImage: 'https://webferrol.netlify.app/javascript.png'
url: '/javascript.webp'
author: 'Xurxo González Tenreiro'
tags: ['arrays', 'no primitivos', 'mutables', 'javascript']
---

# Mutables o no primitivos

## Arrays, vectores, listas o matrices

Nos permiten guardar una colección de datos **primitivos** o **no primitivos**.

## Consideraciones

A la hora de hablar de este tipo de datos tenemos que tener claro dos conceptos:

1. **Índice**. La posición en que se encuentra cada uno de los datos del array. El primer elemento empieza por cero
2. **Elemento de un array**. El contenido propio de cada una de la posiciones del array

```js
const nombres = ['Xurxo', 'Jorge', 'George']
const indice = 2

console.log(`${nombres[indice]} se encuetra en la posición ${indice}`) // >> 'George se encuetra en la posición 2'
```

### Inicialización sin datos

```js
// Inicializar una lista, vector o array
const newArray = []
// Otra forma alternativa para inicializar un array a través de un instancia
const otherArray = new Array()
// Si quieres definir un array con un tamaño determinado
const arrayWithThreeItems = new Array(3)
```

### Inicialización con datos

```javascript
// Array con datos
const names = ['Xurxo', 'Irene', 'Manuel']
```
Si queremos ver formas más avanzadas podemos ver [Cómo inicializar Array con valores en JavaScript](https://midu.dev/inicializar-array-con-valores/)

### Propiedades sobre Arreglos (también llamados arrays o vectores)

1. __Propiedad__ que indica el tamaño de un __array__

```js
numeros.length // >> 3
```

### Formas tradicional de recorrer un array: ciclo for

```js
const nombres = ['Xurxo', 'David', 'Rebeca', 'Mónica']
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]) // >> 'Xurxo', 'David', 'Rebeca', 'Mónica'
}
console.log(`Hay ${nombres.length} personas.`) // >> 'Hay 4 personas.'
```

### Métodos tradicionales empleados sobre arrays

Partamos del siguiente ejemplo:

```js
const numeros = [0, -1 , 1]
```

#### Métodos sobre Arreglos (también llamados arrays o vectores)

1. __Método__ para añadir un elemento al __array__

```js
numeros.push(0) // >> [0, -1, 1, 0]
numeros.push(22) // >> [0, -1, 1, 0, 22]
```
2. __Método__ para eliminar el último elemento de un __array__

```js
const removedItem = numeros.pop() // >> [0, -1, 1, 0]
console.log(removedItem) // >> 22
```

3. __Método__ para concatenar elementos de un array con un separador

```js
numeros.join('❤️') // >> '0❤️-1❤️1❤️0'
```

__A CONTINUACIÓN VEREMOS MÉTODOS AVANZADOS EN LOS ARRAYS__

4. **array.prototype.reduce()**:  *función reductora* sobre cada elemento de un array, devolviendo como resultado *un único valor*. Podemos ver más informacion en [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Deseamos obtener la suma total de los elementos contenidos en el siguiente __array__:

```js
const numeros = [1, 2, 3, 4]
```

Con un __ciclo for__ y un __acumulador__ podríamos obtener la suma total de los números del array:

```js
let addedNumbers = 0
for (let i = 0; i < numeros.length; i++) {
  addedNumbers += numeros[i]
}

console.log(numeros.join('+'),'=',addedNumbers) // >> '1+2+3+4' '=' 10
```
Podríamos obtener el mismo resultado con un __método__ o __función reductora__:

```js
const addedNumbers = numeros.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}) // Nótese que en la variable accumulator no me hizo falta iniciarlo a cero

console.log(numeros.join('+'),'=',addedNumbers) // >> '1+2+3+4' '=' 10
```

Otro ejemplo. Para calcular cúantos número positivos, negativos o ceros que hay en un array podemos realizarlo utilizando un __lenguaje imperativo__:

```js
const numeros = [0, 0, -3, 4]
```

```js
let pos = 0
let neg = 0
let zer = 0

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) pos++
  else if (numeros[i] < 0) neg++
  else zer++
}

console.log('Positives:',pos, 'Negatives:', neg, 'Zeros:',zer) // >> 'Positives:' 1 'Negatives:' 1 'Zeros:' 2
```

O de __manera declarativa__: 

```js
// contadores: [positives, negatives, zeros]
const contadores = numeros.reduce((previousValue, currentValue) => {
  if (currentValue > 0) previousValue[0]++
  else if (currentValue < 0) previousValue[1]++
  else previousValue[2]++
  return previousValue
}, [0,0,0])

console.log('Positives:',contadores[0], 'Negatives:', contadores[1], 'Zeros:',contadores[2]) // >> 'Positives:' 1 'Negatives:' 1 'Zeros:' 2
```

5. **array.prototype.map**

Nos permite iterar sobre cada elemento de un array y devolver un nuevo array con las operaciones realizada:

```js
const edades = [18, 15, 13, 1]

const mayorMenorEdades = edades.map((value) => {
  return value >= 18 ? 'Mayor de edad: ' + value : 'Menor de edad: ' + value
})

console.log(mayorMenorEdades) // >> [ 'Mayor de edad: 18', 'Menor de edad: 15', 'Menor de edad: 13', 'Menor de edad: 1' ]
```