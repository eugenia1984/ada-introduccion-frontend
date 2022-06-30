// Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

let availableCash = parseInt(prompt('Ingrese el dinero que tiene: '));

for (let index = 3; index > 0; index--) {

  if (availableCash > 0) {
    let service = (prompt('INGRESE EL SERVICIO A PAGAR: ')).toUpperCase();
    let amount = parseInt(prompt(`INGRESE EL MONTO DE ${service} : `));
    availableCash -= amount;
    alert(`Quedan ${index-1} servicios por ingresar.\nSALDO: ${availableCash}`);
  } else {
    alert(`No tiene el saldo suficiente`);
  }
}  




