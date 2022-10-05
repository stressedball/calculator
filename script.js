const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');
const displayResult = document.getElementById('displayResult');
const displayInput = document.getElementById('displayInput');
const clearButton = document.getElementById('clear');
const equates = document.getElementById('equals');
let numbersArray = [];
let count = 0;
let newInput = null;
let switchCase = false;
let oldOperator = null;
let tempOperator = null;
let tempInput = null;
let result = 0;
let oldInput = 0;
let newOperator = null;
let factorialResult = 0;
let initializeDisplay = false;

let elementsArray = [numberButtons, operationButtons];

numberButtons.addEventListener('click', updateInput);
numberButtons.addEventListener('click', storeNumber);
equates.addEventListener('click', resultDisplay);
equates.addEventListener('click', resultDisplay);
operationButtons.addEventListener('click', operate);
operationButtons.addEventListener('click', updateInput);
clearButton.addEventListener('click', updateInput);

displayInput.textContent = 'do calculs';

function resultDisplay() {
    if (count === 1) {
        newInput = Number(numbersArray);
    }
    switch(oldOperator) {
        case '+':
            result = sum(oldInput, newInput);
            displayResult.textContent = result;
            break;
        case '-':
            result = substract(oldInput, newInput);
            displayResult.textContent = result;
            break;
        case '*':
            result = multiply(oldInput, newInput);
            displayResult.textContent = result;
            break;
        case '/':
            result = divide(oldInput, newInput);
            displayResult.textContent = result;
            break;
        }
}

function updateInput(input) {
    let cursorCount = false;
    
    if (cursorCount === false) {
        displayInput.classList.add('addCursor');
        cursorCount = true;
    }
    
    let inputId = input.target.id;
    
    if (input.target.id === 'equals') {
        return;
    }
    
    if (initializeDisplay === false) {
        displayInput.textContent = input.target.textContent;
        initializeDisplay = true;
    } else {
    displayInput.textContent += input.target.textContent;
    }
    
    if (input.target.id === 'clear') {
        displayInput.classList.toggle('addCursor');

        cursorCount = false;
        displayInput.textContent = input.target.textContent;
        initializeDisplay = false;
        clearFunction();
    }
}

function storeNumber(input) {
    numbersArray += input.target.textContent;
}

function operate(button) {

    newOperator = button.target.textContent;
    newInput = Number(numbersArray);
    
    if (newInput.length !== 0) {
        numbersArray = [];
    }
    
    
    if (newInput.length === 0) {
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
            console.log(result)
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

}


function clearFunction() {
    numbersArray = [];
    switchCase = false;
    oldOperator = null;
    tempOperator = null;
    tempInput = 0;
    result = 0;
    oldInput = 0;
    newOperator = null;
    factorialResult = 0;
    count = 0;
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

