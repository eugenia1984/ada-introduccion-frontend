const d = document;

/* FUNCION SUMAR */
function sumar(num1, num2) {
  return num1+num2;
}

/* FUNCION RESTAR */
function restar(num1, num2) {
  return num1-num2;
}

/* FUNCION MULTIPLICAR */
function multiplicar(num1, num2) {
  return num1*num2;
}

/* FUNCION DIVIDIR */
function dividir(num1, num2) {
  if (num2 == 0 || num2 < 0) {
    return 'No se puede dividir por cero o por un numero negativo.'
  } else {
    return num1/num2;
  }
}

/* FUNCION ES PAR */
function esPar(num1) {
  if (num1 <= 0) {
    return 'Debe ingresar un numero entero positivo'
  } else {
    return num1 % 2 == 0;  
  }
}

/* FUNCION ES IMPAR */
function esImpar(num1) {
  if (num1 <= 0) {
    return 'Debe ingresar un numero entero positivo'
  } else {
    return num1 % 2 != 0;  
  }
}

/* CALCULAR AREA DE TRIANGULO */
function calcularAreaTriangulo(base, altura) {
  let area = Math.round( ((base*altura)/2), 2);
  return area;
}

/** Para tomar los datos ingresados en los input y mostrarlos en el DOM **/
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

const getValueInputToDivide = () =>{
  let firstNumber = parseInt(d.getElementById("firstNumberDivide").value); 
  let secondNumber = parseInt(d.getElementById("secondNumberDivide").value); 
  d.getElementById("valueInputDivide").innerHTML = `<p>La division de ${firstNumber} y ${secondNumber} es: ${dividir(firstNumber, secondNumber)}</p>`; 
}

const getValueInputToIsEven = () =>{
  let firstNumber = parseInt(d.getElementById("firstNumberisEven").value); 
  d.getElementById("valueInputIsEven").innerHTML = `<p>El ${firstNumber} es par? ${esPar(firstNumber)}</p>`;
}

const getValueInputToIsOdd = () =>{
  let firstNumber = parseInt(d.getElementById("firstNumberisOdd").value); 
  d.getElementById("valueInputIsOdd").innerHTML = `<p>El ${firstNumber} es impar? ${esImpar(firstNumber)}</p>`;
}

const getValueInputAreaTriangle = () =>{
  let firstNumber = parseFloat(d.getElementById("firstNumberTriangle").value); 
  let secondNumber = parseFloat(d.getElementById("secondNumberTriangle").value); 
  d.getElementById("valueInputAreaTriangle").innerHTML = `<p>El área del triángulo de ${firstNumber} de base y ${secondNumber} de altura es es: ${calcularAreaTriangulo(firstNumber, secondNumber)}</p>`; 
}