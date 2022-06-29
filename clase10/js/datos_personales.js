//prompt alert
// ask with prompt to introduce the first name and store the data in a variable
let firstName = (prompt('Ingrese su nombre: ')).toUpperCase();
// ask with prompt to introduce the last name and store the data in a variable
let lastName = (prompt('Ingrese su apellido: ')).toUpperCase();
// ask with prompt to introduce the age and store the data in a variable
let age = (prompt('Ingrese su edad: ')).toUpperCase();
// ask with prompt to introduce the nationality and store the data in a variable
let nationality = (prompt('Ingrese su nacionalidad: ')).toUpperCase();
// ask with prompt to introduce the DNI and store the data in a variable
let dni = (prompt('Ingrese su numero de DNI: ')).toUpperCase();
// show all the data with an alert
alert(`Nuevo usuario agregado.\n${firstName}\n${lastName}\n${age} años\nnacionalidad: ${nationality}\nDNI: ${dni}`)