
const operations = document.getElementById('operations');
operations.addEventListener('click', operate);
function operate(operator) {
    
    switch(operator.target.id) {
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
    return true;
}

function addition() {
    const x = storeNumber();
    const y = storeNumber2();
    const z = x + y;
    return z;
}

const calculatorContainer = document.getElementById('calculatorContainer');
const calculatorButtons = document.getElementById('calculatorButtons');


//DISPLAY-BUTTONS FUNCTIONALITY
const displayScreen = document.getElementById('display');
displayScreen.textContent = 'Enter something';
let outerClear = '';


calculatorContainer.addEventListener('click', display);
function display(button) {

     if (button.target !== document.getElementById('hidden') && button.target !== document.getElementById('display')) {
        
        let displayedNumber = 0;
        displayedNumber = storeNumber(button.target.textContent);
        displayScreen.textContent = displayedNumber;

        // let displayedNumber2 = 0;
        // displayedNumber2 = storeNumber2(button.target.textContent);
        // displayScreen.textContent += displayedNumber2;

    }
}


//STORING NUMBERS
let chainNumbersOne = [];
function storeNumber(inputNumber) {
    if (outerClear === 'clear') {
        chainNumbersOne = [];
        outerClear = '';
    }
    chainNumbersOne += inputNumber;
    return chainNumbersOne;
}

let chainNumbersTwo = [];
function storeNumber2(inputNumber) {
    if (outerClear === 'clear') {
        chainNumbersTwo = [];
        outerClear = '';
    }
    chainNumbersTwo += inputNumber;
    return chainNumbersTwo;
}

//CLEAR BUTTON
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFunction);
function clearFunction(target) {
    if (target) {
        displayScreen.textContent = '0';
        outerClear = 'clear';
        return outerClear;
    }
}








// function substraction() {
//     const x = prompt('input number');
//     const y = prompt('input number 2');
//     const z = Number(x) - Number(y);
//     return z;   
// }

// function multiplication() {
//     const x = prompt('input number');
//     const y = prompt('input number 2');
//     const z = Number(x) * Number(y);
//     return z;    
// }

// function division(){
//     const x = prompt('input number');
//     const y = prompt('input number 2');
//     const z = Number(x) / Number(y);
//     return z;    
// }