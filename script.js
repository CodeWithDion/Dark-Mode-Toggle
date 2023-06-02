// 1.Define variable
const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// 5.Get the value form local storage
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// 3.Add this event listener
inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
})

// 2.Create This function
function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.background = "black";
    } else {
        bodyEl.style.background = "white";
    }
}

updateBody(); // it call global because even the user not clicked the checkbox the value from the local storage can work

// 4.Save it at Local stotage
function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}

