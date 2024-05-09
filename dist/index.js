document.getElementById("botonMostrar")?.addEventListener("click", function () {
  const botonMostrar = document.getElementById("botonMostrar");
  const contenidoOculto = document.getElementById("contenidoOculto");
  if (botonMostrar && contenidoOculto) {
    // Oculta el botón y muestra el contenido
    botonMostrar.style.display = "none";
    contenidoOculto.classList.remove("oculto");
  } else {
    // Muestra el botón y oculta el contenido
    botonMostrar.style.display = "block";
    contenidoOculto.classList.add("oculto");
  }
});
