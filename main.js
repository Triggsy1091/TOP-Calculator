// Variables
var firstNumber;
var secondNumber;
var operatorSign;

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