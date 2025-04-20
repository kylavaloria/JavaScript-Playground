let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("sum-el")

function add(num1, num2) {
    let sum = num1 + num2
    result.textContent = "Sum: " + sum
}

function sub(num1, num2) {
    let diff = num1 - num2
    result.textContent = "Difference: " + diff
}

function multi(num1, num2){
    let prod = num1 * num2
    result.textContent = "Product: " + prod
}

function div(num1, num2) {
    let quot = num1 / num2
    result.textContent = "Quotient: " + quot
}
