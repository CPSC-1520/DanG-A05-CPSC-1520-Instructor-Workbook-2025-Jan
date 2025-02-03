const appendFeedback = function(line) {
    document.querySelector('#feedback').innerText += `\n${line}`;
    // This uses a template string with placeholder  \_________/
}

const clearFeedback = function(text) {
    document.querySelector('#feedback').innerText = `${text || ''}`;
}

// Process the 'subscribe' form's inputs
document
    .getElementById('subscribe') // Get the <form id="subscribe"> element
    .addEventListener('submit', function(ev) { // an anonymous function responding to submit
        ev.preventDefault(); // This will stop the browser from submitting the form to the server
        // console.log(ev);
        let theForm = ev.target;
        clearFeedback('The subscribe form was submitted.');
        let firstNameInput = theForm.elements.firstname;
        appendFeedback("The first name is: '" + firstNameInput.value + "'");
        let emailInput = theForm.elements.email;
        appendFeedback(`Their email is: '${emailInput.value}'`);

        appendFeedback(`Agreed to terms? '${theForm.elements.terms.checked}'`);
        console.log(theForm.elements.term); // see the <input type="checkbox" in the console
    });


let otherForm = document.querySelector('#assorted');
const exploreForm = function(ev) {  // ev object will be a SubmitEvent
    ev.preventDefault();
    clearFeedback('This is the data from the assorted form:');
    let target = ev.target; // by definition, the .target is the <form>
    //             |\____/  <-- identifier 
    //             | <--- target is a Member of the ev object
    let theInputs = target.elements;
    // Any time you want to see a "rich" view of some data/object, use console.log()
    // console.log('theInputs: ', theInputs);
    let colorInput = theInputs.color;  // <input name="color" />
    //                        \____/  <------------->  \___/
    // console.log('the user chose this color: ', colorInput.value);
    let h1Tag = document.querySelector('h1');
    h1Tag.style.color = colorInput.value; // Make the heading "pretty"

    // If your input control has a name with a dash in it,
    // use the name's value as an "index" for the object.
    let theBackgroundColorInput = theInputs['bg-color']; // using an indexer to get the property
    // for <input type="radio" name="bg-color" value="#ff0000" />
    // console.log('The radio button group', theBackgroundColorInput);

    h1Tag.style.backgroundColor = theBackgroundColorInput.value;
    //         for any <input> element, we acces the     .value    to get the data

    let indoorCheckbox = theInputs.indoorCamera; // <input name="indoorCamera" />
    // This is a checkbox <input type="checkbox" />
    // console.log('The indoor camera checkbox is:', indoorCheckbox.checked);
    // Checkboxes and Radio buttons have a property called      .checked

    // I have a set of checkboxes with the same name, 'feature'
    let featureInputs = theInputs.feature;
    console.log('The selected feature(s) are:', featureInputs);
    // How could I see the value of the selected features?
    // There are several ways, but the best one involves Looping in JavaScript
    // (which is a later topic).
    // Right now, I'm going to use a debugger to pause execution of my
    // code so I can explore the object in the Dev Tools.
    debugger; // this is a command to pause execution in the browser's Dev Tools


    // Here's an interesting (but wonky) use of indexers to call
    // the .log() function of the console object.
    // console['log']("Isn't that cool?!");
};
otherForm.addEventListener('submit', exploreForm);
