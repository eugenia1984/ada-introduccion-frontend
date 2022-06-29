//prompt alert
// ask with prompt to introduce base and store the data in a variable
let base = parseInt(prompt(`Ingrese la BASE del triangulo (en numeros enteros): `));
// ask with prompt to introduce height and store the data in a variable
let height = parseInt(prompt(`Ingrese la ALTURA del triangulo (en numeros enteros): `));
let area =(base * height) / 2; // para calcular el area
// Show the  area of a triangle with an alert
alert(`El área del triangulo es: ${area}.`);
