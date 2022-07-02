# Clase 13 * 21 Junio * Arrays y objetos

---

## 🏁 Objetivos

- Que puedas trabajar con listas

- Que te familiarices con el uso de objetos

- Que puedas ver ejemplos de la respuesta de una API

---

## 📝 Contenidos

- Definición de y construcción de un array

- Definición de y construcción de un objeto

---

## :star: EJERCICIOS

# Estructuras de datos: Arrays

## Ejercicios

Todo ejercicio que incluya emojis puede ser sustituido con strings

### `obtenerMenor(numeros)`

Crear una función `obtenerMenor` que tome como argumento un array de números `numeros` y devuelva el menor de ellos. Ejemplo:

```javascript
obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2
```

### `sumar(numeros)`

Crear una función `sumar` que tome como argumento un array de números `numeros` y devuelva la suma de ellos. Ejemplo:

```javascript
sumarNumeros([5, 7, 10, 12, 24]) // 58
```

### `contiene(numero, numeros)`

Crear una funci´ón `contiene` que tome como argumentos un número `numero` y un array de números `numeros` y devuelva `true` o `false` dependiendo de si dicho `numero` se encuentra en el array de `numeros`. Ejemplo:

```javascript
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
```

### `invertirCaso(string)`

Crear una función `invertirCaso` que tome como argumento un string `string` y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

```javascript
invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'
```

### `gano(tragamonedas)`

Crear una función `gano` que tome como argumento un array `tragamonedas` con 5 símbolos y devuelva `true` si son iguales y `false` sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

```javascript
gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
gano(['💫', '💫', '💫', '💫', '💫']) // true
gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true
```

### `estanJuntos(personajes)`

Crear una función `estanJuntos` que tome como argumento un array de strings `personajes`, y devuelva `true` si Sam se encuentra al lado de Frodo, ya sea antes o después, o `false` sino. Ejemplo:

```javascript
estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
estanJuntos(['Sam', 'Orco', 'Frodo']) //true
```

### `separar(perrosYGatos)`

Crear una función `separar` que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

```javascript
separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'
```

### `obtenerChatStatus(usuarias)`

Crear una función `obtenerChatStatus` que tome como argumento un array de strings `usuarias` y devuelva un string con el status del chat. Las reglas son:

- Para una usuaria, debe mostrar: `NOMBRE_USUARIA_1 está conectada`
- Para dos usuarias, debe mostrar: `NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas`
- Para más de dos usuarias, debe mostrar: `NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas`

Ejemplo:

```javascript
obtenerChatStatus(['Ada']) // 'Ada está conectada'
obtenerChatStatus(['Ada', 'Grace']) // 'Ada y Grace están conectadas'
obtenerChatStatus(['Ada', 'Grace', 'Marie']) // 'Ada, Grace y 1 persona(s) más están conectadas'
```

### `germinar(plantines)`

Crear una función `germinar` que tome como argumento un string de `plantines` con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

```javascript
germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'
```

### `comer(plantas)`

Crear una función `comer` que tome por parámetro un string `plantas` que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

```javascript
comer('🐰🥕🥬🥕🚫') // ''
comer('🥕🥬🐰🥕🥕🥕🚫') // '🥕🥬'
comer('🐰🥕🥬🥕🚫🥕') // '🥕'
comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷') // '🌱🥕🌱🌷'
```

### `multiplicar(multiplicador, numeros)`

Crear una función `multiplicar` que tome como argumentos un número `multiplicador` y un array de números `numeros`, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

```javascript
multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
multiplicar(10, [2, 5, 77]) // [20, 50, 770]
```

### `filtrarPorLongitudMayorA(longitud, palabras)`

Crear una función `filtrarPorLongitud` que tome como argumentos un número `longitud` y un array de strings `palabras` y que devuelva un array con las palabras que tengan una cantidad de letras mayor a `longitud`. Ejemplo:

```javascript
filtrarPorLongitudMayorA(4, [
  'dia',
  'remolacha',
  'azul',
  'sorpresa',
  'te',
  'verde',
]) // ['remolacha', 'sorpresa', 'verde']
```

### `recortar(cantidadLetras, palabras)`

Crear una función `recortar` que tome como argumentos un número `cantidadLetras` y un array de strings `palabras` y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando `cantidadLetras` letras al iniciando, y recortando las demás. Por ejemplo, `elefante` recortada a 4 letras queda `elef`.

```javascript
recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
recortar(1, ['algoritmo', 'bug', 'compilador']) // ['a', 'b', 'c']
```

### `sonIguales(a, b)`

Crear una función `sonIguales(a, b)` que tome como argumentos dos arrays `a` y `b` y devuelva `true` si ambos arrays tienen los mismos valores en la misma posición, o `false` sino.

```javascript
sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) // true
sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) // false
sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) // false
```

### `obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)`

Crear una función `obtenerResultado` que tome como argumentos dos strings `jugadoraA` y `jugadoraB` con los nombres de cada jugadora respectivamente, y dos arrays de numeros `puntajesA` y `puntajesB` de la misma longitud. La función debe devolver un string con el nombre de la ganadora o `Empate` en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

```javascript
const puntajesA = [3, 5, 2]
const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B
```

```javascript
obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]) // Ada
obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]) // Empate
obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) // Grace
```

### `jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)`

Crear una función `jugarPiedraPapelTijeras` que tome como argumentos dos strings `jugadoraA` y `jugadoraB` con los nombres de cada jugadora respectivamente, y dos arrays de strings `jugadasA` y `jugadasB` con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o `Empate` en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

```javascript
const jugadasA = ['piedra', 'piedra', 'tijera']
const jugadasB = ['papel', 'tijera', 'tijera']

// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate
```

```javascript
jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) // Grace
jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) // Empate
jugarPiedraPapelTijeras(
  'Ada',
  'Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
) // Ada
```

## Ejercicios con DOM

Para los siguientes ejercicios, no es necesario darle estilos más allá de los básicos que requiera el ejercicio para visualizarse correctamente. Se pueden utilizar funciones realizadas en los ejercicios previos.

### 📝 Lista de tareas

Crear un programa que muestre:

- un input de texto
- un botón que diga `Agregar tarea`
- una lista `ul`

Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.

Para actualizar la lista se debe:

- borrar todo lo que contenga
- recorrer el array y por cada ítem
- insertar un ítem de lista `li` con el valor del ítem del array

### 🔍 Buscador

Crear un programa que muestre:

- un input de texto
- una lista `ul`

El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca `script` y `JavaScript` es un string dentro del array, se debe mostrar.

Para actualizar la lista se debe:

- borrar todo lo que contenga
- recorrer el array y por cada ítem
- insertar un ítem de lista `li` con el valor del ítem del array

Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

**TIP**: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.

### 📈 Total de gastos

Crear un programa que muestre:

- un input de números
- un botón que diga `Agregar gasto/ganancia`
- una lista `ul`
- un elemento `p`

Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento `p`.

Para actualizar la lista se debe:

- borrar todo lo que contenga
- recorrer el array y por cada ítem
- insertar un ítem de lista `li` con el valor del ítem del array

El elemento ```p``` se actualiza con el total de la suma de los valores del array.

---

## :star: EJERCICIOS OBJETOS


# 📦 Objetos

### Contenido

- [Conceptos bases](#primera-parte---conceptos-bases)
- [Objetos dinámicos](#segunda-parte---objetos-dinamicos)
- [Funciones dentro de objetos](#tercera-parte---funciones-dentro-de-objetos)
- [Funciones con objetos](#cuarta-parte---funciones-con-objetos)

## Primera parte - conceptos bases

### 01 - sobre mi

- Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
- El objeto tiene que tener 3 propiedades: nombre, apellido, edad
- Mostrar en consola el objeto sobreMi

### 02 - presentar

- Crear una variable llamada user, a la que le vamos a asignar un objeto.
- El objeto tiene que tener 3 propiedades: fullname, email, age
- Mostrar en consola el objeto user
- Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

### 03 - cancion

- Tenemos un objeto en la variable `song` con diferentes propiedades que representan una canción de spotify.
- Queremos crear un nuevo objeto, guardandolo en la variable `cancion`, a partir de las propiedades del objeto que tenemos en `song`
- El nuevo objeto tiene que tener las propiedades **titulo**, **banda**, y **duracion** (en segundos, ya que en el objeto original `song` está en milisegundos)

```js
var song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 166000,
  album: "Led Zeppelin IV",
};

var cancion = {
  // completar el codigo
};

console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }
```

### 04 - base de datos

- Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
- Los datos que tenemos son un id, email, nombre y teléfono
- Crear un objeto para cada persona que nos pasaron
- Mostrar por consola todos los objetos creados

```js
// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron
```

- Nos pidieron mostrar en la consola los siguientes datos de cada persona:

```js
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log();

// 2. El ID de Grace
console.log();

// 3. El email de Hedy
console.log();

// 4. El ID y nombre de Radia
console.log();

// 5. El telefono de Sheryl
console.log();
```

### 05 - correción de datos

- Tenemos la variable `datos` que tiene un objeto con los datos de una persona
- El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es **0192837465**
- También tenemos que modificar la edad, ya que es un **string** y necesitamos que sea un número.

```js
var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: "29",
  programa: true,
};

// codea aca la solucion

// finalmente, mostramos los datos
console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '0192837465',
//   edad: 29,
//   programa: true }
```

### 06 - lenguaje favorito

- Tenemos la variable `datos` con un objeto que guarda datos de personas
- Tenemos que programar la siguiente lógica
  - SI la propiedad `programa` es true
    - Agregá la propiedad `lenguajeFavorito`, y asignale "Javascript"

```js
var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

// codea aca la solucion

// finalmente, mostramos los datos
console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '1234567890',
//   edad: 29,
//   programa: true,
//   lenguajeFavorito: 'Javascript' }
```

### 07 - lenguaje favorito 2

- Tenemos la variable `datos` con un objeto que guarda datos de una persona
- Tenemos que programar la siguiente lógica
  - SI la propiedad `programa` es true
    - Agregá la propiedad `lenguajesFavoritos`, y asignale un array con dos lenguajes de programación
- Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es **[ACA EL NOMBRE]** y programo en **[ACA EL LISTADO DE LENGUAJES FAVORITOS]**"

```js
var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

// codea aca la solucion

// aca mostrar la frase
console.log(
  "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"
);
// por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"
```

### 08 - disco

- Tenemos la variable `disco` con un objeto que guarda datos de un album musical
- Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
- Completá el código para lograr el resultado esperado

```js
var disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

// codea aca la solucion
var nombreDisco = ;
var anioDisco = ;
var nombreBanda = ;

console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);
// Debería mostrar
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011
```

### 09 - skills

- Tenemos la variable `user`, que es un objeto con datos de una persona en linkedin
- En el objeto hay una propiedad `skills`, que es un array con las distintas habilidades de la persona
- Necesitamos actualizar el perfil y agregar **"Javascript"** al array de de skills

```js
var user = {
  id: 123456789,
  name: "Ada Lovelace",
  url: "https://www.linkedin.com/in/ada-lovelace",
  skills: ["HTML", "CSS", "SASS"],
};

// codea aca la solucion

// despues de la solucion
console.log(user);
// deberia mostrar
// { id: 123456789,
//   name: 'Ada Lovelace',
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }
```

### 10 - playlist

- Creá un objeto donde vamos a guardar información sobre una playlist de spotify
- El objeto va a tener las propiedades `nombre` (un string), `privada` (un booleano) y `canciones` (un array de strings).
- En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:

```
Lista de Nirvana
Privada: Si
Canciones:
Smells Like Teen Spirit
In Bloom
Come As You Are
```

- Privada tiene que mostrar **Si** en el caso que la propiedad `privada` sea `true`, o **No** si la prop

### 11 - ganadora

- Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
- Cada objeto tiene las propiedades `nombre`, `temporada` y `foto`.
- Iterá/Recorré el array utilizando `for` y mostrá el nombre y la temporada que ganó. Por ejemplo: **Bianca Del Rio ganó la temporada 6**

```js
var ganadoras = [
  {
    nombre: "Bebe Zahara Benet",
    temporada: "1",
    foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
  },
  {
    nombre: "Tyra Sanchez",
    temporada: "2",
    foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
  },
  {
    nombre: "Raja",
    temporada: "3",
    foto: "http://www.nokeynoshade.party/images/raja.jpg",
  },
  {
    nombre: "Sharon Needles",
    temporada: "4",
    foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
  },
  {
    nombre: "Jinkx Monsoon",
    temporada: "5",
    foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
  },
  {
    nombre: "Bianca Del Rio",
    temporada: "6",
    foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
  },
];

///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6
```

### 12 - canciones

- Tenemos un array de objetos, que representa un listado de bandas
- Cada objeto representa una banda, y tiene las propidades `id`, `nombre`, `fundacion`, `activa`
- Mostrar en consola cada banda del array, con la siguiente lógica:
  - Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
  - Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"

```js
var bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990
```

### 13 - banda

- Tenemos un objeto en la variable `banda`, con datos de una banda (nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes y una lista de sus discos).
- Queremos mostrar:
  1. La duración total del disco (suma de la duración de cada canción)
  2. La duración promedio por canción (un promedio entre todas las duraciones)

```js
var banda = {
  name: "Led Zeppelin",
  year: 1968,
  active: false,
  thumbnail:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
  members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
  albums: [
    {
      name: "Led Zeppelin",
      year: 1969,
      songs: ["Good Times, Bad Times", "Communication Breakdown"],
      duration: 2691,
    },
    {
      name: "Led Zeppelin II",
      year: 1969,
      songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
      duration: 2502,
    },
    {
      name: "Led Zeppelin III",
      year: 1970,
      songs: ["Immigrant Song"],
      duration: 2489,
    },
    {
      name: "Led Zeppelin IV",
      year: 1971,
      songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
      duration: 2559,
    },
  ],
};

// completa el codigo para lograr el resultado esperado

///// RESULTADO
console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
console.log("Tiene en total " + cantidadDiscos + " discos");
console.log(
  "Tiene en total " +
    cantidadTotalCanciones +
    " canciones entre todos los discos."
);
console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");
// ESPERADO
// Led Zeppelin se fundó en el año 1968
// Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
// Tiene en total 4 discos
// Tiene en total 9 canciones entre todos los discos.
// En promedio, cada canción dura 1137.888888888889 segundos
```

###

## Segunda parte - objetos dinamicos

### 01 - persona

- Declarar una variable con el nombre **propiedadNombre** y asignar el valor nombre
- Declarar una variable con el nombre **propiedadEdad** y asignar el valor edad
- Crear un objeto **persona** con las propiedades nombre y edad
- Asignar a las propiedades del objeto **persona** tu nombre y edad
- Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
- Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables **propiedadNombre** y **propiedadEdad**

### 02 - keys

- Partiendo de un objeto guardado en la variable `producto`
- Mostrar en la consola el nombre de todas las propiedades que tiene el producto
- Utilizar el método **keys**

```js
const producto = {
  id: 'ADA-020',
  title: 'Gubergren sed est amet voluptua',
  price: 123.75,
  picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
  condition: 'nuevo',
  free_shipping: true,
  location: 'Capital Federal'
};

// completá acá el código
var todasLasPropiedades = ;

console.log(todasLasPropiedades);
// resultado esperado
// [ 'id',
//   'title',
//   'price',
//   'picture',
//   'condition',
//   'free_shipping',
//   'location' ]
```

### 03 - producto

- Partiendo de un objeto guardado en la variable `producto`
- Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
- Utilizar el método **keys**
- El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"

```js
const producto = {
  id: "ADA-020",
  title: "Gubergren sed est amet voluptua",
  price: 123.75,
  picture:
    "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
  condition: "nuevo",
  free_shipping: true,
  location: "Capital Federal",
};

// completá acá el código

/////
// RESULTADO ESPERADO
// producto['id'] -> ADA-020
// producto['title'] -> Gubergren sed est amet voluptua
// producto['price'] -> 123.75
// producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// producto['condition'] -> nuevo
// producto['free_shipping'] -> true
// producto['location'] -> Capital Federal
```

### 04 - email

- Partiendo de un objeto guardado en la variable `user`
- Verificar si tiene la propiedad `email`
  - Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
  - Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

```js
const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

// acá tu solucion
```

### 05 - propiedad

- Completa el código dentro de la función `hasProperty`
  - Si el objeto de la variable `object` tiene la propiedad que recibe en la variable `property`, retorna `true`
  - Sino retorna `false`

```js
const hasProperty = (object, property) => {
  // return true si el objeto (object) tiene la propiedad (property) que llega por parametro
  // property es un string
  // sino return false
  return !!object[property];
};

const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

const user2 = {
  username: "grace_hopper",
  password: "1234567890!",
  email: "grace@hopper.com",
};

console.log(hasProperty(user, "email")); // false
console.log(hasProperty(user, "password")); // true
console.log(hasProperty(user, "id")); // false

console.log(hasProperty(user2, "email")); // true
console.log(hasProperty(user2, "password")); // true
console.log(hasProperty(user2, "id")); // false
```

## Tercera parte - funciones dentro de objetos

### **Objetos 001**

- Declarar la variable **holaMundo** y asignarle un objeto con las siguiente propiedades:
  - mostrarMensaje: una función que muestra en consola el mensaje '¡Hola mundo!'
  - obtenerMensaje: una función que retorna un string con el mensaje "¡Alo mundo!"

```js
/// escribi aca tu solucion

holaMundo.mostrarMensaje(); // ¡Hola mundo!
console.log(holaMundo.obtenerMensaje()); // ¡Alo mundo!
```

### **Objetos 002**

- Tenemos una variable `pelicula`, con propiedades que guardan información sobre una película
- Necesitamos agregar un método/función `mostrarInfo` que muestre por consola el mensaje: "Película: [NOMBRE PELI] - Año: [AÑO PELI]"

```js
const pelicula = {
  titulo: "The Dark Knight",
  anio: 2008,
  director: "Christopher Nolan",
};

pelicula.mostrarInfo();
// Película: The Dark Knight - Año: 2008
```

### **Objetos 003**

- Tenemos una variable `playlist`, con información sobre una playlist de spotify
- El objeto tiene una propiedad `songs` que es un array vacío
- Al objeto vamos a agregarle un método que se llame `addSong`
  - Este método va a recibir un string como parámetro (el nombre de una canción) y va a agregarlo en la propiedad `songs` del objeto.
- Después de crear la función, agregá las siguientes 3 canciones utilizando `playlist.addSong`: **'Geronimo'**, **'Sissy That Walk'**, **'Cover Girl'**

```js
// TODO: agregar en el objeto el método addSong, que recibe como parámetro el nombre de una canción a agregar en el array songs
const playlist = {
  name: "Rupaul Lipsyncs",
  owner: "Ada",
  followers: 8743,
  songs: [],
};

// TODO: utilizando el método que creamos antes, agrega las siguientes tres canciones utilizando el método playlist.addSong
// 'Geronimo'
// 'Sissy That Walk'
// 'Cover Girl'

console.log(playlist.songs); // [ 'Geronimo', 'Sissy That Walk', 'Cover Girl' ]
```

### **Objetos 004**

- Tenemos una variable `user`, con información sobre una persona (`firstName`, `lastName`, `age`)
- Al objeto vamos a agregarle un método que se llame `getFullname`, que no tiene parámetros y tiene que retornar un string con el `firstName` y `lastName` concatenadas, separados por un espacio.

```js
// TODO: agregar en el objeto el método getFullname, que tiene que retornar el nombre completo de la persona
const user = {
  firstName: "Hedy",
  lastName: "Lamarr",
  age: 30,
};

console.log(user.getFullname()); // Hedy Lamarr
```

### **Objetos 005**

- Tenemos la misma variable `user` del ejercicio anterior, con información sobre una persona, pero con una diferencia en la estructura.
- Al objeto vamos a agregarle un método que se llame `getFullname`, que no tiene parámetros y tiene que retornar un string con el nombre completo de la persona

```js
// TODO: agregar en el objeto el método getFullname, que tiene que retornar el nombre completo de la persona
var user = {
  name: {
    first: "Hedy",
    last: "Lamarr",
  },
  age: 30,
};

console.log(user.getFullname()); // Hedy Lamarr
```

### **Objetos 006 - carrito parte 1**

- Tenemos un objeto `shoppingCart`, que guarda datos de un carrito de compras en una tienda virtual
  - Tiene dos propiedades: `owner` (un objeto con los datos de la persona que está haciendo la compra) y `products` (un **array de objetos**, con todos los productos que está por comprar)
- Los objetos de los productos tienen 4 propiedades: `id` (un número), `title` (string, el nombre del producto), `price` (un número, el precio del producto) y `freeShipping` (un booleano que indica si el producto tiene o no cargos por envio)
- Agregar al objeto `shoppingCart` un método `addProduct` que nos permita agregar objetos de productos al array `products`.
- También necesitamos agregar un método `getTotal` que sume el precio de todos los productos que tenemos en el array `products` y nos devuelva el precio final total.
- Crear los siguientes productos y agregarlos al carrito:

```js
// 1,At vero elitr,320,true
// 2,Dolore ipsum est eos,230,false
// 3,Lorem sadipscing tempor,120.50,true
// 4,Duo invidunt accusam,510,false
// 5,Labore accusam eirmod.,125.99,true

// Ejemplo del formato de cada objeto del producto: 0,Mouse Genius,150,false
const unMouse = {
  id: 0,
  title: "Mouse Genius",
  price: 150,
  freeShipping: false,
};
const test = {
  id: 1,
  title: "qwes",
  price: 150,
  freeShipping: false,
};
const teclado = {
  id: 0,
  title: "Mouse Genius",
  price: 150,
  freeShipping: false,
};
const asd = {
  id: 0,
  title: "Mouse Genius",
  price: 150,
  freeShipping: false,
};
```

```js
// objeto que guarda la información que quien hace la compra y que productos agregó al carrito
const shoppingCart = {
  owner: {
    id: 123,
    name: "Ada Lovelace",
  },
  products: [],
};

shoppingCart.addProduct(unMouse);
// shoppingCart.addProduct();
// shoppingCart.addProduct();
// shoppingCart.addProduct();
// shoppingCart.addProduct();

console.log(shoppingCart.getTotal()); // 1306.49
```

### **Objetos 007 - carrito parte 2 **

- Copiar y pegar el código de la solución al ejercicio anterior
- Debido a un cambio de requerimiento, el precio final total se calcula distinto
- Si un producto no tiene free shipping (`freeShipping` es `false`) entonces al precio del producto hay que sumarle 120
- Si tiene free shipping (`freeShipping` es `true`) entonces se toma el precio que está en el objeto y no se le suma nada
- Una vez calculado el total, hay que agregar un 21% de IVA

```js
console.log(shoppingCart.getTotal()); // 1871.2529
```

### **Objetos 008 - carrito parte 3**

- Crear un documento con el nombre `obj_031.js`
- Copiar y pegar el código de la solución al ejercicio `obj_030`
- Ahora tenemos que agregarle un método a `shoppingCart` que se llame `render` para mostrar el listado de productos a comprar con su precio y al final de todo el precio final total

```js
// COPIAR Y PEGAR LA SOLUCION EL EJERCICIO 030

shoppingCart.render();
/**** RESULTADO ESPERADO ****/

// Listado de productos:
// At vero elitr - $320
// Dolore ipsum est eos - $250
// Lorem sadipscing tempor - $120.5
// Duo invidunt accusam - $530
// Labore accusam eirmod. - $125.99
// Total con IVA: $1629.2529
```

## Cuarta parte - funciones con objetos

### **Nombre completo**

- Tenemos una variable `persona`, con la información de perfil de una persona en GMail
- Necesitamos crear una función `obtenerNombreCompleto` que reciba un objeto por parámetro (con las mismas propiedades que el objeto que tenemos guardado en `persona`) y nos devuelva un string con el nombre completo (nombre + apellido)

```js
const persona = {
  nombre: 'Grace',
  apellido: 'Hopper',
  email: 'grace.hopper@gmail.com',
  plan: 'premium'
};

// CODEA ACA LA SOLUCION

obtenerNombreCompleto(persona); // Grace Hopper
```

### **Estado alumnxs**

- Estamos diseñando un nuevo sistema para una facultad, y tenemos la información de las materias para cada alumnx en objetos donde cada propiedad es una materia que contiene un array con las notas de los resultados de los parciales

```js
const materiasAda = {
  matematica: [10, 6, 10, 8],
  algoritmos: [10, 10, 9],
  algebra: [7, 9]
};

const materiasGrace = {
  matematica: [2, 9, 10, 7],
  algoritmos: [7, 1, 9],
  algebra: [2, 3]
};
```

- Nos pidieron generar un informa que muestre las materias aprobadas (promedio de notas >= 4) y desaprobadas (promedio de notas < 4)
- Para implementar este reporte, vamos a tener que desarrollar una función que tome como parámetro de entrada un objeto con las materias y sus notas, y nos retorne un objeto con dos propiedades: `aprobadas` y `desaprobadas`
- Cada propiedad es un array que contiene el nombre de las materias que aprobaron o desaprobaron respectivamente

```js
const agruparMateriasPorEstado = materias => {
  /// CODEÁ ACÁ LA SOLUCIÓN
}

console.log( agruparMateriasPorEstado(materiasAda) );
// {
//   aprobadas: ['matematica', 'algoritmos', 'algebra'],
//   desaprobados: []
// }


console.log( agruparMateriasPorEstado(materiasGrace) );
// {
//   aprobadas: ['matematica', 'algoritmos'],
//   desaprobados: ['algebra]
// }
```

### **Validar contraseña**

- Tenemos los datos de distintas personas que quieren crear un user dentro de GMail
- Todos los datos se guardan como objetos con las propiedades: `nombre`, `apellido`, `email` y `password`
- Nos pidieron implementar una función, llamada `validarPassword`, que recibe estos objetos y valide la contraseña
- La función nos tiene qu retornar un objeto con dos propiedades: `verificada` (un boolean que es true cuando la contraseña pasa las validaciones, o false en caso contrario) y `mensaje` (un string que contiene el mensaje de la validación que falló, o vacío si salió todo bien)
- De la contraseña tenemos que validar:
  - Que la longitud sea mayor o igual a 6 (si es menor, retornar el mensaje "Contraseña con menos de 6 caracteres")
  - Que la contraseña no sea una de: "123456", "password", "111111", "qwerty" (si coincide con alguna de esas contraseñas, retornar el mensaje "Contraseña muy insegura")

```js
const user1 = {
  nombre: 'Grace',
  apellido: 'Hopper',
  email: 'grace.hopper@gmail.com',
  password: '123456'
};

const user2 = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  password: '**178!Ada--'
};

const user3 = {
  nombre: 'Hedy',
  apellido: 'Lamarr',
  email: 'hlamarr@gmail.com',
  password: '1234'
};

// CODEA ACA LA SOLUCION

// casos de prueba
validarPassword(user1); // { verificada: false, mensaje: 'Contraseña muy insegura' }
validarPassword(user2); // { verificada: true, mensaje: '' }
validarPassword(user3); // { verificada: false, mensaje: 'Contraseña con menos de 6 caracteres' }
```

### **Render álbum**

- Todos los discos en Spotify, se guardan como objetos que tienen las propiedades: `id` (string), `nombre` (string), `anio` (número), `genero` (array de strings), `banda` (string), `portada` (string) e `info` (string)
- En este ejemplo, tenemos una variable `album`, con la información de un disco de Nirvana
- Necesitamos crear una función `render` que reciba un objeto por parámetro (con las mismas propiedades que el objeto que tenemos guardado en `album`)
- La función nos tiene que devolver el HTML que deberíamos agregar en nuestra web
- El HTML con el que representamos un disco es:
```html
<div class="card m-5" id="nirv1234">
  <img class="card-img-top" src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg" alt="Nirvana - With The Lights Out" />
  <div class="card-body">
    <h5 class="card-title">Nirvana</h5>
    <p class="card-text">With The Lights Out (2004) | Grunge</p>
    <a href="https://en.wikipedia.org/wiki/With_the_Lights_Out" class="btn btn-primary">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>
  </div>
</div>
```

- La variable `album` que tenemos en nuestra aplicación, ahora, es:
```js
const album = {
  id: 'nirv1234',
  nombre: 'With The Lights Out',
  anio: 2004,
  genero: 'Grunge',
  banda: 'Nirvana',
  portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
  info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
};

// CODEA ACA LA SOLUCION

render(album);
// <div class="card m-5" id="nirv1234">
//   <img class="card-img-top" src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg" alt="Nirvana - With The Lights Out" />
//   <div class="card-body">
//     <h5 class="card-title">Nirvana</h5>
//     <p class="card-text">With The Lights Out (2004) | Grunge</p>
//     <a href="https://en.wikipedia.org/wiki/With_the_Lights_Out" class="btn btn-primary">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>
//   </div>
// </div>
```

- 💡 Pista: para armar el HTML podés utilizar interpolación de strings, por ejemplo:
```js
const producto = {
  nombre: 'Notebook',
  precio: 123
}

const html = `
  <div class="producto">
    <p>${producto.nombre}</p>
    <small>ARS ${producto.precio}</small>
  </div>
`;
```

## **Volumen de caja**

- Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.

```javascript
const size = { width: 2, length: 5, height: 1 };
getBoxVolume(size); // returns 10
```

## Redondeo

- Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (`Math.floor`), hacia arriba (`Math.ceil`) y dependiendo de su punto flotante (`Math.round`)

```javascript
round(13.3); //  returns { floor: 13, ceil: 14, round: 13 }
```

## Comprar productos

- Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor `true` si puede comprarlo o `false` sino
- (Pista) deberia recorrer todo el objeto que nos pasan por parametro
- (Pista) deberia usar un acumulador o clonar products,que guarde true o false segun corresponda
- (Pista) deberia validar y guardar que el producto sea menor a dinero ingresado

```javascript
const products = { cookies: 60, chocolate: 110, soda: 120 };
const money = 115;
buyProducts(money, products); // returns { cookies: true, chocolate: true, soda: false}
```

## Comprar lista de productos

- Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, `true` si puede comprarlos a todos o `false` si no
- (Pista) deberia recorrer todo el objeto que nos pasan por parametro
- (Pista) deberia sumar el precio de todos los items
- (Pista) deberia validar el total es menor a dinero ingresado

```javascript
const products = { cookies: 60, chocolate: 110, soda: 120 };
const money = 300;
canBuyAllProduct(money, products); // returns true
```

## Obtener experiencia

- Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida
- (Pista) deberia recorrer todo uno de los objeto que nos pasan por parametro,haciendo refencia al indice(EASE,MEDIUM,HARD)
- (Pista) deberia crear un acumulador para sumar los puntajes parciales
- (Pista) deberia tomar los valores de ambos objetos con el mismo indice y multiplicarlo


```javascript
const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };
getXP(challenges, score); // returns 430 (3 * 10 + 4 * 50 + 2 * 100)
```

## Analizando strings

- Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra
- (Pista) deberia recorrer el string letra por letra
- (Pista) deberia crear un objeto que guarde LETTERS,DIGITS,SPACES
- (Pista) deberia convertilo a formato number y si retorna no retorna un NaN lo guardo en digits
- (Pista) en caso contrario revisar si es un espacio,si es asi guardarlo en spaces
- (Pista) sino guardarlo en letters

```javascript
getStringInfo("H3ll0 Wor1d"); // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }
```

## Analizando párrafos

- Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.
- (Pista) deberia recorrer el string letra por letra
- (Pista) deberia crear un objeto que guarde LETTERS,WORDS,SENTENCE
- (Pista) deberia contar las letras y guardarlas en LETTERS
<!-- https://parzibyte.me/blog/2019/10/03/javascript-saber-caracter-letra/ -->
- (Pista) deberia contar los espacios y guardarlas WORDS,deberia empezar a contar desde el uno
- (Pista) deberia contar los puntos


```javascript
getParagraphInfo("Do. Or do not. There is no try."); // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }
```

## Parámetros de búsqueda

Los parámetros de búsqueda en una URL son aquellos que vienen después del signo `?` y se escriben como `parametro=valor`, separados por el signo `&`. Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.
- (Pista) deberia usar un funcion para quedarme con lo que esta despues del `?`,la funcion que se usa con string
- ["http://www.exercises.com","keyword=objects&language=javascript&level=intermediate"]
- (Pista) con el array sobrante,el segundo elemento con indice 1,deberia extraer usar la misma funcion anterior para extraer el `&`
- ["keyword=objects","language=javascript,"level=intermediate"]
- (Pista) deberiamos crear un objeto como acumulador,ej queryParams
- (Pista) deberia recorrer el array que nos quedo,usando la misma funcion de antes sacar el `=`
- aux = ["keyword","objects"]
- (Pista) esto asignarlo al acumulador que creamos antes
- queryParams[aux[0]] = aux[1]



```javascript
parseQueryParams(
  "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
); // returns { keyword: "objects", language: "javascript", level: "intermediate }
```

## Batalla

- Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: `daño = ataque - defensaEnemigo` y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
- (Pista) deberia clonar ambos objetos
- (Pista) deberia crear un objeto para guardar las rondas y la ganadora(un acumulador)
- (Pista) deberia usar un bucle while con una condicion que pregunte si fighterA es mayor a cero y si fighterB es mayor a cero
- (Pista) deberia sumar un round
- (Pista) deberia calcular el daño del fighterA
- (Pista) deberia resta el daño del fighterA  al fighterB
- (Pista) deberia comprobar que la vida del fighterB llego a cero,si esto pasa deberia guardar el nombre del fighterA en el objeto y romper el bucle
- (Pista) deberia calcular el daño del fighterB
- (Pista) deberia resta el daño del fighterB  al fighterA
- (Pista) deberia comprobar que la vida del fighterA llego a cero,si esto pasa deberia guardar el nombre del fighterA en el objeto y romper el bucle
- (Pista) deberia retonar el objeto
```javascript
const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 };
const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 };
fight(fighterA, fighterB); // returns { rounds: 3, winner: "Chun-Li"}
```

## Búsqueda laboral

- Crear una función que dada una persona y una búsqueda de empleo, devuelva `true` si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:

```javascript
persona = {
  experience: 4,
  languages: ["JavaScript", "HTML","CSS"],
  location: ["Buenos Aires"],
  remuneration: 35000
}

busqueda = {
  experience: 1,
  languages: ["JavaScript", "HTML"],
  location: ["Buenos Aires"],
  remuneration: 40000
}//return true
```

La persona es adecuada si:

- tiene igual o más años de experiencia que la búsqueda
- los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada)
- su locación está incluida dentro de las locaciones posibles de la búsqueda
- su remuneración (pretendida) es igual o menor a la de la búsqueda

- (Pista) deberia empezar a comprobar si las condiciones mas sencillas se cumplen,como la expiencia o la remuneracion
- (Pista) deberia recorrer los array de busqueda y preguntar si estan existen en la persona
- (Pista) deberia retornar false a la primera que falla.

## Unión de objetos

- Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.

```javascript
const info1 = { a: 1, b: 2, c: 3 };
const info2 = { d: 4, b: 5 };
merge(info1, info2); // returns {a: 1, b: 2, c: 3, d: 4}
```

## Diferencia de objetos

- Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos

```javascript
const info1 = { a: 1, b: 2, c: 3 };
const info2 = { d: 4, b: 5 };
differentiate(info1, info2); // returns {a: 1, c: 3, d: 4}
```

## Eliminar propiedades

- Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array

```javascript
const data = { a: 1, b: 2, c: 3 };
const props = ["c"];
removeProperties(data, props); // returns {a: 1, b: 2}
```

## Filtrar propiedades

- Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array

```javascript
const data = { a: 1, b: 2, c: 3 };
const props = ["c", "b"];
filterProperties(data, props); // returns {b: 2, c: 3}
```

## Analizando strings

- Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra

```javascript
getStringInfo("H3ll0 Wor1d") // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }
```

## Analizando párrafos

- Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.

```javascript
getParagraphInfo("Do. Or do not. There is no try.") // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }
```

## Contar palabras

- Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que aparece. La función debe ignorar el caso ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto devuelto debe tener todas sus propiedades en minúscula  

```javascript
countWords("El que compra pocas capas pocas capas paga") // returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }
```

---

