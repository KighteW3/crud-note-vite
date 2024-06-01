/* NowDate Form, send information from javascript to HTML */
function getNowDate() {
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
    return formattedDate;
}
// formHandler.ts
function handleForm() {
    /*  call the function to handle the form */
    const form = document.getElementById("form");
    const title = document.getElementById("title");
    const textarea = document.getElementById("writenote");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const titleValue = title.value;
        const textareaValue = textarea.value;
        const dateValue = getNowDate();
        // send the form data to the server
    });
}
export { getNowDate, handleForm };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuU2F2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9idG5TYXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCxTQUFTLFVBQVU7SUFDakIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQWdCLENBQUM7SUFDNUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUMzQixNQUFNLE9BQU8sR0FBVztRQUN0QixPQUFPLEVBQUUsTUFBTTtRQUNmLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLFNBQVM7UUFDZixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNGLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMscUNBQXFDO0lBQ3JFLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxpQkFBaUI7QUFDakIsU0FBUyxVQUFVO0lBQ2pCLDJDQUEyQztJQUMzQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBb0IsQ0FBQztJQUNoRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztJQUNuRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBd0IsQ0FBQztJQUU3RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRW5CLE1BQU0sVUFBVSxHQUFXLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdkMsTUFBTSxhQUFhLEdBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM3QyxNQUFNLFNBQVMsR0FBRyxVQUFVLEVBQUUsQ0FBQztRQUUvQixtQ0FBbUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyJ9