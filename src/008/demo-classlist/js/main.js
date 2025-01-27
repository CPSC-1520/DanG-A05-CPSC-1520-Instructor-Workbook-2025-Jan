console.log('main.js has been loaded');
const sandbox = document.querySelector('output#sandbox');

// TODO: Use the space below for playing with JavaScript.
// A quick sample to toggle the display of an item by adding/removing a CSS class
document.querySelector('h1')
        .addEventListener('click', function() {
            let outputTag = document.querySelector('#sandbox');
            outputTag.classList.toggle('hidden');   // 'hidden' is a class from TailwindCSS
            // The .classList property of a DOM element has functions for adding/removing
            // CSS classes from that element.
            //  - .toggle()  <-- used to add or remove
            //  - .add()     <-- used to add
            //  - .remove()  <-- used to remove
        });
