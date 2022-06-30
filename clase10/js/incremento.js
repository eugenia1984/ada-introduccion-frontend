let startNumber = parseInt(prompt('Ingresa un numero entero: '));
let increment = parseInt(prompt('Ingresa en cuanto va a ir incrementando -en numero entero-: '));

alert(`Empezando con el ${startNumber} e incrementando en ${increment}`);

let numberIncrement = startNumber;

for (let index = 0; index < 5; index++) {
  numberIncrement += increment;
  alert(`Incremento ${index+1}) Total: ${numberIncrement}`);
}