console.log('JavaScript file loaded!');

// This is a function whose purpose (for this app) is to respond to (or "handle") an event.
// Specifically, I'm going to use for my 'click' event (see below)
const handleClick = function(event) {
    //                       \___/  <--- this is just a parameter name
    event.preventDefault(); // calling .preventDefault() to tell it to stop doing its default action
    // TODO: Use for exploration purposes
    const target = event.target;  // the .target property is the DOM element that received the event
    document.getElementById('feedback').innerText = `Clicked from ${target.tagName}`;
    //                                                                    \______/
    //                         this is the name of the HTML tag (DOM Element)  |
}

let heading = document.querySelector('h1');
// This is where I "register" the DOM element to listen for a 'click' event,
// and then have the browser call my handleClick method when the 'click' event
// happens inside my heading.
heading.addEventListener('click', handleClick);
//                                \_________/ <---- note I am passing in the name of my function

// TODO: Add an event listener for the button with id "register".
//       Listen for the 'dblclick' event.
//       Prompt the user for their name, then for their email,
//       then output the information to the #feedback element.
document.querySelector('#register') // return the DOM element
        .addEventListener('dblclick', function(evt) { // anonymous inlined function declaration
            let name = prompt('Enter your name');
            let email = prompt('Enter your email');
            let message = `<br/>Hello ${name}. You have been added to the no-fly watch list. For details, see your inbox at ${email}.<br/><hr/>`;
            let output = document.getElementById('feedback')
            output.innerHTML += message; // Append to the existing value
        //  output.innerHTML = output.innerHTML + message    
        });

// TODO: Add another event listener for the heading, this time for
//       the 'dblclick' event.
//       Try changing the theme by assigning either 'light' or 'dark'
//       to the following element's property:
//          document.querySelector('html').dataset.theme
//       Try it out, then inspect the elements in the Dev Tools.