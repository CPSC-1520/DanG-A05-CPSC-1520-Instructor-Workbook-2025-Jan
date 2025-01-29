console.log('main.js has been loaded');
let step = 0; // A global variable to track our current step
const appendTitle = function(someText) {
    const sandbox = document.querySelector('output#sandbox');
    sandbox.innerHTML += `<h6>${someText}</h6>`;
}
const appendLine = function(someText) {
    let letter = `${offsetStepA(step++)}) `;
    const sandbox = document.querySelector('output#sandbox');
    sandbox.innerHTML += '<br>';
    sandbox.innerHTML += letter + someText;
}
const offsetStepA = function(offset) {
    let step = 'A';
    let characterCode = step.charCodeAt(0);
    characterCode += offset;
    let text = String.fromCharCode(characterCode);
    return text;
}

// TODO: Use the space below for playing with JavaScript.
appendTitle('Explore string functions');
// .trim() (plus left/right trim), .toUpperCase()/.toLowerCase(), .padStart()/.padEnd(), .repeat(), .replace() + .replaceAll(), .substr() vs. .substring()
let myName = 'Guido Andropov Drozdowski';
appendLine(`The text in "${myName}" has ${myName.length} characters.`);
let someText = '   Bob  \n\t'; // "\n" is a New Line character, "\t" is tab character
appendLine(`someText has ${someText.length} characters, but I can trim it: "${someText.trimEnd()}"`);
// someText.trim()
// \______/\_____/
//  string    |
//         .trim() is a function naitive to string objects/variables
//         \_____/
// returns a string
myName += '. '; // append some text to my existing value
appendLine(myName.repeat(3));
//         \______________/
//            string
appendLine(myName.padEnd(30, '!'));
myName = 'Inigo Montoya';
let message = `My name is ${myName.bold()}! You killed my father! Prepare to die!`;
appendLine(message);
// Student TODO: Explore some of the other string functions


