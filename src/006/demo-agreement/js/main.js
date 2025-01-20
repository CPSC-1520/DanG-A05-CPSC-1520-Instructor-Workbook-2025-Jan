/*
    (BTW - this is a muli-line comment - enclosed by an opening slash-asterix and closed 
            by an astrix-slash)
    Create variables to hold the receiving party's name, disclosing party's name, and the date

    Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

    Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

    Use the skills you have learned up to this point.
*/
/* JavaScript Facts
    - Code is executed sequentially - from top to bottom
    - Statements end with a semicolon ;
    - Most of the code we write/use are identifiers - there are only a few keywords in JS
 */
alert('You are about to enter information for a legal document');
// prompt() is a built-in function of the browser to allow the user to enter information
let disclosing = prompt('Enter the name of the disclosing party');
let disclosingSpan = document.querySelector('.disclosing-party');
// find the DOM element with this selector: \_________________/
//                                             class='disclosing-party'
disclosingSpan.innerText = disclosing; // Show the name the user entered in the page.

// Try getting the receiving party's name and show that in the page.
let receivingParty = prompt('Enter the name of the receiving party');
let receivingSpan = document.querySelector('.receiving-party');
receivingSpan.innerText = receivingParty;

let dateSpan = document.querySelector('span.date'); // There are many possible ways to get this
dateSpan.innerText = '01, 20, 2025';

let disclosingSignature = document.querySelector('.signature .disclosing-party');
let receivingSignature = document.querySelector('.signature .receiving-party');

disclosingSignature.innerText = disclosing;
receivingSignature.innerText = receivingParty;

let response = confirm('Is the information on the page correct?');
// Output a message for now, because we don't know enough JS to do this "properly"
console.log(`The user responded with ${response}`);
//          \____ String Interpolation _________/
//            Used to "assemble" or build strings with the values from variables/expressions
