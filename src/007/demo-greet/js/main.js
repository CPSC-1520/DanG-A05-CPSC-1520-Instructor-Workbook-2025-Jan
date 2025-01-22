// This demonstrates using a parameter
// e.g. greetUser('Jane Doe');
//                \________/    'Jane Doe' is an argument supplied to the function
// e.g. greetUser(prompt('Name:'));

const originalHeading = document.querySelector('h1.intro').innerText;

// All that this does is declare the function:
// - identifying the name of the function
// - identifying the information supplied to the function (parameters)
// - identify the instructions {body} that will be executed when the function is called

// Using a const is a preferred way to declare a function
const greetUser = function (username) {
//    \_______/            \________/
//     | reference/name     | my list of parameter variables
//                            (comma, separated, list)
    // select the h1
    var mainTitle = document.querySelector('h1.intro');
    // update the h1 inner HTML
    mainTitle.innerHTML = 'Welcome ' + username + ' to ' + originalHeading;
};


/* Notes
    Functions are used to
    - perform tasks (calculations, DOM modifications, etc.)
    - communicate information
        - parameters - information going into the function
            - You can have as many parameters as you want
            - comma-separated list of variable names
            - These variables/parameters are only usable from within
              the body of the function
        - `return` - information going out of the function
            - you can only return a single item
            - if no `return`, the default value returned is `undefined`
*/

const cleanAndConcatenate = function(first, second, third) {
    let result;
    let lastItem = third.trim();
    // I will use string interpolation to build the text I want.
    // string interpolation is done by putting our text inside a pair of
    // backticks and using placholders to "inject" data/infomation
    // into the string
    result = `${first.trim()} ${second.trim()} ${lastItem}`;
    //        \_____________/ \______________/ \_________/
    //           All of these are placeholders

    return result; // exit this function and give back the value of result
}

// My .js file can call the functions I declare
let givenName = '  Guido\t';        // \t is a TAB character
let middleName = '\nAndropov\n';    // \n is a NEWLINE character
let surname = ' Drozdowski \n \t \n';
console.log(givenName + middleName + surname); // you can see the effect of whitespace characters

// I am supplying givenName as the argument for the first parameter, and
// middleName as the argument for the second parameter, and surname as
// the argument for the third parameter
let fullName = cleanAndConcatenate(givenName, middleName, surname);
console.log('After cleaning, the concatenated result is:', fullName);
