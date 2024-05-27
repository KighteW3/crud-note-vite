// bottomShow Form
document.getElementById("bottomShow")?.addEventListener("click", function () {
  const bottomShow = document.getElementById("bottomShow");
  const bottomHeader = document.getElementById("bottomHeader");
  const bottomFooter = document.getElementById("bottomFooter");
  const hiddenContent = document.getElementById("hiddenContent");
  if (bottomShow && bottomHeader && bottomFooter && hiddenContent) {
    //  Hidden the button and show the hidden content
    bottomShow.style.display = "none";
    // header source specifications
    bottomHeader.style.textTransform = "uppercase";
    bottomHeader.style.fontFamily = "Roboto";
    bottomHeader.style.fontSize = "52px";
    bottomHeader.style.paddingTop = "0rem";
    bottomHeader.style.fontWeight = "bold";
    bottomHeader.style.letterSpacing = "2px";

    // footer source specifications
    bottomFooter.style.fontFamily = "Roboto";
    bottomFooter.style.fontSize = "20px";
    bottomFooter.style.fontWeight = "bold";
    bottomFooter.style.letterSpacing = "1px";
    bottomFooter.style.paddingBottom = "8px";
    bottomFooter.style.textTransform = "uppercase";

    // (hidden content)
    hiddenContent.classList.remove("hidden");
  } else {
    // Show the button and hide the hidden content
    if (bottomShow && hiddenContent !== null) {
      // Ensures that bottomShow is not null before attempting to change its display property
      bottomShow.style.display = "block";

      // Ensures that hiddenContent is not null before attempting to add the class "hidden"
      hiddenContent.classList.add("hidden");
    }
  }
});

/* NowDate Form, send information from javascript to HTML */
document.addEventListener("DOMContentLoaded", (_event) => {
  const date = document.getElementById("date") as HTMLElement;
  const nowDate = new Date();
  const options: object = {
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
