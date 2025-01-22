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
