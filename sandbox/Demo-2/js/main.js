console.log('main.js has been loaded');

let step = 0; // A global variable to track our current step
const appendLine = function (someText) {
    let letter = `${offsetStepA(step++)}) `;
    const sandbox = document.querySelector('output#sandbox');
    sandbox.innerHTML += '<br>';
    sandbox.innerHTML += letter + someText;
}
const offsetStepA = function(offset) {
    let step = 'A';
    let characterCode = step.charCodeAt(0);
    characterCode += offset; // same as characterCode = characterCode + offset;
    let text = String.fromCharCode(characterCode);
    return text;
}

// TODO: Use the space below for playing with JavaScript.
document.querySelector('output#sandbox').innerText = 'My sandbox is ready to play in.';
appendLine('There are many assignment operators');

// ... remember to keep the previous code
let leftSide = 3;
let topSide = 4;
let area;
area = leftSide * topSide;

appendLine(`The area of my rectangle is ${area}`);

let unitCost = 12.95;
let gstRate = 0.05;
let currency = '(CAD)';
let subTotal = unitCost * 10;
let total = subTotal + subTotal * gstRate;
// Output the result on another "line"
let message;
message = `The subtotal is $ ${subTotal.toFixed(2)}. `;
message += `The total is $ ${total.toFixed(2)}.`;
appendLine(message);

// Can JavaScript do math with strings and numbers?
let numberFive = 5;
let stringFive = '5';
let answer;

answer = numberFive + stringFive;
appendLine(`5 + '5' produces ${answer}`);

answer = numberFive * stringFive;
appendLine(`5 * '5' produces ${answer}`);

answer = numberFive + parseInt(stringFive);
appendLine(`5 * parseInt('5') produces ${answer}`);

appendLine(`numberFive is a ${typeof numberFive}`);
appendLine(`stringFive is a ${typeof stringFive}`);

const pi = 3.14159; // pi's value is now fixed - it can't change
let radius = 10;

message = `A circle with radius of ${radius} `;
message += `has an area of ${pi * radius * radius} `;
message += `and a circumference of ${2 * pi * radius}.`;
appendLine(message);