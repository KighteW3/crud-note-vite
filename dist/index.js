import { handleForm, getNowDate } from "./btnSave.js";
// bottomShow Form
document.getElementById("bottomShow")?.addEventListener("click", function () {
  const bottomShow = document.getElementById("bottomShow");
  const hiddenContent = document.getElementById("hiddenContent");
  if (bottomShow && hiddenContent) {
    //  Hidden the button and show the hidden content
    bottomShow.style.display = "none";
    hiddenContent.classList.remove("hidden");
    hiddenContent.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1200,
      easing: "ease-in-out",
    });
  }
});
// bottomShow Form style header and footer
document.getElementById("bottomShow")?.addEventListener("click", function () {
  const bottomShow = document.getElementById("bottomShow");
  const bottomHeader = document.getElementById("bottomHeader");
  const bottomFooter = document.getElementById("bottomFooter");
  const hiddenContent = document.getElementById("hiddenContent");
  if (bottomShow && bottomHeader && bottomFooter && hiddenContent) {
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
  }
});
// NowDate Form, send information from javascript to HTML
document.addEventListener("DOMContentLoaded", () => {
  getNowDate(); // Get the current date and time
});
/* getFormData, send information from HTML to server */
document.addEventListener("DOMContentLoaded", () => {
  handleForm();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkQsa0JBQWtCO0FBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQy9ELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFzQixDQUFDO0lBQzlFLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFnQixDQUFDO0lBRTlFLElBQUksVUFBVSxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ2hDLGlEQUFpRDtRQUNqRCxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFbEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdEQsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsYUFBYTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCwwQ0FBMEM7QUFDMUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0QsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0QsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxJQUFJLFVBQVUsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ2hFLCtCQUErQjtRQUMvQixZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7UUFDL0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNyQyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDdkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUV6QywrQkFBK0I7UUFDL0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNyQyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDdkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7SUFDakQsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgseURBQXlEO0FBQ3pELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDakQsVUFBVSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7QUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFFSCx1REFBdUQ7QUFDdkQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNqRCxVQUFVLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDIn0=
