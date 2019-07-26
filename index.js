var video = document.getElementById("period");
var boton_rep = document.getElementById("reproducir");

function reproducir() {
  if (video.paused) {
    video.play();
    boton_rep.innerHTML = "<i class='far fa-pause-circle fa-3x'></i>";
  } else {
    video.pause();
    boton_rep.innerHTML = "<i class='far fa-play-circle fa-3x'></i>";
  }
}

function reiniciar() {
  video.currentTime = 0;
  video.pause();
  boton_rep.innerHTML = "<i class='far fa-play-circle fa-3x'></i>";
}

function saltar(value) {
  video.currentTime += value;
}

//carrousel
