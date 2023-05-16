# balk.js
function setAlarm() {
  var alarmTime = document.getElementById('alarmTime').value;
  var currentTime = new Date().toLocaleTimeString();

  if (alarmTime === currentTime) {
    playAlarm();
  } else {
    setTimeout(setAlarm, 1000);
  }
}

function playAlarm() {
  var audio = new Audio('alarm_sound.mp3');
  audio.play();
}

// Запуск будильника при отправке формы
document.getElementById('alarmForm').addEventListener('submit', function(event) {
  event.preventDefault();
  setAlarm();
});
