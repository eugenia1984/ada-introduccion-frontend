# Clase 11 * 14 Junio * Funciones

---


## 馃弫 Objetivos

- Que te introduzcas a las funciones y entiendas su importancia

- Que te familiarices con la sintaxis y los conceptos principales

- Que comiences a pensar en funciones y en c贸mo reutilizar c贸digo

- Que puedas usar funciones en tu c贸digo

---

## 馃摑 Contenidos

### Funciones

- Qu茅 son, para qu茅 se utilizan

- La importancia del c贸digo reutilizable

- Funciones nombradas vs. funciones an贸nimas

- Funciones como valores

- Asignando funciones a una variable

- Funciones regulares versus funciones flecha

- Estructura de una funci贸n

- Funciones flecha

- Sintaxis de funciones flecha

- Devolviendo valores

- Invocando funciones

- Scope

### Par谩metros

- Nombres de par谩metros

- Par谩metros ignorados

- Par谩metros por default

---

### :star: Ejercicios de practica

-> [Aca pueden ver toda la practica](https://eugenia1984.github.io/ada-introduccion-frontend/clase11/index.html)

### `sumar(a, b)`

Crear una funci贸n `sumar` que tome como argumentos dos n煤meros y devuelva la suma de ellos

```javascript
sumar(2, 3) // 5
sumar(1.2, 3.4) // 4.6
sumar(3, -5) // -2
```

### `restar(a, b)`

Crear una funci贸n `restar` que tome como argumentos dos n煤meros y devuelva la resta de ellos

```javascript
restar(3, 2) // 1
restar(10, 5.5) // 4.5
restar(3, 5) // -2
```

### `multiplicar(a, b)`

Crear una funci贸n `multiplicar` que tome como argumentos dos n煤meros y devuelva la multiplicaci贸n de ellos

```javascript
multiplicar(2, 3) // 6
multiplicar(4, 0.5) // 2
```

### `dividir(a, b)`

Crear una funci贸n `dividir` que tome como argumentos dos n煤meros y devuelva la suma de ellos

```javascript
dividir(12, 3) // 4
dividir(8, 4) // 2
sumar(30, 6) // 5
```

### `esPar(numero)`

Crear una funci贸n `esPar` que tome como argumento un n煤mero y devuelva `true` si dicho n煤meros es par o `false` si no lo es

**TIP**: un n煤mero es par si divido por 2 el resto (o m贸dulo) de esa operaci贸n es 0

```javascript
esPar(2) // true
esPar(3) // false
```

### `esImpar(numero)`

Crear una funci贸n `esImpar` que tome como argumento un n煤mero y devuelva `true` si dicho n煤meros es impar o `false` si no lo es

**TIP**: un n煤mero es impar si divido por 2 el resto (o m贸dulo) de esa operaci贸n no es 0

```javascript
esImpar(2) // false
esImpar(3) // true
```

### `calcularAreaTriangulo(base, altura)`

Crear una funci贸n `calcularAreaTriangulo` que tome como argumentos la base y la altura de un tri谩ngulo y devuelva el 谩rea del mismo

```javascript
calcularAreaTriangulo(3, 4) // 6
calcularAreaTriangulo(5, 6) // 40
```

### `gritar(str)` 

Crear una funci贸n `gritar` que tome como argumento un string y devuelva el mismo string con un signo de exclamaci贸n al principio y al final del mismo

```javascript
gritar('hola') // 隆hola!
gritar('aaaaaa') // 隆aaaaaa!
```

### `obtenerNombreCompleto(nombre, apellido)`

Crear una funci贸n `obtenerNombreCompleto` que tome como argumento un nombre y un apellido y devuelva un string con la uni贸n de ambos valores

```javascript
obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'
```

### `saludar(nombre)`

Crear una funci贸n `saludar` que tome como argumentos un nombre y devuelva un saludo que lo incluya.

```javascript
saludar('Ada') // 'Hola Ada, un gusto conocerte'
```

### `saludarGritando(nombre, apellido)`

Usando las funciones anteriores (`obtenerNombreCompleto`, `saludar` y `gritar`), crear una funci贸n `saludarGritando` que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamaci贸n.

```javascript
saludarGritando('Ada', 'Lovelace') // 隆Hola Ada Lovelace, un gusto conocerte!
```

**TIP:** record谩 que los resultados de funciones se pueden guardar en variables para usarlos m谩s adelante

```javascript
const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)
console.log(grito) // 隆Hola Ada Lovelace, un gusto conocerte!
```

### obtenerDatosDeCiudad(nombre, poblacion, pais)

Crear una funci贸n `obtenerDatosDeCiudad` que tome como argumentos un string `nombre`, un n煤mero `poblacion` y un string `pais` y devuelva string con el siguiente formato: `La ciudad de NOMBRE tiene una poblaci贸n de POBLACION habitantes y est谩 ubicada en PAIS`

```javascript
obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') // 'La ciudad de Santa Fe tiene una poblaci贸n de 545606 habitantes y est谩 ubicada en Argentina'
```


### `convertirHorasEnSegundos(horas)`

Crear una funci贸n `convertirHorasEnSegundos` que tome como argumento un n煤mero de horas y devuelva la conversi贸n a segundos de dicha cantidad de horas

```javascript
convertirHorasEnSegundos(1) // 3600
convertirHorasEnSegundos(3) // 10800
convertirHorasEnSegundos(4.5) // 16200
```

### `calcularPerimetroRectangulo(ancho, alto)`

Crear una funci贸n `calcularAreaTriangulo` que tome como argumentos el ancho y el alto de un rect谩ngulo y devuelva su per铆metro

```javascript
calcularPerimetroRectangulo(3.2, 5) // 16.4
calcularPerimetroRectangulo(10, 20) // 60
```

### `calcularPorcentaje(numero, porcentaje)`

Crear una funci贸n `calcularPorcentaje` que tome como argumentos un n煤mero y un porcentaje y devuelva el valor del porcentaje correspondiente al n煤mero

```javascript
calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20
```

### `sumarPorcentaje(numero, porcentaje)`

Crear una funci贸n `sumarPorcentaje` que tome como argumentos un n煤mero y un porcentaje y devuelva la suma de dicho n煤mero con la de su porcentaje. Usar la funci贸n `calcularPorcentaje` para obtener el porcentaje a sumar

```javascript
sumarPorcentaje(100, 15) // 115
sumarPorcentaje(10, 50) // 15
sumarPorcentaje(200, 10) // 220
```

### `restarPorcentaje(numero, porcentaje)`

Crear una funci贸n `restarPorcentaje` que tome como argumentos un n煤mero y un porcentaje y devuelva la resta de dicho n煤mero con la de su porcentaje. Usar la funci贸n `calcularPorcentaje` para obtener el porcentaje a restar

```javascript
restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180
```

### `calcularFPS(fps, minutos)`

FPS son _cuadros por segundo_ (_frames per second_). Crear una una funci贸n `calcularFPS` que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cu谩ntos cuadros hubo en esa cantidad de minutos

```javascript
calcularFPS(1, 1) // 60
calcularFPS(10, 2) // 1200
calcularFPS(2, 3) // 360
```


### `obtenerCompetencia(a, b)`

Crear una funci贸n `obtenerCompetencia` que tome como argumentos dos strings `a` y `b` y devuelva un string con el formato `a vs. b`

```javascript
obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`
```

### `generarEmail(usuario, dominio)`

Crear una funci贸n `generarEmail` que tome como argumentos dos string `usuario` y `dominio` y el un string email con el formato `usuario@dominio.com`

```javascript
generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'
```

### `esMayorDeEdad(edad)`

Crear una funci贸n `esMayorDeEdad` que tome como argumento un n煤mero `edad` y devuelva `true` si es mayor de edad (18 o m谩s) o `false` de lo contrario

```javascript
esMayorDeEdad(15) // false
esMayorDeEdad(18) // true
esMayorDeEdad(27) // true
```

### `haceCalor(temperatura)`

Crear una funci贸n `haceCalor` que tome como argumento un n煤mero `temperatura` y devuelva `true` si hace calor (22 grados o m谩s) o `false` de lo contrario

```javascript
haceCalor(12) // false
haceCalor(22) // true
haceCalor(32) // true
```

### `haceFrio(temperatura)`

Crear una funci贸n `haceCalor` que tome como argumento un n煤mero `temperatura` y devuelva `true` si hace frio (12 grados o menos) o `false` de lo contrario

```javascript
haceFrio(12) // true
haceFrio(22) // false
haceFrio(3) // true
haceFrio(-2) // true
```

### `calcularPuntaje(facil, normal, dificil)`

Crear una funci贸n `calcularPuntaje` que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un n煤mero con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

```
facil: 3 puntos
normal: 5 puntos
dificil: 10 puntos
```

```javascript
calcularPuntaje(3, 0, 0) // 9
calcularPuntaje(0, 2, 1) // 20
calcularPuntaje(5, 1, 2) // 40
```

### `aceptaDeposito(monto)`

Crear una funci贸n `aceptaDeposito` que tome como argumento un n煤mero `monto` y devuelva `true` si el `monto` es divisible por 10 o `false` si no lo es

```javascript
aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true
```
