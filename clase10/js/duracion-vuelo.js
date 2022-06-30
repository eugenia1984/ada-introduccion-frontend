let firstStop = prompt('Ingrese el destino de la primer escala: ');
let durationFirstStop = parseFloat(prompt('Ingrese la duracion del vuelo -en numeros-: '))
let secondStop = prompt('Ingrese el destino de la segunda escala: ');
let durationSecondtStop = parseFloat(prompt('Ingrese la duracion del vuelo -en numeros-: '))
let thirdStop = prompt('Ingrese el destino de la tercer escala: ');
let durationThirdtStop = parseFloat(prompt('Ingrese la duracion del vuelo -en numeros-: '))

let totalDuration = durationFirstStop + durationSecondtStop + durationThirdtStop;

alert(`El vuelo a ${firstStop} dura ${durationFirstStop}\nEl vuelo a ${secondStop} dura ${durationSecondtStop}\nEl vuelo a ${thirdStop} dura ${durationThirdtStop}\n La duración total de los tres vuelos es: ${totalDuration}`);