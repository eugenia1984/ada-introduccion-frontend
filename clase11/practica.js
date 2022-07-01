const d = document;

/* FUNCION SUMAR */
function sumar(num1, num2) {
  return num1 + num2;
}

/* FUNCION RESTAR */
function restar(num1, num2) {
  return num1 - num2;
}

/* FUNCION MULTIPLICAR */
function multiplicar(num1, num2) {
  return num1 * num2;
}

const getValueInputToSum = () =>{
  let firstNumber = parseInt(d.getElementById("firstNumberSum").value); 
  let secondNumber = parseInt(d.getElementById("secondNumberSum").value); 
  d.getElementById("valueInputSum").innerHTML = `<p>La suma de ${firstNumber} y ${secondNumber} es: ${sumar(firstNumber, secondNumber)}</p>`; 
}

const getValueInputToSubtract = () =>{
  let firstNumber = parseInt(d.getElementById("firstNumberSubtract").value); 
  let secondNumber = parseInt(d.getElementById("secondNumberSubtract").value); 
  d.getElementById("valueInputSubtract").innerHTML = `<p>La resta de ${firstNumber} y ${secondNumber} es: ${restar(firstNumber, secondNumber)}</p>`; 
}

const getValueInputToMultiply = () =>{
  let firstNumber = parseInt(d.getElementById("firstNumberMultiply").value); 
  let secondNumber = parseInt(d.getElementById("secondNumberMultiply").value); 
  d.getElementById("valueInputMultiply").innerHTML = `<p>La multiplicación de ${firstNumber} y ${secondNumber} es: ${multiplicar(firstNumber, secondNumber)}</p>`; 
}