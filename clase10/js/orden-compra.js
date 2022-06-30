let bread = 120;
let milk = 100;
let cookie = 50;
let amountOfBread = parseInt(prompt('INGRESE CUANTOS PANES LLEVA -EN NUMERO-: '));
let amountOfMilk = parseInt(prompt('INGRESE CUANTAS LECHES LLEVA -EN NUMERO-: '));
let amountOfCookie = parseInt(prompt('INGRESE CUANTAS COOKIES LLEVA -EN NUMERO-: '));

let totalBread = bread*amountOfBread;
let totalMilk = milk*amountOfMilk;
let totalCookie = cookie*amountOfCookie;

let totalAmount = totalBread + totalMilk + totalCookie;

let cuota = parseInt(prompt('INGRESE LA CANTIDAD DE CUOTAS: '));
let amountCuota = totalAmount / cuota;

alert(`***** SU COMPRA *****\nPAN --- $ ${totalBread}\nLECHE --- $ ${totalMilk}\nCOOKIES --- $ ${totalCookie}\n************************\nPAGA EN ${cuota} CUOTAS DE $ ${amountCuota}`);