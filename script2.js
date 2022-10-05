const numberButtonsTwo = document.querySelector('#numberButtons');
const operationButtonsTwo = document.getElementById('operationButtons');
const clearButtonTwo = document.getElementById('clear');
const equatesTwo = document.getElementById('equals');

let toBeHovered;
numberButtonsTwo.addEventListener('mouseover', hoverStyle);
numberButtonsTwo.addEventListener('mouseout', noHoverStyle);

function hoverStyle(target) {
    target.target.classList.add('hovered');
    target.target.style.fontSize = '35px';
}

function noHoverStyle(target) {
    target.target.classList.remove('hovered')
    target.target.style.fontSize = '20px';
}