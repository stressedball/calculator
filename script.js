const calculatorContainer = document.getElementById('calculatorContainer');
const container = document.getElementById('container');
const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');
//DISPLAY-BUTTONS FUNCTIONALITY
const displayScreen = document.getElementById('display');
displayScreen.textContent = 'enter';

let operatorReference = null;
let operatorText = '';
let clear = '';
let chainNumbers = [];
let chainOperations = [];
//OPERATORS BUTTONS LISTENER
operationButtons.addEventListener('click', operate);
function operate(button) {
    operatorReference = button.target;
    operatorText = operatorReference.id;
    clear = 'clear';
    chainOperations.push(Number(chainNumbers));
    chainOperations.push(operatorText);
    chainNumbers = [];
}


//STORING NUMBERS
numberButtons.addEventListener('click', storeNumber);
function storeNumber(inputNumber) {
    chainNumbers += inputNumber.target.textContent;
    displayScreen.textContent = `${chainNumbers}`;
}

//RESULT EVENT LISTENER
const resultQuery = document.getElementById('equals');
resultQuery.addEventListener('click', result);
function result() {
    chainOperations.push(Number(chainNumbers));
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
            return substraction(firstNumber, secNumber);
        case 'multiplication':
            return multiplication(firstNumber, secNumber);
        case 'division':
            return division(firstNumber, secNumber);
    }
}



//CLEAR BUTTON
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFunction);
function clearFunction(target) {
    if (target) {
        chainNumbers = [];
        chainOperations = [];
        displayScreen.textContent = 'cleared';
    }
}

function addition(x, y) {
    const z = Number(x) + Number(y);
    return z;
}

function substraction(x, y) {
    const z = Number(x) - Number(y);
    return z;   
}

function multiplication(x, y) {
    const z = Number(x) * Number(y);
    return z;    
}

function division(x, y){
    const z = Number(x) / Number(y);
    return z;    
}