var reproducir = document.getElementById("audio");

function play() {
    reproducir.play();
}

function pause() {
    reproducir.pause();
}

function stop() {
        reproducir.load();
}

function volumenMenos() {
    reproducir.volume -= 0.2;
}

function volumenMas() {
    reproducir.volume += 0.2;
}

function adelantar(){
  reproducir.currentTime += 2;
}

function atrasar() {
  reproducir.currentTime -= 2;
}

reproducir.ontimeupdate = function() {
    var rango = document.getElementById("rango");
      rango.value = audio.currentTime;
};
