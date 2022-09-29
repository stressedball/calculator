const operations = document.getElementById('operations');
operations.addEventListener('click', operate);
function operate(operator) {
    
    switch(operator.target.textContent) {
        case 'addition':
            addition();
            break;
        case 'substraction':
            substraction();
            break;
        case 'multiplication':
            multiplication();
            break;
        case 'division':
            division();
            break;
    }
}

const calculatorContainer = document.getElementById('calculatorContainer');
const calculatorButtons = document.getElementById('calculatorButtons');


//DISPLAY-BUTTONS FUNCTIONALITY
const displayScreen = document.getElementById('display');
displayScreen.textContent = 'Enter something';
let numeroUno = 0;
calculatorContainer.addEventListener('click', display);
function display(button) {
    if (button.target !== document.getElementById('hidden') && button.target !== document.getElementById('display')) {
        let displayedNumber = 0;
        displayedNumber = storeNumber(button.target.textContent);
        displayScreen.textContent = displayedNumber;
        
    }
    
}

//STORING NUMBERS
let chainNumbersOne = [];
function storeNumber(inputNumber) {
    chainNumbersOne += inputNumber;
    console.log(chainNumbersOne);
    return chainNumbersOne;
}
let chainNumbersTwo = [];
function storeNumber2(inputNumber) {
    chainNumbersTwo += inputNumber;
    console.log(chainNumbersTwo);
    return chainNumbersTwo;
}
//CLEAR BUTTON
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFunction);
function clearFunction() {
    displayScreen.textContent = '0';
}






function addition() {
    const x = prompt('input number');
    const y = prompt('input number 2');
    const z = Number(x) + Number(y);
    return z;
}

function substraction() {
    const x = prompt('input number');
    const y = prompt('input number 2');
    const z = Number(x) - Number(y);
    return z;   
}

function multiplication() {
    const x = prompt('input number');
    const y = prompt('input number 2');
    const z = Number(x) * Number(y);
    return z;    
}

function division(){
    const x = prompt('input number');
    const y = prompt('input number 2');
    const z = Number(x) / Number(y);
    return z;    
}