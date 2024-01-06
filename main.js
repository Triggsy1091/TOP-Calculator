// Variables
var firstNumber;
var secondNumber;
var operatorSign;
var topDisplayValue;
var bottomDisplayValue;

const buttonContainer = document.querySelector('.grid-layout');

const calculatorButtons = buttonContainer.querySelectorAll('.calculator-button');

calculatorButtons.forEach((button) => {
        button.addEventListener('click', buttonPressed);
});

// Testing button presses
function buttonPressed() {
    var buttonPressed = Number(this.id);
    if (isNaN(buttonPressed)) {
        console.log('not a number');
    } else {
        console.log(this.id);
    }
};

// Operator functions

// Addition
function sumValues(a, b) {
    return a + b;
};

// Subtraction
function subtractValues(a, b) {
    return a - b;
};

// Multiplication
function multiplyValues(a, b) {
    return a * b;
};

// Division
function divideValues(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    if (operator = '+') {
        sumValues(a, b);
    } else if (operator = '-') {
        subtractValues(a, b);
    } else if (operator = '*') {
        multiplyValues(a, b);
    } else if (operator = '/') {
        divideValues(a, b);
    }
};

