document.addEventListener("DOMContentLoaded", function() {
  var Reproductor = document.getElementById("musica");
  var Volumen = document.getElementById("volume");

  Volumen.addEventListener("input", function() {
    Reproductor.volume = Volumen.value;
  });
});



