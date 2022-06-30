let doubleRoom = parseInt(prompt('Ingrese la cantidad de habitaciones DOBLES que tiene -en numero-: '));
let tripleRoom = parseInt(prompt('Ingrese la cantidad de habitaciones TRIPLES que tiene -en numero-: '));
let quadrupleRoom = parseInt(prompt('Ingrese la cantidad de habitaciones CUADRUPLE que tiene -en numero-: '));

let totalGuest = doubleRoom*2 + tripleRoom*3 + quadrupleRoom*4;

alert(`El total maximo de huespedes a albergar son: ${totalGuest}`);