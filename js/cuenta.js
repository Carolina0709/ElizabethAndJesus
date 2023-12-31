function countdown() {
  var now = new Date();
  var eventDate = new Date(2023, 9, 14);

  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("item-cuenta-dias").textContent = d;
  document.getElementById("item-cuenta-dias").innerText = d;

  document.getElementById("item-cuenta-horas").textContent = h;
  document.getElementById("item-cuenta-minutos").textContent = m;
  document.getElementById("item-cuenta-segundos").textContent = s;

  setTimeout(countdown, 1000);
}

countdown();
