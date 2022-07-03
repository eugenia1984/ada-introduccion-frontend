const d = document;

/******** FUNCIONES **********/
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

/* FUNCION DIVIDIR */
function dividir(num1, num2) {
  // I check that the divider isn`t 0 or a negative number
  if (num2 == 0 || num2 < 0) {
    return "No se puede dividir por cero o por un numero negativo.";
  } else {
    return num1 / num2;
  }
}

/* FUNCION ES PAR */
function esPar(num1) {
  if (num1 <= 0) {
    return "Debe ingresar un numero entero positivo";
  } else {
    return num1 % 2 == 0;
  }
}

/* FUNCION ES IMPAR */
function esImpar(num1) {
  if (num1 <= 0) {
    return "Debe ingresar un numero entero positivo";
  } else {
    return num1 % 2 != 0;
  }
}

/* CALCULAR AREA DE TRIANGULO */
function calcularAreaTriangulo(base, altura) {
  let area = Math.round((base * altura) / 2, 2);

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
  if (percentageToCalculate < 0 || percentageToCalculate > 100) {
    return `no se puede calcular el porcentaje`;
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
  // I check that the hours are a positive number
  if (horas < 0) {
    return `Debe ingresar horas`;
  } else {
    let segundos = horas * 60 * 60;
    return segundos;
  }
}

/* FUNCION CALCULAR PERIMETRO RECTANGULO */
function calcularPerimetroRectangulo(ancho, alto) {
  // I check that the whith and height are positive numbers
  if (ancho <= 0 || alto <= 0) {
    return 0;
  } else {
    let perimetro = (ancho + alto) * 2;
    return perimetro;
  }
}

/* FUNCION PARA CALCULAR LE PORCENTAJE*/
function calcularPorcentaje(numero, porcentaje) {
  // with and if else I check that the amount and the pergentage are positive numbers
  if (numero <= 0 || porcentaje < 0) {
    return "No se puede calcular el porcentaje";
  } else {
    return (porcentaje * numero) / 100;
  }
}

/* FUNCION SUMAR PORCENTAJE*/
function sumarPorcentaje(numero, porcentaje) {
  if (numero <= 0 || porcentaje <= 0) {
    return "No se puede calcular el porcentaje sumado";
  } else {
    return numero + calcularPorcentaje(numero, porcentaje);
  }
}
/* FUNCION RESTAR PORCENTAJE*/
function restarPorcentaje(numero, porcentaje) {
  if (numero <= 0 || porcentaje <= 0 || porcentaje > 100) {
    return "No se puede calcular el porcentaje";
  } else {
    return numero - calcularPorcentaje(numero, porcentaje);
  }
}

/* FUNCION CALCULAR FPS*/
function calcularFPS(fps, minutos) {
  if (fps <=0 || minutos <= 0) {
    return `No se puede calcular`;
  } else {
    return fps * ( 1 * minutos);
  }
}

/* FUNCION OBTENER COMPETENCIA*/
function obtenerCompetencia(a, b) {
  return ` ${a} vs. ${b}`;
}

/*  FUNCION GENERAR EMAIL*/
function generarEmail(usuario, dominio) {
  return `${usuario}@${dominio}.com`;
}

/* FUNCION ES MAYOR DE EDAD */
function esMayorDeEdad(edad) {
  return edad >= 18;
}

/* FUNCION HACE CALOR */
function haceCalor(temperatura) {
  return temperatura >= 22;
}

/* FUNCION HACE FRIO */
function haceFrio(temperatura) {
  return temperatura <= 12;
}

/* FUNCION CALCULAR PUNTAJE */
function calcularPuntaje(facil, normal, dificil) {
  let puntaje = facil*3 + normal*5 + dificil*10;
  return puntaje;
}

/* FUNCION ACEPTA DEPOSITO */
function aceptaDeposito(monto) {
  // I check the amout to deposite is a positive number
  if (monto <= 0) {
    return false;
  } else {
    return monto % 10 == 0;
  }
}
/****** Para tomar los datos ingresados en los input y mostrarlos en el DOM ******/
const getValueInputToSum = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberSum").value);
  let secondNumber = parseInt(d.getElementById("secondNumberSum").value);

  d.getElementById(
    "valueInputSum"
  ).innerHTML = `La suma de ${firstNumber} y ${secondNumber} es: ${sumar(
    firstNumber,
    secondNumber
  )}`;
};

const getValueInputToSubtract = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberSubtract").value);
  let secondNumber = parseInt(d.getElementById("secondNumberSubtract").value);

  d.getElementById(
    "valueInputSubtract"
  ).innerHTML = `La resta de ${firstNumber} y ${secondNumber} es: ${restar(
    firstNumber,
    secondNumber
  )}`;
};

const getValueInputToMultiply = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberMultiply").value);
  let secondNumber = parseInt(d.getElementById("secondNumberMultiply").value);

  d.getElementById(
    "valueInputMultiply"
  ).innerHTML = `La multiplicación de ${firstNumber} y ${secondNumber} es: ${multiplicar(
    firstNumber,
    secondNumber
  )}`;
};

const getValueInputToDivide = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberDivide").value);
  let secondNumber = parseInt(d.getElementById("secondNumberDivide").value);

  d.getElementById(
    "valueInputDivide"
  ).innerHTML = `La division de ${firstNumber} y ${secondNumber} es: ${dividir(
    firstNumber,
    secondNumber
  )}`;
};

const getValueInputToIsEven = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberisEven").value);

  d.getElementById(
    "valueInputIsEven"
  ).innerHTML = `El ${firstNumber} es par? ${esPar(firstNumber)}`;
};

const getValueInputToIsOdd = () => {
  let firstNumber = parseInt(d.getElementById("firstNumberisOdd").value);

  d.getElementById(
    "valueInputIsOdd"
  ).innerHTML = `El ${firstNumber} es impar? ${esImpar(firstNumber)}`;
};

const getValueInputAreaTriangle = () => {
  let firstNumber = parseFloat(d.getElementById("firstNumberTriangle").value);
  let secondNumber = parseFloat(d.getElementById("secondNumberTriangle").value);

  d.getElementById(
    "valueInputAreaTriangle"
  ).innerHTML = `El área del triángulo de ${firstNumber} de base y ${secondNumber} de altura es es: ${calcularAreaTriangulo(
    firstNumber,
    secondNumber
  )}`;
};

const getValueInputToScream = () => {
  let stringScream = d.getElementById("stringToScream").value;
  
  d.getElementById("valueInputScream").innerHTML = `${gritar(stringScream)}`;
};

const getValueInputFullName = () => {
  let firstName = d.getElementById("firstName").value;
  let lastName = d.getElementById("lastName").value;

  d.getElementById(
    "valueInputFullName"
  ).innerHTML = `El nombre completo es: ${obtenerNombreCompleto(
    firstName,
    lastName
  )}`;
};

const getValueInputSaludar = () => {
  let name = d.getElementById("name").value;

  d.getElementById("valueInputSaludo").innerHTML = `${saludar(name)}`;
};

const getValueInputSaludarGritando = () => {
  let firstNameScream = d.getElementById("firstNameScream").value;
  let lastNameScream = d.getElementById("lastNameScream").value;

  d.getElementById("valueInputSaludarGritando").innerHTML = `${saludarGritando(
    firstNameScream,
    lastNameScream
  )}`;
};

const getValueInputToPercentage = () => {
  let totalAmount = parseInt(d.getElementById("totalAmount").value);
  let percentageToKnow = parseFloat(d.getElementById("percentage").value);
  
  d.getElementById("valueInputToPercentage").innerHTML = `El ${percentageToKnow}% de ${totalAmount} es: ${percentage(totalAmount,percentageToKnow)}`;
};

const getValueInputToGetInfo = () => {
  let city = d.getElementById("city").value;
  let totalPeople = d.getElementById("totalPeople").value;
  let country = d.getElementById("country").value;

  d.getElementById("valueInputToGetInfo").innerHTML = `${obtenerDatosDeCiudad(
    city,
    totalPeople,
    country
  )}`;
};

const getValueInputToConvertToSeconds = () => {
  let horas = parseInt(d.getElementById("hours").value);

  d.getElementById(
    "valueInputToConvertToSeconds"
  ).innerHTML = `Las ${horas} horas equivalen a ${convertirHorasEnSegundos(
    horas
  )} segundos.`;
};

const getValueInputToPerimeterRectangle = () => {
  let withRectangle = parseFloat(d.getElementById("withRectangle").value);
  let heightRectangle = parseFloat(d.getElementById("heightRectangle").value);

  d.getElementById(
    "valueInputToGetRectanglePerimeter"
  ).innerHTML = `El perímetro del rectángulo con ${withRectangle} de ancho y ${heightRectangle} de alto es: ${calcularPerimetroRectangulo(
    withRectangle,
    heightRectangle
  )}.`;
};

const getValueInputToConvertToCalculatePercentage = () => {
  let numberWithoutPercentage = parseFloat(
    d.getElementById("numberWithoutPercentage").value
  );
  let numberOfPercentage = parseFloat(
    d.getElementById("numberOfPercentage").value
  );
  let percentage = calcularPorcentaje(
    numberWithoutPercentage,
    numberOfPercentage
  );

  d.getElementById(
    "valueInputToConvertToCalculatePercentage"
  ).innerHTML = `${percentage}`;
};

const getValueInputToConvertToCalculatePercentageSum = () => {
  let numberWithoutPercentageWithoutSum = parseFloat(
    d.getElementById("numberWithoutPercentageWithoutSum").value
  );
  let numberOfPercentageToSum = parseFloat(
    d.getElementById("numberOfPercentageToSum").value
  );

  d.getElementById(
    "valueInputToConvertToCalculatePercentageToSum"
  ).innerHTML = `${sumarPorcentaje( numberWithoutPercentageWithoutSum, numberOfPercentageToSum)}`;
};

const getValueInputToConvertToCalculatePercentageSubstract = () => {
  let numberWithoutPercentageWithoutSubstract = parseFloat(
    d.getElementById("numberWithoutPercentageWithoutSubstract").value
  );
  let numberOfPercentageToSubstract= parseFloat(
    d.getElementById("numberOfPercentageToSubstract").value
  );

  d.getElementById(
    "valueInputToConvertToCalculatePercentageToSubstract"
  ).innerHTML = `${restarPorcentaje( numberWithoutPercentageWithoutSubstract, numberOfPercentageToSubstract)}`;
};

const getValueInputToConvertToFramePerSecond = () => {
  let framesPerSecond = parseInt(
    d.getElementById("framesPerSecond").value
  );
  let minutsAmount = parseInt(
    d.getElementById("minutsAmount").value
  );

  d.getElementById(
    "valueInputToConvertToCalculateFramesPerSecond"
  ).innerHTML = `${calcularFPS( framesPerSecond, minutsAmount)}`;
};

const getValueInputToConvertToCalculateRivals = () => {
  let firstRival = d.getElementById("firstRival").value;
  let secondRival = d.getElementById("secondRival").value;

  d.getElementById(
    "valueInputToConvertToCalculateRivals"
  ).innerHTML = `${obtenerCompetencia( firstRival, secondRival)}`;
};

const getValueInputToCreateEmail = () => {
  let user = d.getElementById("user").value;
  let domain = d.getElementById("domain").value;

  d.getElementById("valueInputToCreateEmail").innerHTML = `${generarEmail(
    user,
    domain
  )}`;
};

const getValueInputToIsOlder = () => {
  let isOlder = parseInt(d.getElementById("isOlder").value);
  
  d.getElementById("valueInputToIsOlder").innerHTML = `${esMayorDeEdad(
    isOlder
  )}`;
};

const getValueInputToIsTemperatureHot = () => {
  let isTemperatureHot = parseFloat(d.getElementById("isTemperatureHot").value);

  d.getElementById("valueInputToIsTemperatureHot").innerHTML = `${haceCalor(
    isTemperatureHot
  )}`;
};

const getValueInputToIsTemperatureCold = () => {
  let isTemperatureCold = parseFloat(
    d.getElementById("isTemperatureCold").value
  );

  d.getElementById("valueInputToIsTemperatureCold").innerHTML = `${haceFrio(
    isTemperatureCold
  )}`;
};

const getValueInputToGetScore = () => {
  let easy = parseInt(d.getElementById("easy").value);
  let normal = parseInt(d.getElementById("normal").value);
  let hard = parseInt(d.getElementById("hard").value);

  d.getElementById("valueInputToGetScore").innerHTML = `${calcularPuntaje(easy, normal, hard)}`;
};


const getValueInputToAcceptDeposit = () => {
  let amountOfDeposit = parseInt(d.getElementById("deposit").value);

  d.getElementById("valueInputToAcceptDeposit").innerHTML = `${aceptaDeposito(
    amountOfDeposit
  )}`;
};
