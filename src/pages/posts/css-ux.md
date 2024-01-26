---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Usabilidad en CSS'
pubDate: 2024/01/26
description: 'Ulizaremos CSS de forma efectiva para mejorar la experiencia de usuario en nuestra aplicaciones.'
email: 'xurxo@webferrol.com'
author: 'Xurxo González Tenreiro'
tags: ['css', 'usabilidad']
---

# Usabilidad en CSS

Por un lado tenemos a los desarrolladores de **user agents** o **navegadores** que van creando sus productos de acuerdo a sus necesidades, experimentando nuevas técnicas conforme las tecnologías avanzan la forma en qué se *presentan los datos*. Por otro lado existen una enorme cantidad de dispositivos con diversos formatos que pueden mostrarnos un mismo diseño de diferentes maneras.

La **usabilidad en CSS** se refiere a la práctica de utilizar CSS de manera efectiva para mejorar la **experiencia del usuario (ux)** en un sitio web o aplicación. Aunque CSS es principalmente un lenguaje de estilo que se utiliza para controlar la presentación y el diseño de los elementos HTML en una página web, también desempeña un papel importante en la usabilidad.

Aquí hay algunas consideraciones importantes sobre usabilidad en CSS:

1. **Legibilidad y Contraste:** Es crucial elegir combinaciones de colores y tamaños de texto que sean fáciles de leer para los usuarios. Asegúrate de que haya suficiente contraste entre el texto y el fondo para que sea legible.
2. **Diseño Responsivo:** Utiliza CSS para crear un diseño que se adapte y se vea bien en una variedad de dispositivos y tamaños de pantalla. [grid](https://developer.mozilla.org/es/docs/Web/CSS/grid), [flex](https://developer.mozilla.org/es/docs/Web/CSS/flex) junto a las *media queries* son un ejemplo de técnicas responsivas.
3. **Accesibilidad:** Aplica prácticas de accesibilidad, **Web Accessibility Initiative (WAI)**, en tu CSS para garantizar que tu sitio web sea usable para todas las personas, incluidas aquellas con discapacidades. Esto implica utilizar etiquetas semánticas adecuadas, proporcionar alternativas textuales para contenido no textual (como imágenes) y hacer que el sitio sea navegable y utilizable mediante el teclado. Puedes ver más información en [Directrices de Accesibilidad para el Contenido Web](https://es.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines).
4. **Tiempo de Carga:** Optimiza tu CSS para que los tiempos de carga sean rápidos. Esto implica reducir el tamaño del archivo CSS mediante la eliminación de código no utilizado, la concatenación de archivos CSS y la minificación del código.
5. **Animaciones y Transiciones:** Utiliza animaciones y transiciones CSS con moderación para mejorar la usabilidad y la interactividad del sitio web. Las animaciones pueden ayudar a guiar la atención del usuario, proporcionar retroalimentación sobre las acciones realizadas y mejorar la experiencia de navegación en general.
6. **Consistencia:** Mantén una apariencia y sensación consistentes en todo el sitio web mediante el uso de clases y estilos CSS coherentes. Esto ayuda a los usuarios a familiarizarse con la interfaz y a navegar por el sitio de manera intuitiva.
7. **Pruebas y Retroalimentación:** Realiza pruebas de usabilidad en tu sitio web para identificar posibles problemas y áreas de mejora. Aprovecha la retroalimentación de los usuarios para ajustar y mejorar continuamente la experiencia de usuario mediante ajustes en tu CSS.

## CSS reset

Un **reset CSS** es un conjunto de reglas CSS diseñadas para eliminar las diferencias predeterminadas en la representación de elementos HTML entre diferentes navegadores.

```css
* {
  box-sizing: border-box;
  /*The next property fix problems of overflow with flex items in flex or grid*/
  min-width: 0; 
}

html {
  font-family: 'Onest', system-ui, sans-serif;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100dvh;
}

h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong,
mark {
  font-family: 'Onest', system-ui, sans-serif;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

## scroll-behavior: smooth

En el **reset** del apartado anterior aparecía la utilización de esta propiedad.
La preferencia **prefers-reduced-motion: reduce** es una característica de accesibilidad en CSS que permite a los usuarios indicar que prefieren o necesitan reducir la cantidad de animaciones o movimientos en una página web.

La opción de **smooth** suaviza el deslizamiento de navegación en una página lo que hace más agradable y mejora la experiencia de usuario.

Sin embargo, algunas personas pueden experimentar mareos, náuseas o dificultades para concentrarse debido a movimientos o animaciones excesivos en la pantalla, por lo que esta preferencia les permite reducir o eliminar estos elementos animados.

```css
html {
  font-family: 'Onest', system-ui, sans-serif;
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

## CSS en formularios

### Consejos

1. Proporcione un título al formulario
2. Instrucciones breves y comprensibles.
3. No utilice preguntas complejas
4. Redacte siempre las opciones de forma afirmativa. 

```
✔ Deseo recibir el boletín
```

```
⛔ No deseo recibir el boletín
```

5. Organice los campos en una sola columna.
6. Los formularios de dos columnas tiene probabilidades de que los usuarios pasen por alto algunos campos.
7. Agrupe, si es posible, los campos obligatorios al comienzo del formulario.
8. Proporcione un diseño ordenado, alineando verticalmente todas las etiquetas y todos los campos entre sí.
9. Situe las respuestas de los campos radio buttons y check box después de los mismos. (facilitamos así la alineación vertical de todos los controles)
10. Utilice etiquestas estándar para agrupar campos:
    - OPTGROUP
    - FIELDSET

### Reseteo de los formularios

1. Los padding que introduzcamos dentro de un elemento de formularios input afectar a nuestro diseño. Soluciones:
    a. Tener en cuenta estos márgenes en el tamaño total definido
    b. Utilizar la propiedad box-sizing
2. Los controles de nuestro formulario tiene un borde por defecto. Solución:
    a. En el reseteo quitar dichos bordes
3. Elementos input. Darles una altura debido a la variedad que presentan los distintos tipos o su presentación en los diferentes navegadores.
    a. Ejemplo: input{min-height: 2.5em}
4. Limpiar la pseudo clase o pseudo elemento :focus
5. Pseudoelemento ::placeholder para dar estilo
6. :invalid, :valid, :required. Es posible estas pseudo-clases o pseudo-elementos de CSS para dar estilos a un elemento form o input...
7. Trabajar en modo Responsive Web Design
a. Utilizar la meta viewport
8. Textarea. El problema que tiene a parte de los bordes es que puede ser redimensionado, lo que en ocasiones puede desmontarnos la web. Solución:
9. Propiedad: resize.
    La propiedad resize de CSS permite controlar la capacidad de cambio de tamaño de un elemento. Se aplica también a los elementos que utilicen la propiedad overflow.
    resize: none | both | horizontal | vertical

