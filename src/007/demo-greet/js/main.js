// This demonstrates using a parameter
// e.g. greetUser('Jane Doe');
// e.g. greetUser(prompt('Name:'));

// All that this does is declare the function:
// - identifying the name of the function
// - identifying the information supplied to the function (parameters)
// - identify the instructions {body} that will be executed when the function is called
function greetUser(username) {
    // select the h1
    var mainTitle = document.querySelector('h1.intro');
    // update the h1 inner HTML
    mainTitle.innerHTML = 'Welcome ' + username + ' to ' + mainTitle.innerHTML;
};
