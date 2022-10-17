const allButtons = document.querySelectorAll('button');
const displayInput = document.querySelector('#displayInput');
const displayResult = document.querySelector('#displayResult');
const regOps = /[-+*/]/g;
const regNum = /[0-9.]/g;
let backspace = false;
let count = 0;
let firstFactorial = '';
let factorialOperator;
let factorialCatch = false;
let factResArray = [];
let firstNumber = '';
let lastOperator;
let leftOver = '';
let localResult = 0;
let inputVariable = [];
let inputVarLength = 0;
let inputText;
let inputId;
let numbersArray = [];
let operatorIndex = 0;
let operatorArray = [];
let operator = null;
let operatorSignal = false;
let result = 0;
let resultArray = [];
let secondNumber = '';
let secondFactorial = '';

//EVENT LISTENER FOR ALL BUTTONS
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', displayInputFunction);
}

//DISPLAY INPUT
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
    
    //OPERATORS replacement
    if (inputText.match(regOps)) {
        
        if (inputVariable[inputVarLength - 1].match(regOps)) {
                lastOperator = inputVariable[inputVarLength - 1];
                inputVariable = inputVariable.slice(0, -1);
                inputVariable += inputText;
                operatorArray.pop();
                operatorArray.push(inputText);
                changeOperator();
        } else {
            operatorArray.push(inputText);
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
            //maybe store a copy of inputVariable?
            //get the last operator of that copy?
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

function changeOperator() {

    if (inputVariable.match(regOps).length <= 1) {
        count = 0;
    }

    if (count === 1) {
        operatorSignal = true;
        if (lastOperator.match(/[-+]/)) {
            count = 2;
        }
    }
 }


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
            if (operatorSignal === true) {
                numbersArray = inputVariable.split(regOps);

                function findIndexLastResult(isPlusMinus) {
                    if (isPlusMinus === '+' || isPlusMinus === '-') {
                        return false;
                    }
                    return true;
                }
                
                let findResultByOperatorIndex = operatorArray.findLastIndex(findIndexLastResult);

                if (operatorArray[operatorArray.length - 2].match(/[*/]/)) {
                    firstNumber = resultArray[findResultByOperatorIndex - 2];
                    firstFactorial = secondNumber;
                } else {
                    firstNumber = resultArray[findResultByOperatorIndex - 1];
                    firstFactorial = numbersArray[numbersArray.length - 2];
                }

                console.log(firstFactorial);
                resultArray.pop();

            } else {
                firstFactorial = secondNumber;
            }
            secondFactorial = '';
            secondNumber = '';
            factorialOperator = inputText;
            resultArray.push(localResult);
            operatorSignal = false;
            return;
        }
        if (inputText.match(/[-+]/)) {
            secondFactorial = '';  
            count = 1;
        }
    }
    
    if (count === 1 && inputText.match(regOps)) {

        if (inputText.match(/[-+]/)) {
            if (operatorSignal === true) {
                operator = operatorArray[operatorArray.length - 1];
            } else {
                operator = inputText;
            }
            firstNumber = localResult;
            secondNumber = '';
            resultArray.push(firstNumber);    
            operatorSignal = false;
            return;    
        } 

        if (inputText.match(/[*/]/)) {
            if (operator.match(/[*/]/)) {
                if (operatorSignal === true) {
                    operator = operatorArray[operatorArray.length - 1];
                } else {
                    operator = inputText;
                }
                secondNumber = '';
                firstNumber = localResult;
                operator = inputText;
                resultArray.push(firstNumber);
                return;
            }
            if (operator.match(/[-+]/)) { 
                numbersArray = inputVariable.split(regOps);
                if (operatorSignal = true) {
                    operator = operatorArray[operatorArray.length - 2];
                    firstFactorial = numbersArray[numbersArray.length - 2];
                    secondNumber = '';
                    factorialOperator = inputText;
                } else {
                    firstFactorial = numbersArray[numbersArray.length - 1];
                    console.log(firstFactorial)
                    secondNumber = '';
                    factorialOperator = inputText;
                }    
                firstNumber = resultArray[resultArray.length - 1];  
                count = 2;
                operatorSignal = false;
                return;
            }
        }
    }

    if (inputText.match(regOps) && count === 0) {
        operator = inputText;
        operatorIndex = inputVariable.indexOf(operator);
        firstNumber = inputVariable.slice(0, operatorIndex);
        resultArray.push(firstNumber);
        count = 1;
        return;
    }
    
    if (inputText.match(regNum) && count === 1) {
        secondNumber += inputText;
    } else if (inputText.match(regNum) && count === 2) {
        secondFactorial += inputText;
        secondNumber = operate(firstFactorial, factorialOperator, secondFactorial);
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



