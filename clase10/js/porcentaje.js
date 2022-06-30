let chooseNumber = parseInt(prompt('Ingrese in numero: '));
let percentageWanted = parseInt(prompt('Ingrese el porcentaje que desea obtener del mismo: '));
let percentage = (chooseNumber * percentageWanted) / 100;
alert(`El ${percentageWanted}% del numero ingresado es: ${percentage}`)
