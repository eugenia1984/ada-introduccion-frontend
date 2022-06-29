//prompt alert
// ask with prompt to introduce kilometers and store the data in a variable
let kilometers = parseInt(prompt(`Ingrese los KILOMETROS para calcular su equivalente en MILLAS\n (en numeros enteros): `));
let miles = Math.round(kilometers / 1.609344 * 100) / 100; // para redondear a dos decimales
// Show the equivalent of kilometers in miles with an alert
alert(`Los ${kilometers} kilometros ingresados equivalen a ${miles} millas`);
