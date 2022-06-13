//prompt alert
// ask with prompt to introduce the first name and store the data in a variable
let firstName = (prompt('Ingrese su nombre: ')).toUpperCase();
// ask with prompt to introduce the last name and store the data in a variable
let lastName = (prompt('Ingrese su apellido: ')).toUpperCase();
// show a welcome massage with alert using the data the user provided
let regex = /[0-9]+/; // regex that defines that can have one or more numbers 
// check we do not have empty data
if (firstName == '' || firstName == '') {
  alert('Debe ingresar los datos solicitados!');
} 
// check the user do not click in cancel button
if (firstName == null || firstName == null ) {
  alert('No debe hacer click en cancelar');
} 
// check the user do not insert numbers
if ( !regex.test(firstName) && !regex.test(lastName) ) {
  alert(`Hola ${firstName} ${lastName}, bienvenida a Ada`);
} else {
  alert('Solo debe ingresar letras, no numeros');
}
