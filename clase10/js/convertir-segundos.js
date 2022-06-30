let seconds = parseInt(prompt('Ingrese los segundos para calcular su equivalente en horas, minutos y segundos: '))

function secondsToString(seconds) {
  let hour = Math.floor(seconds / 3600);
  hour = (hour < 10)? '0' + hour : hour;
  let minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  let second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return `${hour} hs : ${minute} min : ${second} seg`;
}

alert(`${secondsToString(seconds)}`);