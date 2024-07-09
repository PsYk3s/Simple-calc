let end = document.getElementById("end").valueAsDate = new Date();
const display = document.getElementById("solution");
const formula = document.getElementById("formula");
const equals = document.getElementById("result")
const clear = document.getElementById('clear')

equals.addEventListener("click", () => {

    let start = document.getElementById("start").valueAsDate;
    end = document.getElementById("end").valueAsDate;

    const age = end.getFullYear() - start.getFullYear()
    const finYear = start.getMonth() < 2 ? age - 1 : age;

    display.innerText = `Tax age = ${finYear}`
    formula.innerText = `Birth date: ${start.toJSON().slice(0, 10)}`
});

clear.addEventListener("click", () => {
    display.innerText = "0"
    formula.innerText = "-"
})






