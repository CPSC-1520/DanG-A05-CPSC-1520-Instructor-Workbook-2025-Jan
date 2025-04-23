function buildDaySlot(date) {
    return buildDivSpanText(date.getDate());
}
function buildSlot(text) {
    return buildDivSpanText(text);
}

function buildDivSpanText(text) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let textNode = document.createTextNode(text);
    div.appendChild(span);
    span.appendChild(textNode);
    return div;
}

let calendarContainer = document.getElementById('calendar');

function updateCalendar(evt) {
    // Expected to be a <input type="month" />
    let selectedMonth = evt.target.value;
    let [year, month] = selectedMonth.split('-').map(x => parseInt(x));
    let currentDate = new Date(year, month - 1);
    currentDate.setDate(currentDate.getDate() - (currentDate.getDay() + 1));

    calendarContainer.innerHTML = '';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let count = 0; count < days.length; count++) {
        calendarContainer.appendChild(buildSlot(days[count]));
    }
    for (let count = 0; count < 42; count++) {
        currentDate.setDate(currentDate.getDate() + 1);
        calendarContainer.appendChild(buildDaySlot(currentDate));
    }
}


document.getElementById('start-month')
    .addEventListener('change', updateCalendar);
