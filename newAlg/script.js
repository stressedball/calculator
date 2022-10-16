const allButtons = document.querySelectorAll('button');
const displayInput = document.querySelector('#displayInput');
const displayResult = document.querySelector('#displayResult');
const regOps = /[-+*/]/g;
const regNum = /[0-9.]/g;
let inputVariable = [];
let inputVarLength = 0;
let inputText;
let inputId;
let magicNumber = undefined;
let magicOperator = '';
let count = 0;
let result = 0;
let resultArray = [];
let operatorArray = [];
let operator = null;
let firstNumber = '';
let secondNumber = '';
let operatorIndex = 0;
let factorial = '';
let backspace = false;
let localResult = 0;
let factorialOperator;
let factorialNumber = '';

let leftOver = '';
let operatorSignal = false;
let lastOperatorIndex;

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', displayInputFunction);
}

function displayInputFunction(input) {
    inputId = input.target.id;
    inputText = input.target.textContent;
    inputVarLength = inputVariable.length;

    if (inputVarLength === 0) {
        if (!inputText.match(/[0-9.]/)) {
            displayInput.textContent = 'Numbers are awaited';
            return;
        } else if (inputText.match(/\./)) {
            inputVariable += '0';
        }
    }

    displayInput.classList.add('addCursor');

    if(inputText.match(/\./) && inputVarLength !== 0) {
        if (inputVariable[inputVarLength - 1].match(/\./)) {
            return;
        } else if (inputVariable[inputVarLength - 1].match(/[-+*/]/)) {
            inputVariable += '0';
        } 
    }
    
    if(inputText === '=') {
        return;
    }
    
    if (inputText === 'Clear') {
        return;
    }
    
    if (inputId === 'backspace') {
        leftOver = inputVariable[inputVarLength - 1];
        inputVariable = inputVariable.slice(0, -1);
        displayInput.textContent = inputVariable;
        backspaceFunction(leftOver);
    }
    
    //OPERATORS treatment
    if (inputText.match(/[-+*/]/)) {
        if (inputVariable[inputVarLength - 1].match(/[-+*/]/)) {
                inputVariable = inputVariable.slice(0, -1);
                inputVariable += inputText;
                //changeOperator();
        } else {
            inputVariable += inputText;
        }
    }

    //numbers 
    if (inputId === '') {
          inputVariable += inputText;
    }

    displayInput.textContent = inputVariable;
    makeCalculs();
}

function backspaceFunction(input) {
    
    for (let i = inputVarLength - 1; i >= 0; i--) {
        console.log(inputVariable[i].search(regOps))
    }

    if (count === 1) {
        if (input.match(regOps)) {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            resultArray.pop();
            count = 0;
        }
        if (input.match(regNum)) {
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        }
    }

    if (count === 2) {
        if (input.match(regOps)) {
            firstNumber = resultArray[resultArray.length - 1];
            console.log(operator)
            secondNumber = '';
            count = 1;
        }
        if (input.match(regNum)) {
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        }
    }

    makeCalculs(); 

}

// function changeOperator() {
//     if (count === 0) {
//         operator = inputText;
//     }

//     if (count === 1) {
//         if (inputText.match(/[-+]/)) {
//             operator = inputText;
//         }
//         if (inputText.match(/[/*]/)) {
            
//         }
//     }
//     operatorSignal = false;
//     return;
// }


function makeCalculs() {
    
    if (!inputVariable.match(regOps)) {
        displayResult.textContent = inputVariable;
        if (!inputVariable.match(regNum)) {
            displayResult.textContent = 0;
        }
        return;
    }
    
    if (count === 2 && inputText.match(regOps)) {
        if (inputText.match(/[*/]/)) {
            factorial = secondNumber;
            factorialNumber = '';
            secondNumber = '';
            factorialOperator = inputText;
            return;
        }
        if (inputText.match(/[-+]/)) {
            factorialNumber = '';  
            count = 1;
        }
    }
    
    if (count === 1 && inputText.match(regOps)) {
        if (inputText.match(/[-+]/)) {
            secondNumber = '';
            firstNumber = localResult;
            operator = inputText;
            resultArray.push(firstNumber);
            operatorArray.push(operator)
            return;
        } 
        if (inputText.match(/[*/]/)) {
            if (operator.match(/[*/]/)) {
                secondNumber = '';
                firstNumber = localResult;
                operator = inputText;
                resultArray.push(firstNumber);
                return;
            }
            if (operator.match(/[-+]/)) {        
                factorial = secondNumber;
                secondNumber = '';
                factorialOperator = inputText;
                count = 2;
                resultArray.push(firstNumber);
                return;
            }
        }
    }

    if (inputText.match(regOps) && count === 0) {
        operator = inputText;
        operatorIndex = inputVariable.indexOf(operator);
        firstNumber = inputVariable.slice(0, operatorIndex);
        resultArray.push(firstNumber);
        operatorArray.push(operator);
        count = 1;
        return;
    }
    
    if (inputText.match(regNum) && count === 1) {
        secondNumber += inputText;
    } else if (inputText.match(regNum) && count === 2) {
        factorialNumber += inputText;
        secondNumber = operate(factorial, factorialOperator, factorialNumber);
    } else if (inputText.match(regNum) && count === 0) {
        secondNumber += inputText;
    }

    localResult = operate(firstNumber, operator, secondNumber);
    displayResult.textContent = localResult;
    return;
}

function operate(firstNumber, operator, secondNumber) {   
   switch(operator) { 
        case '+':
           result = Number(firstNumber) + Number(secondNumber);
           break;
        case '-':
           result = Number(firstNumber) - Number(secondNumber);
           break;
        case '*':
           result = Number(firstNumber) * Number(secondNumber);
           break;
        case '/':
           result = Number(firstNumber) / Number(secondNumber);
           break;
   }
   return result;
}



