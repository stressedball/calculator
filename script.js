const calculatorContainer = document.getElementById('calculatorContainer');
const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');
//DISPLAY-BUTTONS FUNCTIONALITY
const displayScreen = document.getElementById('display');
displayScreen.textContent = '0';

const operationsArray = ['+', '-', '/', '*'];
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

let getNumberOne = null;
let getNumberTwo = null;
operationButtons.addEventListener('click', operate);
let operatorReference = null;

 //DISPLAY NUMBER 1 
 calculatorContainer.addEventListener('click', display);
 function display(button) {
     for (let i = 0; i < numbersArray.length; i++) {
         if (button.target.textContent === numbersArray[i]) {
             getNumberOne = storeNumber(button.target.textContent);
             displayScreen.textContent = getNumberOne;
         }
     }
 }

function operate(button) {
    operatorReference = button.target;
    let operatorId = operatorReference.id;
    let operatorText = operatorReference.textContent;

    for (let i = 0; i < operationsArray.length; i++) {
        if (button.target.textContent === operationsArray[i]) {
            calculatorContainer.removeEventListener('click', display);
            calculatorContainer.addEventListener('click', display2);
        }
    }
    
    displayScreen.textContent += ' ' + operatorText + ' ';
    switch(operatorId) {
        case 'addition':
            addition(getNumberOne, getNumberTwo);
            break;
        case 'substraction':
            substraction(getNumberOne, getNumberTwo);
            break;
        case 'multiplication':
            multiplication(getNumberOne, getNumberTwo);
            break;
        case 'division':
            division(getNumberOne, getNumberTwo);
            break;
    }
}

function operate2 () {
    let operatorId = operatorReference.id;
    switch(operatorId) {
        case 'addition':
            return addition(getNumberOne, getNumberTwo);
        case 'substraction':
            return substraction(getNumberOne, getNumberTwo);
        case 'multiplication':
            return multiplication(getNumberOne, getNumberTwo);
        case 'division':
            return division(getNumberOne, getNumberTwo);
    }
}

function display2(button) {
    calculatorContainer.removeEventListener('click', operate);
    for (let i = 0; i < numbersArray.length; i++) {
        if (button.target.textContent === numbersArray[i]) {
            getNumberTwo = storeNumber2(button.target.textContent);
            console.log('Second number = ', getNumberTwo);
        }
    }
}


calculatorContainer.addEventListener('click', result);
function result(button) {
    if (button.target === document.getElementById('equals')) {
        calculatorContainer.removeEventListener('click', display2); 
        displayScreen.textContent = `Result is : ${operate2(getNumberOne, getNumberTwo)}`;
    }
}

//STORING NUMBERS
let chainNumbersOne = [];
function storeNumber(inputNumber) {
    chainNumbersOne += inputNumber;
    return chainNumbersOne;
}

let chainNumbersTwo = [];
function storeNumber2(inputNumber) {
    chainNumbersTwo += inputNumber;
    return chainNumbersTwo;
}



//CLEAR BUTTON
// const clearButton = document.getElementById('clear');
// clearButton.addEventListener('click', clearFunction);
// function clearFunction(target) {
//     if (target) {
//         displayScreen.textContent = '0';
//         Clear = 'clear';
//         return Clear;
//     }
// }




function addition() {
    const x = getNumberOne;
    const y = getNumberTwo;
    const z = Number(x) + Number(y);
    return z;
}

function substraction() {
    const x = getNumberOne;
    const y = getNumberTwo;
    const z = Number(x) - Number(y);
    return z;   
}

function multiplication() {
    const x = getNumberOne;
    const y = getNumberTwo;
    const z = Number(x) * Number(y);
    return z;    
}

function division(){
    const x = getNumberOne;
    const y = getNumberTwo;
    const z = Number(x) / Number(y);
    return z;    
}