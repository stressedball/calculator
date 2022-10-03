const calculatorContainer = document.getElementById('calculatorContainer');
const container = document.getElementById('container');
const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');
const displayResult = document.getElementById('displayResult');
const displayInput = document.getElementById('displayInput');
const clearButton = document.getElementById('clear');

//DISPLAY-BUTTONS FUNCTIONALITY & STORING NUMBERS
let count = 0;
let displayCount = 0;
let inputArray = [];
let numbersArray = [];

numberButtons.addEventListener('click', storeNumber);
function storeNumber(input) {
    numbersArray += input.target.textContent;
    displayAll(Number(numbersArray));
}

displayInput.textContent = 'enter input';
let localText = '';
function displayAll(...args) {
    args = arguments;
    let localNumber = 0;
    let displayArrays = [];

    if (args.length === 2) {
        localText = args[0] + args[1];
        displayInput.localText = localText;
    }
    if (typeof args[0] === 'number') {
        displayInput.textContent = localText + `${args[0]}`;
    } else {
       displayInput.textContent += args[0];
       localText = displayInput.textContent;
    }
}

let newInput = null;
let switchCase = false;
let oldOperator = null;
let tempOperator = null;
let tempInput = null;
let result = 0;
let oldInput = 0;
let newOperator = 0;
let factorialResult = 0;
//OPERATORS BUTTONS LISTENER
operationButtons.addEventListener('click', operate);
function operate(button) {

    newOperator = button.target.textContent;
    newInput = Number(numbersArray);
    if (newInput.length !== 0) {
        displayAll(button.target.textContent);
        numbersArray = [];
    }
    
    
    if (newInput.length === 0) {
        displayAll(0, newOperator);
        oldOperator = newOperator;
        return;
    }
    
    if (count === 0) {
        oldOperator = newOperator;
        oldInput = newInput;
        count++;
        return;
    }

  
    
    if (switchCase === true) {
        if (newOperator === '+' || newOperator === '-') {
            if (oldOperator === '*') {
                newInput = multiply(oldInput, newInput);
                oldInput = tempInput;
                oldOperator = tempOperator;
                switchCase === false;
            } else if (oldOperator === '/') {
                newInput = divide(oldInput, newInput);
                oldInput = tempInput;
                oldOperator = tempOperator;
                switchCase === false;
            }
        } else if (newOperator === '*') {
            if (oldOperator === '*') {
                oldInput = multiply(oldInput, newInput);
                if (tempOperator === '+') {
                    displayResult.textContent = sum(tempInput, oldInput);
                    oldOperator = newOperator;
                    return;
                } else if (tempOperator === '-') {
                    displayResult.textContent = substract(tempInput, oldInput);
                    oldOperator = newOperator;
                    return;
                }
            } else if (oldOperator === '/') {
                oldInput = divide(oldInput, newInput);
                if (tempOperator === '+') {
                    displayResult.textContent = sum(tempInput, oldInput);
                    oldOperator = newOperator;
                    return;
                } else if (tempOperator === '-') {
                    displayResult.textContent = substract(tempInput, oldInput);
                    oldOperator = newOperator;
                    return;
                }
            }
        }
    }

    if (newOperator === '+' || newOperator === '-') {
        if (oldOperator === '+') {
            result = sum(oldInput, newInput);
            displayResult.textContent = result;
            oldInput = result;
            oldOperator = newOperator;
        } else if (oldOperator === '-') {
            result = substract(oldInput, newInput);
            displayResult.textContent = result;
            oldInput = result;
            oldOperator = newOperator;
        }
    }
    
    if (newOperator === '+' || newOperator === '-') {
        if (oldOperator === '*') {
            result = multiply(oldInput, newInput);
            displayResult.textContent = result;
            oldInput = result;
            oldOperator = newOperator;
            return;
        } else if (oldOperator === '/') {
            result = divide(oldInput, newInput);
            displayResult.textContent = result;
            oldInput = result;
            oldOperator = newOperator;
            return;     
        }
    }
    
    if (newOperator === '*' || newOperator === '/') {
        switch (oldOperator) {
            case '*':
                result = multiply(oldInput, newInput);
                displayResult.textContent = result;
                oldInput = result;
                oldOperator = newOperator;
                break;
            case '/':
                result = divide(oldInput, newInput);
                displayResult.textContent = result;
                oldInput = result;
                oldOperator = newOperator;
                break;
            case '+':
                displayResult.textContent = sum(oldInput, newInput);
                tempInput = oldInput;
                tempOperator = oldOperator;
                oldInput = newInput;
                oldOperator = newOperator;
                switchCase = true;
                break;
            case '-':
                displayResult.textContent = substract(oldInput, newInput);
                tempInput = oldInput;
                tempOperator = oldOperator;
                oldInput = newInput;
                oldOperator = newOperator;
                switchCase = true;
                break;
        }
    } 
   
    
    
    function sum(x, y) {
        let z = x + y;
        return z;
    }

    function substract(x, y) {
        let z = x - y;
        return z;
    }

    function multiply(x, y) {
        let z = x * y;
        return z;
    }

    function divide(x, y) {
        let z = x / y;
        return z;
    }
}

//RESULT EVENT LISTENER
// const resultQuery = document.getElementById('equals');
// resultQuery.addEventListener('click', result);
// function result() {

//     storedResult = mathematics(arrayOfNumbers);
//     displayResult.textContent = storedResult;
//     displayInput.textContent = '';
//     inputArray = [];
//     count = 1;
// }


//CLEAR BUTTON
clearButton.addEventListener('click', clearFunction);
function clearFunction() {
    inputArray = [];
    displayResult.textContent = 'cleared, enter input';
}


