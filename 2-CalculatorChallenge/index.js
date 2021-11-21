let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumText = "Sum:"

function add(){
    document.getElementById("sum-el").textContent = sumText
    let total = num1 + num2
    document.getElementById("sum-el").textContent += total
}

function subtract(){
    document.getElementById("sum-el").textContent = sumText
    let total = num1 - num2
    document.getElementById("sum-el").textContent += total
}

function divide() {
    document.getElementById("sum-el").textContent = sumText
    let total = num1 / num2
    document.getElementById("sum-el").textContent += total
}

function multiply() {
    document.getElementById("sum-el").textContent = sumText
    let total = num1 * num2
    document.getElementById("sum-el").textContent += total
}