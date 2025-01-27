console.log('main.js has been loaded');
const sandbox = document.querySelector('output#sandbox');

// TODO: Use the space below for playing with JavaScript.
sandbox.innerText = 'My sandbox is ready to play in.';
sandbox.innerHTML += '<br>A) There are many assignment operators';
// ... remember to keep the previous code
let leftSide = 3;
let topSide = 4;
let area;
area = leftSide * topSide;
sandbox.innerHTML += '<br>';
sandbox.innerHTML += `B) The area of my rectangle is ${area}`;
let unitCost = 12.95;
let gstRate = 0.05;
let currency = '(CAD)';
let subTotal = unitCost * 10;
let total = subTotal + subTotal * gstRate;
// Output the result on another "line"
sandbox.innerHTML += '<br>C) ';
sandbox.innerHTML += `The subtotal is $ ${subTotal.toFixed(2)}. `;
sandbox.innerHTML += `The total is $ ${total.toFixed(2)}.`;

// Can JavaScript do math with strings and numbers?
let numberFive = 5;
let stringFive = '5';
let answer;

answer = numberFive + stringFive;
sandbox.innerHTML += '<br>D) ';
sandbox.innerHTML += `5 + '5' produces ${answer}`;

answer = numberFive * stringFive;
sandbox.innerHTML += '<br>E) ';
sandbox.innerHTML += `5 * '5' produces ${answer}`;

answer = numberFive + parseInt(stringFive);
sandbox.innerHTML += '<br>F) ';
sandbox.innerHTML += `5 + parseInt('5') produces ${answer}`;

sandbox.innerHTML += `<br>G) numberFive is a ${typeof numberFive}`;
sandbox.innerHTML += `<br>H) stringFive is a ${typeof stringFive}`;

const pi = 3.14159; // pi's value is now fixed - it can't change
let radius = 10;

sandbox.innerHTML += `<br>I) A circle with radius of ${radius} `;
sandbox.innerHTML += `has an area of ${pi * radius * radius} `;
sandbox.innerHTML += `and a circumference of ${2 * pi * radius}.`;