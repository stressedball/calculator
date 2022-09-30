const calculatorContainer = document.getElementById('calculatorContainer');
const numberButtons = document.querySelector('#numberButtons');
const operationButtons = document.getElementById('operationButtons');
let outerClear = 0;
let outerClear2 = 0;
let outerClear3 = 0;
//DISPLAY-BUTTONS FUNCTIONALITY
const displayScreen = document.getElementById('display');
displayScreen.textContent = '0';

const operationsArray = ['+', '-', '/', '*'];
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];

let getNumberOne = 0;
let getNumberTwo = 0;
calculatorContainer.addEventListener('click', operateSomething);
function operateSomething(button) {
    for (let i = 0; i < operationsArray.length; i++) {
        if (button.target.textContent === operationsArray[i]) {
            outerClear = 1;
            calculatorContainer.removeEventListener('click', display);
            outerClear2 = 1;
            calculatorContainer.addEventListener('click', display2);
        }
    }
}

function display2(button) {
    for (let i = 0; i < operationsArray.length; i++) {
        if (button.target.textContent === operationsArray[i] 
            || outerClear3 === 1) {
            return;
        }
    }

    for (let i = 0; i < numbersArray.length; i++) {
        if (button.target.textContent === numbersArray[i] 
            && outerClear2 === 1) {
            getNumberTwo = storeNumber2(button.target.textContent);
            console.log('number 2 in display event listener : ', getNumberTwo)
        }
    }
}

calculatorContainer.addEventListener('click', display);
function display(button) {
    for (let i = 0; i < operationsArray.length; i++) {
        if (button.target.textContent === operationsArray[i]
            || button.target.id === 'equals') {
            return;
        }
    }

    for (let i = 0; i < numbersArray.length; i++) {
        if (button.target.textContent === numbersArray[i]) {
            getNumberOne = storeNumber(button.target.textContent);
            console.log(getNumberOne);
        }
    }
}


// function operate(operator) {
//     switch(operator) {
//         case 'addition':
//             addition();
//             break;
//         case 'substraction':
//             substraction();
//             break;
//         case 'multiplication':
//             multiplication();
//             break;
//         case 'division':
//             division();
//             break;
//     }
// }

function addition(x, y) {
    const z = Number(x) + Number(y);
    return z;
}

calculatorContainer.addEventListener('click', result);
function result(button) {
    if (button.target === document.getElementById('equals')) {
        calculatorContainer.removeEventListener('click', display2); 
        outerClear3 = 3;
        console.log('number 2 in result function : ', getNumberTwo);
        console.log('result is : ', addition(getNumberOne, getNumberTwo));
    }
}

//STORING NUMBERS
let chainNumbersOne = [];
function storeNumber(inputNumber) {
    if (outerClear === 1) {
        return chainNumbersOne;
    }
    chainNumbersOne += inputNumber;
    return chainNumbersOne;
}

let chainNumbersTwo = [];
function storeNumber2(inputNumber) {
    if (outerClear3 === 1) {
        return chainNumbersTwo;
    } else if (outerClear2 === 1) {
        chainNumbersTwo += inputNumber;
    }
    return chainNumbersTwo;
}



//CLEAR BUTTON
// const clearButton = document.getElementById('clear');
// clearButton.addEventListener('click', clearFunction);
// function clearFunction(target) {
//     if (target) {
//         displayScreen.textContent = '0';
//         outerClear = 'clear';
//         return outerClear;
//     }
// }








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