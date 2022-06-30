# Introducción a HTML

## Ejercicios realizados en la clase 2


### 06 - Temario

`index.html` debe contener:

- un título `h1` que diga lo siguiente: `Curso de desarrollo Frontend`
- un párrafo `p` con la introducción o resumen del artículo.
- una lista ordenada, donde cada ítem es un link con el nombre de cada sección, y que al clickearlo te lleve a la sección correspondiente.
- 5 secciones con título `h2` que sean las siguientes: 
  - `Introducción a HTML`.
  - `Introducción a CSS`.
  - `Introducción a Sass`.
  - `Introducción a JavaScript`.
  - `Introducción a React`.
- debajo de cada título de sección: 
  - 10 párrafos `p` con `lorem ipsum`.
  - un enlace que diga `Volver arriba` y que al clickearlo te lleve al título `h1`.

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/temario.html)

---

### 07 - Portfolio

Crear las siguientes páginas con los siguientes elementos:

#### `index.html`
- un título `h1` con tu nombre.
- un párrafo `p` de introducción.
- una lista desordenada de links que te lleven a las demás páginas (`Conocimientos`, `Experiencia`, `Contacto`).

#### `conocimientos.html`
- un título `h1` que diga `Conocimientos`.
- una lista desordenada de habilidades
- un link que diga `Volver atrás` y que te lleve a `index.html`.

#### `experiencia.html`
- un título `h1` que diga `Experiencia`.
- Agregar 3 veces:
  - un título `h2` con el nombre de una empresa (cualquiera)
  - un elemento `p` con el período de empleo (por ejemplo, `2018-2020`)
  - un elemento `p` con el puesto de trabajo (por ejemplo, `Desarrolladora Frontend`)
- un link que diga `Volver atrás` y que te lleve a `index.html`.

#### `contacto.html`
- un título `h1` que diga `Contacto`.
- un párrafo `p` que diga `Podés escribirme a ada.lovelace@gmail.com` (o cualquier otro mail).
- un párrafo `p` con un número de teléfono (cualquiera)
- un link que lleve a la página de Linkedin (si tenés una cuenta creada, podés hacer que el link sea a tu perfil).
- un link que diga `Volver atrás` y que te lleve a `index.html`.

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/portfolio.html)

---

### 08 - Blog con Imágenes

`index.html` debe contener:

- una imagen
- un título `h1` con el nombre del artículo (por ejemplo **El sistema solar**).
- un párrafo `p` con la introducción o resumen del artículo.
- al menos 2 secciones, cada sección debe contener: 
  - un título `h2` (por ejemplo, **El sol** o **Planetas**)
  - al menos 3 párrafos `p`
  - una imagen entre párrafos (entre el 1er y 2do párrafo, o entre el 2do y el 3ro)
  
Las imágenes tienen que estar relacionadas. Usar imágenes con links externos (absolutos).  

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/blog_con_imagenes.html)

---

### 09 - Preview

Usando [IMDb](https://www.imdb.com/) como referencia, `index.html` debe contener:

- un título `h1` con el nombre de una película.
- una imagen con el poster de la película.
- un `h2` que diga: `Elenco`
- un lista desordenada con al menos 5 nombres del elenco. Los nombres deben ser links a la página de IMDb correspondiente (por ejemplo, [Anne Hathaway](https://www.imdb.com/name/nm0004266/?ref_=nv_sr_srsg_0))
- un título `h3` que diga: `Sinopsis`
- un párrafo `p` con la sinopsis de la película
- un `h3` que diga: `Géneros`
- un lista desordenada con al menos 3 géneros de la película. Los nombres deben ser links a la página de IMDb correspondiente de la lista de películas de dicho género (por ejemplo, [Thriller](https://www.imdb.com/search/title/?genres=thriller&explore=title_type,genres&ref_=tt_ov_inf))

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/preview.html)

---

### 10 - Comentarios

`index.html` debe contener:

- un título `h1` que diga: `Un artículo increíble`.
- un párrafo `p` con `lorem ipsum`.
- un título `h2` que diga `Comentarios`.
- 5 comentarios, con lo siguiente:
  - un título `h3` con el handle de la usuario (por ejemplo **@adalovelace**).
  - un `span` que diga: `Publicado hace 14 minutos` (cambiar el tiempo).
  - un párrafo `p` con `lorem ipsum`.

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/comentarios.html)

---

### 11 - Productos

`index.html` debe contener:

- un título `h1` que diga: `Mi tienda`.
- un título `h2` que diga: `Productos más comprados`.
- 5 productos, que contengan:
  - una imagen del producto (usar rutas absolutas).
  - un título `h3` con el nombre del producto.
  - al menos 3 elementos en línea `span` con distintas variaciones de producto. Por ejemplo, colores, tamaños, modelo, etc. Si se elige color, sería un `span` para cada color (rojo, verde, azul, etc). 
  - un párrafo `p` con el precio del producto.
  - un párrafo con un `lorem impsum`  corto

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/productos.html)

---

### 12 - Películas

Usando [IMDb](https://www.imdb.com/) como referencia, crear los siguientes archivos:

#### `index.html`

- un título `h1` que diga: `Bienvenida a Mis Películas`.
- una lista desordenada con links a las demás páginas (`Populares`, `Top 3`, `Con más recaudación`).

#### `populares.html`
- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Películas populares`.
- un párrafo `p` que diga: `Las películas más exitosas en los últimos tiempos`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

#### `top-3.html`
- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Top 3`.
- un párrafo `p` que diga: `Las películas más exitosas de todos los tiempos`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

#### `mas-recaudacion.html`

- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Películas con más recaudación`.
- un párrafo `p` que diga: `Las películas que más entradas vendieron en los últimos 50 años`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

(+) Cada película debe tener:

- una imagen del poster de la película (usar rutas absolutas).
- un título `h3` con el nombre de la película.
- un párrafo `p` con la fecha de estreno.

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/peliculas.html)

---

### 13 - Canciones

#### `index.html`

- un título `h1` que diga: `Mis canciones preferidas`.
- 3 canciones, que consisten en:
  - la imagen del poster del álbum de la canción (usar rutas relativas).
  - un título `h2` con el nombre de la canción
  - un elemento `p` con el nombre de la banda / artista.
  - los 3 elementos anteriores (imagen, título, y banda/artista) deben estar anidados dentro de un único link que lleve a la página de la canción.
  
#### `cancion.html`

- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` con el nombre de la canción
- un elemento en línea `span` con el nombre de la banda / artista.
- un elemento en línea `span` con el nombre del álbum.
- un elemento en línea `span` con el año de publicación del álbum.
- una título `h2` que diga: `Letra`
- párrafos `p` para la letra de la canción.

El archivo no tiene que llamarse `cancion.html` sino el nombre de la canción, por ejemplo: `africa.html`

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/canciones.html)

---

### 14 - Artículo completo

A partir de lo visto ejercicios anteriores, crear en un `index.html` un artículo de blog que tenga:

- Una lista de contenido que lleve a cada sección
- Al menos 3 secciones
- Al menos 3 imágenes
- Una lista desordenada
- Una lista ordenada
- Una sección de comentarios, con al menos 3 comentarios

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/articulo-completo.html)

---

# Introducción a CSS

## Ejercicios de la clase 2

### 01 - Presentación

`index.html` debe tener:

- un título `h1` con un tamaño de letra de `120px` y una tipografía de Google Fonts (por ejemplo: `Montserrat`) y un grosor de letra de 800 o 900. El título debe decir: `¡Hola, soy Ada!` (con tu nombre).
- un párrafo con un tamaño de letra de `48px` y una tipografía de Google Fonts (por ejemplo: `Montserrat`) y un grosor de letra de 600 o 700. El párrafo debe tener una breve descripción tuya, por ejemplo: `Primera programadora, matemática en mi tiempo libre y guitarrista`.
- Tanto tu nombre como las palabras claves de tu descripción (por ejemplo: `programadora`, `matemática` y `guitarrista`) deben estar en distintos colores (cada palabra debe tener un color distinto).

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/presentacion.html)

---

### 02 - Presentación Modo Oscuro

- Repetir el ejercicio anterior, pero poniéndole al `html` un color de fondo oscuro (por ejemplo: `#212121`) y un color de texto claro (por ejemplo: `#FAFAFA`).

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/presentacion-modo-oscuro.html)

---

### 03 - Artículo

`index.html` debe tener:

- un título `h1` con un tamaño de letra más grande y una tipografía distinta de la que viene por defecto. Poner un título cualquiera (o aleatorio).
- un texto que diga: `Publicado por @adalovelace hace 3 días`. `@adalovelace` debe ser un link (que no lleve a ningún). El texto debe tener un color gris mientras que el link un color celeste. El link no debe tener subrayado. El texto debe tener la misma tipografía que los siguientes párrafos.
- 4 párrafos `p` con `lorem ipsum` y una tipografía distinta a la del título: 
  - El primer párrafo debe tener una oración en itálica. 
  - El segundo párrafo debe tener una oración en negrita. 
  - El tercer párrafo debe estar completamente en itálica y tener una tipografía distinta a la de los párrafos.
  - El cuarto párrafo debe tener 2 palabras en negrita y 2 palabras en itálica.

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/articulo.html)

---

### 04 - Paisaje

- `index.html` debe tener:

- al menos 10 elementos en línea `span`, que deben contener cada uno un emoji  (por ejemplo, de árboles y/o edificios). Por ejemplo: 
```
🌲🌳🌳🏠🏢🏦🏠🏠🌲🌳
```
- cada emoji debe tener un tamaño de letra distinto para que haya variedad entre ellos. 

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/paisaje.html)

---

### 05 - Alineación

- `index.html` debe tener:

- las siguientes palabras, cada una en un párrafo `p` aparte. Alinear cada párrafo según lo que diga la palabra. Usar 3 clases, una para cada alineación.

```
¡Izquierda!
¡Centro!
¡Derecha!
¡Centro!
¡Izquierda!
¡Centro!
¡Centro!
¡Izquierda!
¡Izquierda!
¡Derecha!
¡Derecha!
```

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/alineacion.html)

---

### 06 - Frutas

`index.html` debe tener:

- una lista desordenada con al menos 10 frutas.
- cada fruta debe tener un color que la represente (por ejemplo, manzana de color rojo, banana de color amarillo, kiwi de color verde).

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/frutas.html)

---

### 07 - Paleta de Colores

- `index.html` debe tener:

- un título `h1` que diga: `Mis paletas`
- 3 paletas de colores, que consisten en:
  - un título `h2` con el nombre de la paleta (por ejemplo: `Moderna`)
  - una lista desordenada con 5 ítems
  - cada ítem debe tener como texto código del color, en el sistema correspondiente (por ejemplo, si es blanco y está en hexadecimal #FFFFFF)

- Poner un tipografía distinta a la default.
- Dar a los títulos un tamaño de fuente distinto al default.
- Cada ítem debe de tener de color de fondo el color que representa (por ejemplo, si representa el color negro, tener de color de fondo dicho color).
- Tener en cuenta el contraste, si el color de fondo es muy oscuro, poner un color de letra claro, y viceversa.
- Los colores de la primera paleta deben estar en sistema hexadecimal, los de la segunda en sistema rgb y los de la tercera en sistema hsl.

-> [aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase02/paleta-de-colores.html)

---

### 08 - Termómetro

- `index.html` debe tener:

- una lista desordenada con 10 ítems.
- la lista debe ir de `Temperatura: 0°C` a `Temperatura: 50°C` aumentando de a 5°C.
- poner las temperaturas extremas (0°C y 50°C) en negrita.
- dar a cada temperatura un color distinto, cambiando gradualmente, siendo el 0°C el color azul y 50°C el color rojo. [Ver ejemplo](https://cdn.shopify.com/s/files/1/2303/2711/files/colour_temperature_kelvin_chart_make_up.jpg?v=1513856014).

-> [aca se puede ver en web]()

---

### 09 - Cuenta Bancaria

`index.html` debe tener:

- un título `h1` que diga: `Mi cuenta`.
- un título `h2` que diga: `Últimos movimientos`.
- agregar 5 movimientos, que deben tener:
  - un título `h3` con el nombre de la operación (por ejemplo `Depósito`, `Transferencia`, `Pago a XXX`, etc.
  - un elemento `p` con la fecha de la operación.
  - un elemento `p` con el monto de la operación, con un signo más (+) adelante si ingresó dinero o un signo menos (-) si salió dinero de la cuenta.
  
- Ejemplo:

```
Mi cuenta
Últimos movimientos

Transferencia a Grace
01/05/2020
- $1000


Cobro de sueldo
01/05/2020
+ $30000
```

- Poner un tipografía distinta a la default.
- Dar a los títulos un tamaño de fuente distinto al default.
- Dar a la fecha un tamaño de letra más pequeña y un color gris claro.
- Si el monto es un ingreso, debe tener un color verde, si es una salida, debe tener un color rojo.

-> [aca se puede ver en web]()

---

### 10 - Tareas


`index.html` debe tener:

- un título `h1` que diga: `Mis tareas`.
- un título `h2` que diga: `Tareas para hoy`.
- agregar 6 tareas, que deben tener:
  - un título `h3` con la tarea a realizar (por ejemplo `Hacer las compras`).
  - un elemento en línea `span` con el estado de la tarea: `Pendiente`, `Haciendo`, `Hecha`, `Cancelada`.
  
- Ejemplo:

```
Mis tareas
Tareas para hoy

Ir al banco
Cancelada

Preparar parcial
Haciendo

Pasear al perro
Hecha
```

- Poner un tipografía distinta a la default.
- Dar a los títulos un tamaño de fuente distinto al default.
- Dar a la fecha un tamaño de letra más pequeña y un color gris claro.
- Poner a cada estado un color de fondo distinto, siguiendo el siguiente criterio:
  - Pendiente: Azul
  - Haciendo: Naranja
  - Hecha: Verde
  - Cancelada: Rojo

-> [aca se puede ver en web]()

---

### 11 - Reacciones

`index.html` debe tener:

- un título `h2` que diga: `Comentarios`.
- agregar 5 comentarios, que deben tener:
  - un título `h3` que contenga un link con el nombre de la usuaria (por ejemplo, `@adalovelace`). El link no debe llevar a ningún lado.
  - un elemento `p` con el momento de publicación del comentario (por ejemplo, `Hace 15 minutos`).
  - un elemento `p` con `lorem ipsum`.
  - al menos 4 elementos en línea `span` que consistan en un emoji y un número, indicando la reacción y la cantidad de reacciones (por ejemplo: ❤️ 2 | 👍 4 | 👏 3 | 🔥 5)

- Poner un tipografía distinta a la default.
- Dar a los títulos un tamaño de fuente distinto al default.
- Dar al nombre de usuaria un color que se distinga (azul/celeste, etc) y sacar el subrayado por default.
- Dar a la fecha un tamaño de letra más pequeña y un color gris claro.
- Separar los `span` con espacios y ponerle un color de fondo gris claro.

-> [aca se puede ver en web]()

---
---
