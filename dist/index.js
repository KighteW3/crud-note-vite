"use strict";
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
    bottomHeader.style.fontWeight = "lighter";
    bottomHeader.style.letterSpacing = "2px";
    // footer source specifications
    bottomFooter.style.fontFamily = "Roboto";
    bottomFooter.style.fontSize = "20px";
    bottomFooter.style.fontWeight = "lighter";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtCQUFrQjtBQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0QsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELElBQUksVUFBVSxJQUFJLFlBQVksSUFBSSxZQUFZLElBQUksYUFBYSxFQUFFLENBQUM7UUFDaEUsaURBQWlEO1FBQ2pELFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNsQywrQkFBK0I7UUFDL0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1FBQy9DLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDckMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN2QyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFekMsK0JBQStCO1FBQy9CLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDckMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1FBRS9DLG1CQUFtQjtRQUNuQixhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO1NBQU0sQ0FBQztRQUNOLDhDQUE4QztRQUM5QyxJQUFJLFVBQVUsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekMsdUZBQXVGO1lBQ3ZGLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUVuQyxxRkFBcUY7WUFDckYsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILDREQUE0RDtBQUM1RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUN2RCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQztJQUM1RCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLE1BQU0sT0FBTyxHQUFXO1FBQ3RCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLFNBQVM7UUFDZCxLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxxQ0FBcUM7QUFDdkUsQ0FBQyxDQUFDLENBQUMifQ==

/* Prueba, arreglar mañana que el icono no haga contacto con el boton */
const btnSave = document.getElementById("btnSave");
const iconPlus = document.getElementsByClassName("fa-solid fa-plus")[0];

btnSave.addEventListener("click", function (e) {
  console.log(e.target);
});

iconPlus.addEventListener("click", function (e) {
  console.log(e.stopPropagation());
});
