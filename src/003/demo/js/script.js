// We can use the double-slash for a single-line comment
console.log('The script.js file has loaded');

// We will use variables to "remember" what parts of the
// page we are referencing
let myIntroParagraph = document.querySelector('#intro');
console.log(myIntroParagraph); // just to see if I got something

/* This is for multi-line comments....
We will modify the contents of the page.
*/
let h1Tag = document.querySelector('h1');
console.log('The original text in the h1 was:', h1Tag.innerText);
h1Tag.innerText = 'Hello World!';

