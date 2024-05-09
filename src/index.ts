// Ocultar boton
document.getElementById("botonMostrar")?.addEventListener("click", function () {
  const botonMostrar = document.getElementById(
    "botonMostrar",
  ) as HTMLButtonElement;
  const contenidoOculto = document.getElementById(
    "contenidoOculto",
  ) as HTMLDivElement;

  if (botonMostrar && contenidoOculto) {
    botonMostrar.classList.add("oculto");
    contenidoOculto.classList.remove("oculto");
  }
});
