# Clase 7 : 31 Mayo - Posicionamiento y Responsive

## 🏁 Objetivos:

- Que conozcas las distintas formas de posicionar elementos con CSS

- Que te interiorices en el sistema de coordenadas de CSS

- Que puedas aplicar lo aprendido en los casos de uso más comunes

- Que entiendas en qué consiste el diseño responsivo y qué problemas soluciona

- Que puedas trabajar con unidades porcentuales

- Que te familiarices con el uso de media queries

- Que puedas aplicar un diseño responsivo a tu sitio

---


## 📝 Contenidos

Sistema de posicionamiento en CSS

La propiedadposition

Formas de posicionamiento: relative |  absolute

Sistema de coordenadas: top | right | bottom  | left  | z-index

---

## 📝 Diseño Responsivo

- Diseño responsivo vs adaptativo

- Mobile first vs Desktop first

- Media queries y breakpoints

---
---


## Ejercicios

[**Aca esta la web con links a todos**](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/index.html)

---

## 01 - Colores

- Agregar una etiqueta h1 con el texto ¡Mirame cambiar de color!.

- Hacer que el body ocupe todo el alto y el ancho de la pantalla.

- Centrar el h1 vertical y horizontalmente.

- Dar al body un color de fondo.

- Dar al h1 una tipografía usando Google Fonts (p. ej. Montserrat).

- Dar al `h1 un tamaño de fuente de 40px.

- Centrar el texto.

- Poner dos breakpoints:

Cuando la pantalla tiene menos de 900px y más de 600px, el h1 debería tener 32px de tamaño de fuente.

Cuando la pantalla tiene menos de 600px, el h1 debería tener 24px de tamaño de fuente.

- En cada breakpoint, cambiar el color de fondo del body.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/colores.html)

---

## 02 - Header

- Agregar un header, con una navegación y una lista de links.

- Poner 4 links (p. ej.: Sobre mí, Servicios, Proyectos y Contacto).

- Dar al header un color de fondo.

- Dar a los links los siguientes estilos: tipografía, tamaño de letra y color. Sacar el subrayado que viene por defecto en los links.

- Hacer que el header esté arriba de todo de la página, que ocupe todo el ancho, y que tenga un alto fijo (p. ej.: 40px).

- Hacer que los links queden uno al lado del otro, con un poco de separación y centrados verticalmente con respecto al header.

- Hacer que los links queden alineados a la izquierda.

- Poner un breakpoint para que cuando el ancho de la pantalla esté por cubrir los links, los links se oculten y en un su lugar aparezca un ícono.

- Usar [este](https://fontawesome.com/icons/bars?style=solid&s=solid) ícono de Font Awesome.

- El ícono tiene que estar alineado a la derecha en el header.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/header.html)

---

## 03 - Servicios I

- Repetir el ejercicio de [Servicios I](https://1exqr.csb.app/) de la clase 07 - Flexbox.

- Agregarle un breakpoint para mobile, de modo tal que los servicios queden uno debajo del otro.

- En dicho breakpoint, tanto los textos como los íconos tienen que quedar centrados horizontalmente.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/servicios-1.html)

---

## 04 - Servicios II

- Repetir el ejercicio de [Servicios II](https://m403i.csb.app/) de la clase 07 - Flexbox.

- Agregarle un breakpoint para mobile, de modo tal que los servicios queden uno debajo del otro.

- En dicho breakpoint, el ícono tiene que quedar arriba del texto, y tanto los textos como los íconos tienen que quedar alineados a la izquierda.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/servicios-2.html)

---

## 05 - Card de Producto

Replicar la siguiente [card de producto](https://mnyo0.csb.app/), responsive incluido

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/card-de-producto.html)

---

## 06 - Blog

index.html debe contener:

- un título h1 con el nombre del artículo (por ejemplo Ada Lovelace)

- un párrafo p con lorem ipsum

- al menos 2 secciones con título h2 (por ejemplo, Biografía y Obra)

- debajo de cada título de sección, al menos 2 subsecciones con título h3 (por ejemplo, debajo de Biografía, incluir Infancia y Adultez)

- debajo de cada título de subsección, al menos 2 párrafos p con lorem ipsum

- Usar una tipografía distinta a la que viene por default.

- Poner el texto dentro de un contenedor que actúe como columna. Darle un ancho máximo y centrarlo horizontalmente.

- Poner a títulos y textos distintos tamaños de letra que los que vienen por default.

- Para el tamaño de letra, usar unidades relativas y no absolutas (em).

- Poner un breakpoint que modifique el font-size del body, de modo tal que, al ser el tamaño del texto relativo a esta medida, cambien todos los tamaños en simultáneo.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/blog.html)

---

## 07 - Posts de blogs

index.html debe contener:

- un título h1 que diga Mi Blog

- un párrafo p con lorem ipsum

- un título h1 que diga Últimos posts

- 5 previews de posts de blogs, que contengan:

- un título h3 con el nombre del artículo

- un párrafo p con lorem ipsum

- un link que diga Seguir leyendo

- Usar una tipografía distinta a la que viene por default.

- Poner el texto dentro de un contenedor que actúe como columna. Darle un ancho máximo y centrarlo horizontalmente.

- Poner a títulos y textos distintos tamaños de letra que los que vienen por default.

- Para el tamaño de letra, usar unidades relativas y no absolutas (em).

- Poner dos breakpoints que modifiquen el font-size del body, de modo tal que, al ser el tamaño del texto relativo a esta medida, cambien todos los tamaños en cada breakpoint.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/post-de-blogs.html)

---

## 08 - Layout I

Replicar el [siguiente ejemplo](https://ce7du.csb.app/) con breakpoints incluidos.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/layout-1.html)

---

## 09 - Layout II

Replicar el [siguiente ejemplo](https://9eoom.csb.app/) con breakpoints incluidos.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/layout-2.html)

---

## 10 - Layout III

Replicar el [siguiente ejemplo](https://9eoom.csb.app/) con breakpoints incluidos.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/layout-3.html)

---

## 11 - Grilla de imágenes

index.html debe contener:

- un título h1 que diga Grilla de imágenes

- un párrafo p con lorem ipsum

- una grilla de 12 imágenes

- El título, el párrafo, y la grilla deben estar centrados horizontalmente.

- La grilla debe tener un ancho máximo (no ocupar todo el ancho de la pantalla inicialmente).

- Las imágenes de la grilla deben estar espaciadas entre sí con márgenes.

- Las imágenes de la grilla inicialmente deben tener una disposición de 4 imágenes por fila.

- Agregar breakpoints para que, a medida que la resolución se vaya achicando, la grilla cambie a 3 imágenes por fila, luego 2 imágenes por fila y finalmente 1 imagen por fila.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/grilla-de-imagenes.html)

---

## 12 - Grilla de productos

index.html debe contener:

- un título h1 que diga Mi tienda

- un título h2 que diga Productos más comprados

- un párrafo p con lorem ipsum

- una grilla con 9 cards productos, donde cada card de producto contiene:

una imagen del producto

un título h3 con el nombre del producto

un párrafo p con el precio del producto

un párrafo p con una oración lorem ipsum

Usar una tipografía distinta a la que viene por default.

- Poner a títulos y textos distintos tamaños de letra que los que vienen por default.

- Para el tamaño de letra, usar unidades relativas y no absolutas (em).

- El título principal y el secundario, el párrafo, y la grilla estar centrados horizontalmente.

- La grilla debe tener un ancho máximo (no ocupar todo el ancho de la pantalla inicialmente).

- Las cards de productos de la grilla deben estar espaciados entre sí con márgenes.

- Las cards de productos de la grilla inicialmente deben tener una disposición de 3 producots por fila.

- Agregar breakpoints para que, a medida que la resolución se vaya achicando, la grilla cambie a 2 productos por fila y finalmente 1 producto por fila.

- Cuando se muestran 3 y 2 productos por fila, la imagen debe estar arriba de la información del producto.

- Cuando se muestra 1 producto por fila, la imagen debe estar a la izquierda de la información del producto.

- Cuando se muestra 1 producto por fila, el título principal, el secundario y el párrafo, deben alinearse horizontalmente a la izquierda.

-Poner un breakpoint que modifique el font-size del body, de modo tal que, al ser el tamaño del texto relativo a esta medida, cambien todos los demás tamaños en simultáneo.

-> [Aca se puede ver en web](https://eugenia1984.github.io/ada-introduccion-frontend/clase07/grilla-de-productos.html)


---
---

## Ejercicios Extra:

# Posicionamiento

## Ejercicios


### 01 - Superponer elementos

- Crear en una carpeta un archivo index.html y un archivo style.css.

- En index.html copiar y pegar el [siguiente código](https://raw.githubusercontent.com/Ada-IT/ejercicios-frontend/master/modulo-2/ejercicios/posicionamiento/index.html).

- En style.css copiar y pegar el [siguiente código](https://raw.githubusercontent.com/Ada-IT/ejercicios-frontend/master/modulo-2/ejercicios/posicionamiento/styles.css), y agregar los estilos necesarios para que los elementos se posicionen de la siguiente manera:

![alt text](https://i.ibb.co/M66T8xY/Captura-de-pantalla-de-2020-09-11-09-31-53.png 'ejemplo de primer ejercicio')


-> [Aca se puede ver en web]()

---

### 02 - Superponer elementos II

Replicar los siguientes ejemplos posicionando los elementos como corresponde:

![](https://i.ibb.co/z7zkddk/Screen-Shot-2020-09-11-at-12-37-54.png)

Usar las siguientes medidas:

- **Cuadrado gris:** 100px x 100px
- **Cuadrado rojo:** 60px x 60px
- **Cuadrado verde:** 30px x 30px

-> [Aca se puede ver en web]()

---

### 03 - Usuarios en línea

Maquetar un contador que muestre la cantidad de usuarios en línea fijado en la parte inferior derecha de la pantalla. Ejemplo:

![](https://i.ibb.co/hLNcf06/Screen-Shot-2020-09-11-at-13-59-13.png)


-> [Aca se puede ver en web]()

---

### 04 - Notificaciones

Maquetar un header similar al siguiente, con notificaciones por encima de los íconos.

![](https://i.ibb.co/4s2jxr2/Screen-Shot-2020-09-11-at-13-31-12.png)

-> [Aca se puede ver en web]()

---


### 05 - Perfil de usuario

Maquetar una card de usuario que contenga: foto de perfil del usuario, foto de la bandera del país de origen del usuario, además de su nombre, su apellido y su profesión. La foto de la bandera debe posicionarse por encima de la foto de perfil. Ejemplo:

![](https://i.ibb.co/sKnp66N/Captura-de-pantalla-de-2020-09-11-09-36-45.png 'profile card')


-> [Aca se puede ver en web]()

---

### 06 - Card de producto

Maquetar una card de producto que contenga imagen, nombre y precio de producto. Por encima de la imagen, en la esquina superior izquierda, debe contener dos badges, una para un descuento, y otra para `Envío gratis`. Por encima de la imagen, en la esquina superior dercha, debe contener un ícono de un corazón. Ejemplo:

![](https://i.ibb.co/g971CFM/Screen-Shot-2020-09-11-at-13-47-34.png)

-> [Aca se puede ver en web]()

---


### 07 - Menú de navegación

Sobre la siguiente estructura HTML aplicar los estilos necesarios para lograr que:

- Los `li` queden en línea.
- El `ul` quede posicionado sobre el lado derecho del `nav`.
- El header quede de fijado en la parte superior de la pantalla y por encima de cualquier otro elemento si lo hubiera.

```html
<header>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Submenu</li>
      <li>Contact</li>
    </ul>
  </nav>
</header>
```

-> [Aca se puede ver en web]()

---

### 08 - Submenú

Al ítem Submenú del ejercicio anterior:

- Darle la clase "sub-menu" y agregarle como elemento hijo una nueva lista con la clase "sub-menu-oculto"
- La lista "sub-menu-oculto" debe estar oculta y debe tener 5 ítems
- Al hacer hover sobre la lista "sub-menu" debe mostrarse la lista "sub-menu-oculto"

Ejemplo:

![alt text](https://i.ibb.co/X8Kj2cr/Captura-de-pantalla-de-2020-09-11-09-42-06.png 'ejemplo de submenu')


-> [Aca se puede ver en web]()

---

### 09 - Registrar usuario

Maquetar un formulario de registro de usuario que pida nombre de usuario, email, contraseña y repetir contraseña. Cada input deberá tener un ícono delante del placeholder. Ejemplo:

![alt text](https://i.ibb.co/MM4pWnR/Captura-de-pantalla-de-2020-09-11-09-49-06.png 'ejemplo de formulario')


-> [Aca se puede ver en web]()

---

### 10 - Validar formulario

Al formulario anterior, agregar el atributo `required` a cada atributo. Hacer que aparezca sobre cada `input` [este ícono](https://fontawesome.com/icons/check?style=solid) a la derecha cuando dicho `input` está en el estado `valid`.


-> [Aca se puede ver en web]()

---

### 11 - Imagen con overlay

Poner una imagen con un overlay (es decir, un fondo semitransparente, usando `rgba`) y texto encima. Por ejemplo:

![](https://i.ibb.co/Xbwrc73/Screen-Shot-2020-09-11-at-14-18-10.png)

Para más ideas, pueden usar los ejemplo de la [siguiente página](https://tympanus.net/Development/HoverEffectIdeas/index.html) en el estado `hover`: NICE LYLY, WARM OSCAR, SWEET MARLEY, GLOWING RUBY, CHARMING ROXY, WILD ROMEO, STRANGE DEXTER, FREE SARAH, SILLY CHICO, FAITHFUL MILO, PASSIONATE JULIA, DARK KIRA, LONELY STEVE, FUNNY MING.

**NO REPLICAR EL EFECTO ANIMADO**, maquetarlo de forma estática tal cómo queda cuando se hace `hover` sobre los ejemplos. La clase que viene vamos a poder agregarles las transiciones.

-> [Aca se puede ver en web]()



---
---





