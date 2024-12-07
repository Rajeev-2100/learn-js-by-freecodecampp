let num1 = 10
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
let sumEl = document.getElementById('sum-el')
function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
    console.log(sum)
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
    console.log(subtract)
}
function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
    console.log(multiply)
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
    console.log(divide)
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2

add()
subtract()
multiply()
divide()

// Render the result of the calculation in the paragraph with id="sum-el"



// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"















