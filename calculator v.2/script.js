const displayInput = document.getElementById("display");
const acButton = document.getElementById("ac");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const equalButton = document.getElementById("equal");
const pointButton = document.getElementById("point");
const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");

let displayValue = "";



function clear() {
    displayValue = "";
    displayInput.value = displayValue;
}

acButton.addEventListener("click", clear);

// Button Functions
function divideButton() {
    displayValue += "&divide;";
    displayInput.value = displayValue;
}