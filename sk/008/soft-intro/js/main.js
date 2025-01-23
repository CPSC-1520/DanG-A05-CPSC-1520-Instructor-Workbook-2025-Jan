console.log('JavaScript file loaded!');

const handleClick = function(event) {
    // TODO: Use for exploration purposes
    const target = event.target;
    document.getElementById('feedback').innerText = `Clicked from ${target.tagName}`;
}

let heading = document.querySelector('h1');
heading.addEventListener('click', handleClick);

// TODO: Add an event listener for the button with id "register"
//       Prompt the user for their name, then for their email,
//       then output the information to the #feedback element.
