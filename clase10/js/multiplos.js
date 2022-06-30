let firstNumber = parseInt(prompt('Ingresa un numero: '));
let secondNumber = parseInt(prompt('Ingresa un segundo numero -para ver si el anterior ingresado es multiplo- : '));

if (firstNumber % secondNumber == 0 ) {
  alert(`${firstNumber} es multiplo de ${secondNumber}`)
} else {
  alert(`${firstNumber} NO es multiplo de ${secondNumber}`)
}