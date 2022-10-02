const calculatorContainer = document.getElementById('calculatorContainer');
const container = document.getElementById('container');
const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');

//DISPLAY-BUTTONS FUNCTIONALITY & STORING NUMBERS
let inputArray = [];
const displayResult = document.getElementById('displayResult');
const displayInput = document.getElementById('displayInput');
displayInput.textContent = 'enter';

container.addEventListener('click', showInput);
function showInput(button) {
    displayInput.textContent += button.target.textContent;
}

numberButtons.addEventListener('click', storeNumber);
function storeNumber(input) {
    inputArray += input.target.textContent;
}

function displayOperations(something) {
    displayResult.textContent = something;
}

let count = 0;
let switchCase = false;
let previousInput = 0;
let previousOperator = null;
let tempOperator = null;
let tempInput = null;
let result = 0;
//OPERATORS BUTTONS LISTENER
operationButtons.addEventListener('click', operate);
function operate(button) {
    newOperator = button.target.id;
    let newInput = Number(inputArray);

    if (switchCase === true) {
        if (newOperator === 'multiplication' || newOperator === 'division') {
            switch(tempOperator) {
                case 'multiplication':
                    result = multiply(tempInput, newInput);
                    tempInput = result;
                    switch(previousOperator) {
                        case 'addition':
                            result = sum(previousInput, tempInput);
                            tempInput = result;
                            displayOperations(result);
                            return;
                        case 'substraction':
                            result = substract(previousInput, tempInput);
                            tempInput = result;
                            displayOperations(result);
                            return;
                    }
                case 'division':
                    result = divide(tempInput, newInput);
                    tempInput = result;
                    switch(previousOperator) {
                        case 'addition':
                            result = sum(previousInput, tempInput);
                            tempInput = result;
                            displayOperations(result);
                            return;
                        case 'substraction':
                            result = substract(previousInput, tempInput);
                            tempInput = result;
                            displayOperations(result);
                            return;
                    }
            }
        } else if (newOperator === 'addition' || newOperator === 'substraction') {
            switch(tempOperator) {
                case 'multiplication':
                    result = multiply(tempInput, newInput);
                    tempInput = result;
                    switch(previousOperator) {
                        case 'addition':
                            result = sum(previousInput, tempInput);
                            displayOperations(result);
                            flush();
                            switchCase = false;
                            return;
                        case 'substraction':
                            result = substract(previousInput, tempInput);
                            displayOperations(result);
                            flush();
                            switchCase = false;
                            return;
                    }
                case 'division':
                    result = divide(tempInput, newInput);
                    tempInput = result;
                    switch(previousOperator) {
                        case 'addition':
                            result = sum(previousInput, tempInput);
                            displayOperations(result);
                            flush();
                            switchCase = false;
                            return;
                        case 'substraction':
                            result = substract(previousInput, tempInput);
                            displayOperations(result);
                            flush();
                            switchCase = false;
                            return;
                    }
            }
        }
    }

    if (count > 0 && switchCase === false) {
        if (newOperator === 'addition' || newOperator === 'substraction') {
            switch(previousOperator) {
                case 'addition':
                    result = sum(previousInput, newInput);
                    displayOperations(result);
                    flush();
                    break;
                case 'substraction':
                    result = substract(previousInput, newInput);
                    displayOperations(result);
                    flush()
                    break
                case 'multiplication':
                    result = multiply(previousInput, newInput);
                    displayOperations(result);
                    flush();                
                    break
                case 'division':
                    result = divide(previousInput, newInput);
                    displayOperations(result);
                    flush();
                    break;
            }
        } else if (newOperator === 'multiplication' || newOperator === 'division') {
            switch(previousOperator) {
                case 'addition':
                    switchCase = true;
                    result = sum(previousInput, newInput);
                    displayOperations(result);
                    tempOperator = newOperator;
                    tempInput = newInput;
                    inputArray = [];
                    break;
                case 'substraction':
                    switchCase = true;
                    result = substract(previousInput, newInput);
                    displayOperations(result);
                    tempOperator = newOperator;
                    tempInput = newInput;
                    inputArray = [];
                    break
                case 'multiplication':
                    result = multiply(previousInput, newInput);
                    displayOperations(result);
                    flush();                
                    break
                case 'division':
                    result = divide(previousInput, newInput);
                    displayOperations(result);
                    flush();
                    break;
            }
        }
    }

    if (count === 0) {
        previousInput = newInput;
        previousOperator = newOperator;
        inputArray = [];
        count++;
    } 

    function sum(x, y) {
        console.log(x, y)
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

    function flush() {
        previousInput = result;
        previousOperator = newOperator;
        inputArray = [];
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
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFunction);
function clearFunction() {
    inputArray = [];
    displayResult.textContent = 'cleared, enter input';
}

