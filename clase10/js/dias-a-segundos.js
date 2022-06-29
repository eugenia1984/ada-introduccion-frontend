//prompt alert
// ask with prompt to introduce days and store the data in a variable
let days = parseInt(prompt(`Ingrese los DIAS para calcular su equivalente en SEGUNDOS\n (en numeros enteros): `));
let seconds = days * 24 * 60 *60;
// Show the equivalent in minuts with an alert
alert(`Los ${days} ingresados equivalen a ${seconds} segundos`);
