# Clase 14 * 23 de Junio * Arrays y Objetos II

---

## 🏁 Objetivos

- Que sigas profundizando en conceptos de los arrays y los objetos

- Que puedas reconocer el formato JSON

- Parsear un JSON y obtener los nodos

---

## 📝 Contenidos

- Arrays

- Objetos

- JSON

---

## Los ejercicios ya estan en la clase anterior

Aca dejo uno de ejemplo:

```JavaSCript
// Crear una función _separar_ que tome como argumento un string
// con emojis de perros y gatos y devuelva un string con los perros
// agrupados por un lado y los gatos por otro. 
// Ejemplo:
// separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱' 'PgPggPP'----> 'PPPPggg'


const separar = (stringEmojis) => {
  // '🐶🐱🐶🐱🐶🐱🐶🐱' ---> PgPgPgPg
  const perritos = [];
  const gatitos = [];

  for(let i = 0; i < stringEmojis.length; i++) {
    if(stringEmojis[i] === 'P'){
      perritos.push(stringEmojis[i]);
    }else{
      gatitos.push(stringEmojis[i]);
    }
  }

  const unionArrays = perritos.concat(gatitos); 
  const resultado = unionArrays.toString();

  console.log('RESULTADO', resultado);
  return resultado;
}

separar('PgPggPP');

// 
```

---

## Metodos de los Arrays:

```JavaScript
// Métodos de los arreglos

// length == longitud
// La longitud de un arreglo si inicia a partir de 1 (!= inidice)
const frutas = ['pera', 'manzana', 'platano', 'uva', 'sandía'];
console.log('longitud del arreglo', frutas.length); // 5

// A través de _length_ podeos obtener el último elemento
console.log('ultimo elemento', frutas[frutas.length - 1]);


// Push == Agregar uno o más elementos al FINAL del arreglo
const pisosEdificio = [1, 2, 3, 4];

pisosEdificio.push(5, 6, 'roofgarden');
console.log('pisosEdificio', pisosEdificio);

const persona = {
  name: 'Juana de Arco',
  age: '25',
  skills: [
    'MARTILLO',
    'ARCO',
    'HACHA',
    'FLECHA',
  ],
}

persona.skills.push('ESPADA');
console.log(persona.skills);

// unshift == Agregar uno o más elementos al INICIO del arreglo

pisosEdificio.unshift('Sótano', 'Planta baja');
console.log('Pisos edificio unshift', pisosEdificio);

// shift == eliminar el primer elemento del arreglo

const primerFruta = frutas.shift();
console.log('primerFruta', primerFruta);
console.log('arreglo modificado',frutas);

// pop == eliminar el ultimo elemento del arreglo
const ultimaFruta = frutas.pop();
console.log('ultimaFruta', ultimaFruta);
console.log('arreglo modificado x2', frutas);


// sort == ordena los elementos del arreglo y lo retorna
// Opcionalemente podemos agregar una funcion de ordenamiento

const abecedario = ['A', 'D', 'a', 'F', 'e', 'i'];
const abecedarioOrdenado = abecedario.sort();
console.log(abecedarioOrdenado);

const numeros = [1, 2, 5, 10, 35, 0];
const numerosOrdenados = numeros.sort();
console.log(numerosOrdenados);

const numbers = [4, 2, 5, 1, 3, 11, 22];
const numbersOrdenados = numbers.sort((a, b) => {
  return a - b;
});
console.log('ordenamiento con funcion', numbersOrdenados);

// reverse == Permite revetir el orden del arreglo

pisosEdificio.reverse();
console.log('REVERSE', pisosEdificio);

// concat == Unir dos arreglos en uno solo
let pares = [0, 2, 4, 6, 8];
let impares = [1, 3, 5, 7, 9];
let todosLosNumeros = pares.concat(impares);
console.log('CONCAT', todosLosNumeros);

// join == Unir los valores del arreglo en un string
const verduras = ['calabaza', 'papa', 'apio'];
const precios = [12, 34, 75, 86];

const unionVerduras = verduras.join('-');
console.log('JOIN', unionVerduras);

const unionPrecios = precios.join(',');
console.log('JOIN numeros', unionPrecios);

// indexOf == retornar el primer indice donde se encuentre un elemento
// Cuando el elemento a busar no existe, retorna -1
const canciones = ['music', 'dance', 'music', 'baile', 'dance', 'ritmo'];
console.log(canciones.indexOf('baile'));
console.log(canciones.indexOf('dance'));
console.log(canciones.indexOf('noExiste'));

// toString == Une los elementos de un array convirtiendolo en un solo string
console.log(canciones.toString());

console.log('------------------------------');

// RECORRER ARREGLOS

/* Ciclo for 
  La palabra reservada _for_
  Parentesis que llevan la condicional, el limite y el incremento
  Llaves que contienen las sentencias
    for(let i = 0; i < array.length; i++){ tareas a realizar}
*/

const nombres = [
  'Cecilia',
  'Daniela Z',
  'Daniela',
  'Gianne',
  'Lucero',
  'Talia',
  'Keyla',
];

// console.log(`Hola ${nombres[0]}`);
// console.log(`Hola ${nombres[1]}`);
// console.log(`Hola ${nombres[2]}`);

for(let i = 0; i < nombres.length; i++){
  console.log(`Hola ${nombres[i]} desde el for`);
};

// forEach == permite recorrer un arreglo por cada uno de los elementos
/**
 * palabra reservada _forEach_
 * parentesis que esperan una funcion como parametro
 * esta funcion tambien usa otro parametro que es el elemento del arreglo
 * 
 * arreglo.forEach( (elementoDelArreglo)=>{tareas a ejecutar} )
 */

const calles = ['norte', 'sur', 'este', 'oeste'];
calles.forEach((calle) => {
  console.log(`La calle ${calle} está en el mapa`)
});

// Map == Crear un nuevo arreglo con el resultado de lo que indiquemos en el ciclo 
const apellidos = ['salazar', 'guzman', 'lopez', 'juarez'];
const apellidosMayusculas = apellidos.map((apellido) => {
  return apellido.toUpperCase();
})
console.log(apellidosMayusculas);

const numerosBase = [1, 2, 3, 4, 5, 6];
const numerosCuadrado = numerosBase.map((numero)=>{
  return numero * numero
});

console.log(numerosCuadrado);

// Filter == Crea un nuevo arreglo a través de un filtrado

const costos = [23, 1, 2, 5, 6, 98, 67];
const costosFiltrados = costos.filter((costo) => {
  return (costo > 15);
});
console.log(costosFiltrados);

const salazar = apellidos.filter((apellido) => {
  return (apellido === 'salazar')
})

console.log(salazar)

// reduce == reducir un arreglo para obtener un solo elemento
// su funcion interna requiere de dos parametros:
// acumulador / elemento 

const totalCostos = costos.reduce((total, costo) => {
  return total + costo
})

console.log('Total de Costos', totalCostos);



/////////////////////////

// Crear una función obtenerMenor que tome como
// argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

// obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2

const arrayNumbers = [5, 7, 99, 34, 54, 2, 12];

const obtenerNumeroMenor = (numeros) => {
  const arregloOrdenado = arrayNumbers.sort((a, b) => {
    return a - b;
  });

  console.log(arregloOrdenado.shift());
}

obtenerNumeroMenor(arrayNumbers);
```


### Objetos:

```JavaScript
// Object.keys, regresa un arreglo con las propiedades del objeto

const persona = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  edad: 30,
  saludar: () => { console.log('Hola, me da gusto verte')},
  esMadre: false
};

const propiedades = Object.keys(persona);

for(let i = 0; i < propiedades.length; i++) {
  let propiedadPersona = propiedades[i];

  console.log(`La propiedad ${propiedadPersona} tiene como valor ${persona[propiedadPersona]}`)
}

// -------------- Ejercicios ----------

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
const todasLasPropiedades = Object.keys(producto);
console.log(todasLasPropiedades);

for(let i = 0; i < todasLasPropiedades.length; i++) {
  let propiedad = todasLasPropiedades[i];

  console.log(`producto['${propiedad}'] -> ${producto[propiedad]}`)
}
```

---