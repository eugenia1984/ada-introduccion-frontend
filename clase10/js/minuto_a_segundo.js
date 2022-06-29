//prompt alert
// ask with prompt to introduce minutes and store the data in a variable
let minuts= parseInt(prompt(`Ingrese los minutos para calcular su equivalente en segundos\n (en numeros enteros): `));
let seconds = minuts * 60;
// Show the equivalent in minuts with an alert
alert(`Los ${minuts} ingresados equivalen a ${seconds} segundos`);