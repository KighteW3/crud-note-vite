// bottomShow Form
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

/* NowDate Form, send information from javascript to HTML */
document.addEventListener("DOMContentLoaded", (event) => {
  const date = document.getElementById("date");
  const nowDate = new Date();
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = nowDate.toLocaleString("es-ES", options);

  date.innerText = formattedDate; // Set the date to the formatted date
});
