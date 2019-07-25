var video = document.getElementById("period");
var boton_rep = document.getElementById("reproducir");

function reproducir() {
  if (video.paused) {
    video.play();
    boton_rep.innerHTML = "pausar";
  } else {
    video.pause();
  }
}

function reiniciar() {
  video.currentTime = 0;
  video.pause();
  boton_rep.innerHTML = "reproducir";
}

function saltar(value) {
  video.currentTime += value;
}
