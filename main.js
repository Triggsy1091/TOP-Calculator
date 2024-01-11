// Variables
var firstNumber;
var secondNumber;
var operatorSignSelected;
var operatorSigns = ["+", "-", "/", "X"];
var operatorSelected = false;
var topDisplayValue = "";
var bottomDisplayValue = "";

const buttonContainer = document.querySelector(".grid-layout");

const calculatorButtons =
  buttonContainer.querySelectorAll(".calculator-button");

calculatorButtons.forEach((button) => {
  button.addEventListener("click", buttonPressed);
});

// Testing button presses
function buttonPressed() {
  var buttonPressed = Number(this.id);
  populateDisplay(this.id.toString())
}

// Operator functions

// Addition
function sumValues(a, b) {
  return a + b;
}

// Subtraction
function subtractValues(a, b) {
  return a - b;
}

// Multiplication
function multiplyValues(a, b) {
  return a * b;
}

// Division
function divideValues(a, b) {
  return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return sumValues(a, b);
    } else if (operator === "-") {
        return subtractValues(a, b);
    } else if (operator === "X") {
        return multiplyValues(a, b);
    } else if (operator === "/") {
        return divideValues(a, b);
    }
    return NaN;
}

function populateDisplay(value) {
    let bottomDisplay;

    if (operatorSigns.some(sign => value.includes(sign))) {
        console.log('value includes an operator sign');
    }

    if (operatorSelected === false && !topDisplayValue) {
        populateBottomDisplay(value);
    };
    
    function populateBottomDisplay(value) {
        bottomDisplayValue += value;
        bottomDisplay = document.querySelector("#bottom-display");
        bottomDisplay.textContent = bottomDisplayValue;
    };
    
    function populateTopDisplay(value) {}
}
