const titulo = document.querySelector("#titulo");

titulo.addEventListener("mouseover", function() {
    titulo.style.color = "black";
});

titulo.addEventListener("mouseout", function() {
  titulo.style.color = "aqua";
});