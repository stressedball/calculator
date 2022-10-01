const calculatorContainer = document.getElementById('calculatorContainer');
const container = document.getElementById('container');
const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');
//DISPLAY-BUTTONS FUNCTIONALITY
const displayScreen = document.getElementById('display');
displayScreen.textContent = 'enter';

let getNumber = 0;
let operatorReference = null;
let operatorText = '';
let clear = '';
let chainNumbers = [];
let chainOperations = [];
let chainOperators = [];
//OPERATORS BUTTONS LISTENER
operationButtons.addEventListener('click', operate);
function operate(button) {
    operatorReference = button.target;
    operatorText = operatorReference.id;
    clear = 'clear';
    chainOperations.push(Number(getNumber));
    chainOperations.push(operatorText);
    chainNumbers = [];
}


//STORING NUMBERS
numberButtons.addEventListener('click', storeNumber);
function storeNumber(inputNumber) {
    chainNumbers += inputNumber.target.textContent;
    getNumber = chainNumbers;
    display(getNumber);
}

function display() {
    displayScreen.textContent = `${getNumber}`;
}

//RESULT EVENT LISTENER
const resultQuery = document.getElementById('equals');
resultQuery.addEventListener('click', result);
function result() {
    chainOperations.push(Number(getNumber));
    displayScreen.textContent = operate2();

}

//OPERATION COMPUTE
function operate2 () {
    let firstNumber = chainOperations[0];
    let firstOperator = chainOperations[1];
    let secNumber = chainOperations[2];
    let operatorId = operatorReference.id;
    switch(firstOperator) {
        case 'addition':
            return addition(firstNumber, secNumber);
        case 'substraction':
            return substraction(getNumber, getNumberTwo);
        case 'multiplication':
            return multiplication(getNumber, getNumberTwo);
        case 'division':
            return division(getNumber, getNumberTwo);
    }
}



//CLEAR BUTTON
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFunction);
function clearFunction(target) {
    if (target) {
        clear = 'clear';
        calculatorContainer.addEventListener('click', display);
        displayScreen.textContent = 'cleared';
    }
}

function addition(x, y) {
    const z = Number(x) + Number(y);
    return z;
}

function substraction() {
    const x = getNumber;
    const y = getNumberTwo;
    const z = Number(x) - Number(y);
    return z;   
}

function multiplication() {
    const x = getNumber;
    const y = getNumberTwo;
    const z = Number(x) * Number(y);
    return z;    
}

function division(){
    const x = getNumber;
    const y = getNumberTwo;
    const z = Number(x) / Number(y);
    return z;    
}