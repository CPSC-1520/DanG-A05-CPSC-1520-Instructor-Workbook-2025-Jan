const showDate = function(/** @type {HTMLSpanElement} */ thisDate) {
    const getDatePortion = function(/** @type {Date} */ someDate) {
        if(someDate instanceof Date) {
            // Build a string with just the date portion
            // YYYY-MM-DD
            let text = `${someDate.getFullYear()}-${someDate.getMonth() + 1}-${someDate.getDate()}`;
            return text;
        } else {
            // Not much I can do
            return undefined;
        }
    }

    let today = new Date(); // the point at which they have loaded the page
    console.log(today);
    thisDate.innerText = getDatePortion(today); // Let them know the date

    const logTime = function() {
        // TODO: figure out how to get the time portion
        // HINT: https://tecadmin.net/get-current-date-time-javascript/
    }

    console.log('main.js is loaded');
};

// Getting the container that will hold the date information
//  - id="thisDate"
const output = document.getElementById('thisDate');
showDate(output);

// Adding an event listener for the button
document.querySelector('button').addEventListener('click', function(ev) {
    const rightNow = new Date();
    console.log("The current time is:", rightNow);
    let hour = rightNow.getHours();
    let minute = rightNow.getMinutes();
    let second = rightNow.getSeconds();
    let ms = rightNow.getMilliseconds();
    console.log('hours:', hour, 'minutes:', minute, 'seconds:', second, 'milliseconds:', ms);
});
