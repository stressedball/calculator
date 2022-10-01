const calculatorContainer = document.getElementById('calculatorContainer');
const container = document.getElementById('container');
const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');

//DISPLAY-BUTTONS FUNCTIONALITY & STORING NUMBERS
let operatorReference = null;
let operatorId = '';
let inputArray = [];
let arrayOfNumbers = [];
let arrayLength = 0;

let storedResult = null;
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
let count = 0;
let specialCount = [];
//OPERATORS BUTTONS LISTENER
operationButtons.addEventListener('click', operate);
function operate(button) {
    operatorReference = button.target;
    operatorId = operatorReference.id;

    if (count >= 3) {
        arrayOfNumbers.push(Number(inputArray));
        inputArray = [];
        storedResult = mathematics(arrayOfNumbers);
        specialCount.push(storedResult);
        displayResult.textContent = storedResult;
        arrayOfNumbers.push(operatorId);
        count++;
    }
    //HERE
    if (count === 2) {
        arrayOfNumbers.push(Number(inputArray));
        console.log(arrayOfNumbers)
        inputArray = [];
        storedResult = mathematics(arrayOfNumbers);
        displayResult.textContent = storedResult;
        specialCount.push(storedResult);
        arrayOfNumbers.push(operatorId);
        count++;
    }

    if (arrayOfNumbers.length === 1 && count === 1) {
        arrayOfNumbers.push(operatorId);
    }

    if (count === 1) {
        arrayOfNumbers.push(Number(inputArray));
        inputArray = [];
        storedResult = mathematics(arrayOfNumbers);
        displayResult.textContent = storedResult;
        specialCount.push(storedResult);
        arrayOfNumbers.push(operatorId);
        count++;
    }

    if (storedResult === null && count === 0) {
        arrayOfNumbers.push(Number(inputArray));
        arrayOfNumbers.push(operatorId);
        inputArray = [];
        count++;
    } 
    

}

function mathematics() {
    arrayLength = arrayOfNumbers.length;

    if (count > 2) {
        console.log(specialCount)
        x = specialCount[0];
        y = arrayOfNumbers[arrayLength - 1];
        if (arrayOfNumbers[arrayLength - 2] === 'addition') {
            const z = Number(x) + Number(y);
            return z;
        }
        
        if (arrayOfNumbers[arrayLength - 2] === 'substraction') {
            const z = Number(x) - Number(y);
            return z;   
        }
        
        if (arrayOfNumbers[arrayLength - 2] === 'multiplication') {
            const z = Number(x) * Number(y);
            return z;    
        }
        
        if (arrayOfNumbers[arrayLength - 2] === 'division') {
            const z = Number(x) / Number(y);
            return z;    
        }
    }

    if (count === 2) {
        if (arrayOfNumbers[arrayLength - 2] === 'multiplication') {
            x = arrayOfNumbers[arrayLength - 3];
            y = arrayOfNumbers[arrayLength - 1];
            const z = Number(x) * Number(y);
            if (arrayOfNumbers[1] === 'addition') {
                let s = arrayOfNumbers[0];
                const w = s + z;
                return w;
            }
        } else if (arrayOfNumbers[arrayLength - 2] === 'division') {
            x = arrayOfNumbers[arrayLength - 3];
            y = arrayOfNumbers[arrayLength - 1];
            const z = Number(x) * Number(y);
            if (arrayOfNumbers[1] === 'substraction') {
                let s = arrayOfNumbers[0];
                const w = s + z;
                return w;
            }
        } else {
            if (arrayOfNumbers[arrayLength - 2] === 'addition') {
                x = specialCount[0];
                y = arrayOfNumbers[arrayLength - 1];
                return z = x + y;
            } else if (arrayOfNumbers[arrayLength - 2] === 'substraction') {
                x = specialCount[0];
                y = arrayOfNumbers[arrayLength - 1];
                return z = x - y;
            }
        }
    }
    
    x = arrayOfNumbers[arrayLength - 3];
    y = arrayOfNumbers[arrayLength - 1];
    if (arrayOfNumbers[arrayLength - 2] === 'addition') {
        const z = Number(x) + Number(y);
        return z;
    }
    
    if (arrayOfNumbers[arrayLength - 2] === 'substraction') {
        const z = Number(x) - Number(y);
        return z;   
    }
    
    if (arrayOfNumbers[arrayLength - 2] === 'multiplication') {
        const z = Number(x) * Number(y);
        return z;    
    }
    
    if (arrayOfNumbers[arrayLength - 2] === 'division') {
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
    displayResult.textContent = storedResult;
    arrayOfNumbers = [];
    arrayOfNumbers.push(storedResult);
    displayInput.textContent = '';
    inputArray = [];
    count = 1;
}


//CLEAR BUTTON
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFunction);
function clearFunction() {
    inputArray = [];
    arrayOfNumbers = [];
    displayResult.textContent = 'cleared, enter input';
}

