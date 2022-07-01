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

/* FUNCION GRITAR */
function gritar(str) {
  return `¡ ${str} !`;
}

/* FUNCION OBTENER NOMBRE COMPLETO */
function obtenerNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

/* FUNCION SALUDAR */
function saludar(nombre) {
  return `Hola ${nombre}, un gusto conocerte`;
}

/* FUNCION SALUDAR GRITANDO*/
function saludarGritando(nombre, apellido) {
  const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
  const saludo = saludar(nombreCompleto);
  const grito = gritar(saludo);
  return grito;
}

/*FUNCION PORCENTAJE */
function percentage(amount, percentageToCalculate) {
  if(percentageToCalculate < 0 || percentageToCalculate > 100) {
    return `no se puede calcular el porcentaje`
  } else {
    return (percentageToCalculate * amount) / 100;
  }
  
}

/*FUNCION OBTENER DATOS DE CIUDAD*/
function obtenerDatosDeCiudad(nombre, poblacion, pais) {
  if (poblacion < 0) {
    poblacion = 0;
  }
  return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`;
}

/* FUNCION CONVERTIR HORAS EN SEGUNDOS*/
function convertirHorasEnSegundos(horas) {
  if (horas < 0) {
    return `Debe ingresar horas`;
  } else {
    let segundos = horas * 60 * 60;
    return segundos;
  }
}

/* FUNCION CALCULAR PERIMETRO RECTANGULO */
function calcularPerimetroRectangulo(ancho, alto) {
  if (ancho <=0 || alto <= 0) {
    return 0;
  } else {
    let perimetro = (ancho+alto)*2;
    return perimetro;    
  }
}

/* FUNCION ACEPTADEPOSITO */
function aceptaDeposito(monto) {
  if (monto <= 0) {
    return false;
  } else {
    return monto % 10 == 0;  
  }
  
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

const getValueInputToScream = () =>{
  let stringScream = d.getElementById("stringToScream").value; 
  d.getElementById("valueInputScream").innerHTML = `<p>${gritar(stringScream)}</p>`; 
}

const getValueInputFullName = () =>{
  let firstName = d.getElementById("firstName").value; 
  let lastName = d.getElementById("lastName").value; 
  d.getElementById("valueInputFullName").innerHTML = `<p>El nombre completo es: ${obtenerNombreCompleto(firstName, lastName)}</p>`; 
}

const getValueInputSaludar = () =>{
  let name = d.getElementById("name").value; 
  d.getElementById("valueInputSaludo").innerHTML = `<p>${saludar(name)}</p>`; 
}

const getValueInputSaludarGritando = () =>{
  let firstNameScream = d.getElementById("firstNameScream").value; 
  let lastNameScream = d.getElementById("lastNameScream").value; 
  d.getElementById("valueInputSaludarGritando").innerHTML = `<p>${saludarGritando(firstNameScream, lastNameScream)}</p>`; 
}

const getValueInputToPercentage = () =>{
  let totalAmount = parseInt(d.getElementById("totalAmount").value); 
  let percentageToKnow = parseFloat(d.getElementById("percentage").value); 
  d.getElementById("valueInputToPercentage").innerHTML = `<p>El ${percentageToKnow }% de ${totalAmount} es: ${percentage(totalAmount, percentageToKnow)}</p>`; 
}

const getValueInputToGetInfo = () =>{
  let city = d.getElementById("city").value; 
  let totalPeople = d.getElementById("totalPeople").value;
  let country = d.getElementById("country").value;
  d.getElementById("valueInputToGetInfo").innerHTML = `<p>${obtenerDatosDeCiudad(city, totalPeople, country)}</p>`; 
}

const getValueInputToConvertToSeconds = () =>{
  let horas = parseInt(d.getElementById("hours").value); 
  d.getElementById("valueInputToConvertToSeconds").innerHTML = `<p>Las ${horas} horas equivalen a ${convertirHorasEnSegundos(horas)} segundos.</p>`; 
}

const getValueInputToPerimeterRectangle = () =>{
  let withRectangle = parseFloat(d.getElementById("withRectangle").value); 
  let heightRectangle = parseFloat(d.getElementById("heightRectangle").value); 
  d.getElementById("valueInputToGetRectanglePerimeter").innerHTML = `<p>El perímetro del rectángulo con ${withRectangle} de ancho y ${heightRectangle} de alto es: ${calcularPerimetroRectangulo(withRectangle, heightRectangle)}.</p>`; 
}

const getValueInputToAcceptDeposit = () =>{
  let amountOfDeposit = parseInt(d.getElementById("deposit").value); 
  d.getElementById("valueInputToAcceptDeposit").innerHTML = `<p> ${aceptaDeposito(amountOfDeposit)}</p>`; 
}