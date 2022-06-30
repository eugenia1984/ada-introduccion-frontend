// Function to estimate the walking time (5kms per hour)
function getTimeOnFoot(kms) {
  return Math.round(kms/5 * 100) / 100;
}

// Function to estimate the time on bike ( 15 kms per hour)
function getTimeOnBike(kms) {
  return Math.round(kms/15 * 100) / 100;;
}

// Function to estimate the time on bus ( 70 kms por hour)
function getTimeOnBus(kms) {
  return Math.round(kms/70 * 100) / 100;;
}

let kilometers = parseFloat(prompt('Ingresa los kilometros a recorrer: '));
let timeOnFoot = getTimeOnFoot(kilometers);
let timeOnBike = getTimeOnBike(kilometers);
let timeOnBus = getTimeOnBus(kilometers);
alert(`Tardará :\n- ${timeOnFoot} hs a pie (5km/h)\n- ${timeOnBike} hs en bicicleta (15km/h)\n- ${timeOnBus} hs en bus (70km/h)`)