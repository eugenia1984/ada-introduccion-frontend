//prompt alert
// ask with prompt to introduce the street and store the data in a variable
let street = (prompt('Ingrese la calle (solo el nombre): ')).toUpperCase();
// ask with prompt to introduce the street number and store the data in a variable
let streetNumber= (prompt('Ingrese la altura: ')).toUpperCase();
// ask with prompt to introduce the flat number and store the data in a variable
let flatNumber= (prompt('Ingrese el número de departamento (si corresponde): ')).toUpperCase();
// ask with prompt to introduce the zip code and store the data in a variable
let zipCode = (prompt('Ingrese el codigo postal: ')).toUpperCase();
// ask with prompt to introduce the cityg and store the data in a variable
let city = (prompt('Ingrese la ciudad: ')).toUpperCase();
// ask with prompt to introduce the country song and store the data in a variable
let country = (prompt('Ingrese el pais: ')).toUpperCase();
// I store the variables with the message to show in a variable
let message = `La dirección que ha ingresado es: ${street} ${streetNumber} ${flatNumber}, CP: ${zipCode}, ${city}, ${country}`
// show the message with an alert
alert(message)