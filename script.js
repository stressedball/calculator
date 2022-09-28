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

function operate() {
    const operator = prompt('enter an operator');
    switch(operator) {
        case '+':
            const additionResult = addition();
            break;
        case '-':
            substraction();
            break;
        case '*':
            multiplication();
            break;
        case '/':
            division();
            break;
    }
}
