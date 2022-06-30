//prompt alert
// ask with prompt to introduce base and store the data in a variable
let base = parseInt(prompt(`Ingrese la BASE del rectangulo (en numeros enteros): `));
// ask with prompt to introduce height and store the data in a variable
let height = parseInt(prompt(`Ingrese la ALTURA del rectangulo (en numeros enteros): `));
let perimeter = (base + height) * 2; 
// Show the perimeter with an alert
alert(`El perímetro del rectángulo es: ${perimeter}.`);
