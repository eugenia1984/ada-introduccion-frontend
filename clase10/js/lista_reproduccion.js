//prompt alert
// ask with prompt to introduce the name off the playlist and store the data in a variable
let playList = (prompt('Ingrese el nombre de la playlist: ')).toUpperCase();
// ask with prompt to introduce the first song and store the data in a variable
let firstSong = (prompt('Ingrese el nombre de la primer cancion: ')).toUpperCase();
// ask with prompt to introduce the second song and store the data in a variable
let secondSong = (prompt('Ingrese el nombre de la segunda cancion: ')).toUpperCase();
// ask with prompt to introduce the third song and store the data in a variable
let thirdSong = (prompt('Ingrese el nombre de la tercer cancion: ')).toUpperCase();
// I store the variables with the message to show in a variable
let message = `Se ha creado la playlist ${playList} con las canciones:\n ${firstSong}\n${secondSong}\n${thirdSong}`
// show the message with an alert
alert(message)