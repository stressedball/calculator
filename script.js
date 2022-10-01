const calculatorContainer = document.getElementById('calculatorContainer');
const container = document.getElementById('container');
const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');

//DISPLAY-BUTTONS FUNCTIONALITY & STORING NUMBERS
let operatorReference = null;
let operatorId = '';
let inputArray = [];
let arrayOfNumbers = [];
let storedResult = null;

const displayScreen = document.getElementById('display');
displayScreen.textContent = 'enter';

numberButtons.addEventListener('click', storeNumber);
function storeNumber(input) {
    inputArray += input.target.textContent;
    displayScreen.textContent = inputArray;
}
let count = 0;

//OPERATORS BUTTONS LISTENER
operationButtons.addEventListener('click', operate);
function operate(button) {
    operatorReference = button.target;
    operatorId = operatorReference.id;

    if (count > 1) {
        arrayOfNumbers.push(inputArray);
        console.log('count 3 array = ', arrayOfNumbers);
        inputArray = [];
        storedResult = mathematics(arrayOfNumbers);
        arrayOfNumbers = [];
        arrayOfNumbers.push(storedResult);
        arrayOfNumbers.push(operatorId);
        console.log('storedResult count 3= ', storedResult)
    }

    if (count < 2 && count > 0) {
        arrayOfNumbers.push(Number(inputArray));
        console.log('count 2 array = ', arrayOfNumbers);
        inputArray = [];
        storedResult = mathematics(arrayOfNumbers);
        console.log('storedResult count 2 = ', storedResult)
        arrayOfNumbers = [];
        arrayOfNumbers.push(storedResult);
        arrayOfNumbers.push(operatorId);
        count++;
    }

    if (storedResult === null && count === 0) {
        arrayOfNumbers.push(Number(inputArray));
        arrayOfNumbers.push(operatorId);
        console.log('count 1 array = ', arrayOfNumbers);

        console.log('storedResult count 1 = ', storedResult)
        inputArray = [];
        count++;
    }
}

function mathematics() {
    let x = arrayOfNumbers[0];
    let y = arrayOfNumbers[2];

    if (arrayOfNumbers[1] === 'addition') {
        const z = Number(x) + Number(y);
        return z;
    }
    
    if (arrayOfNumbers[1] === 'substraction') {
        const z = Number(x) - Number(y);
        return z;   
    }
    
    if (arrayOfNumbers[1] === 'multiplication') {
        const z = Number(x) * Number(y);
        return z;    
    }
    
    if (arrayOfNumbers[1] === 'division') {
        const z = Number(x) / Number(y);
        return z;    
    }
}



//RESULT EVENT LISTENER
const resultQuery = document.getElementById('equals');
resultQuery.addEventListener('click', result);
function result() {
    arrayOfNumbers.push(inputArray);
    storedResult = mathematics(arrayOfNumbers);
    displayScreen.textContent = storedResult;
    inputArray = [];
}


//CLEAR BUTTON
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFunction);
function clearFunction(target) {
    inputArray = [];
    arrayOfNumbers = [];
    displayScreen.textContent = 'cleared';
}

