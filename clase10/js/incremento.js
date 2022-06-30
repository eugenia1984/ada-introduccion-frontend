/*
Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.)
*/
let startNumber = parseInt(prompt('Ingresa un numero entero: '));
let increment = parseInt(prompt('Ingresa en cuanto va a ir incrementando -en numero entero-: '));
alert(`Empezando con el ${startNumber} e incrementando en ${increment}`);
let numberIncrement = startNumber;

for (let index = 0; index < 5; index++) {
  numberIncrement += increment;
  alert(`Incremento ${index+1}) Total: ${numberIncrement}`);
}