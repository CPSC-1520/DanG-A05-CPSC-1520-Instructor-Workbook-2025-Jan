// node --watch AboutNode.js "Dan" "Bob Smith" 32 more words
console.log('About Node.js');

// Node accepts "arguments" (values) that are sent to the JavaScript file you tell it to run/watch
// Those are stored in a property of the process object
// The property name is .argv
// console.table(process.argv);
// Let's skip the first two items and grab the remaining ones
let args = process.argv.splice(2);
console.table(args);

// Use .push() to add items to the end of the array
args.push('Guido Andropov Drozdowski');
console.log('\nAdded an item to the array...');
console.table(args);

// Use .unshift() to add an item to the start
args.unshift(42); // Hitchiker's Guide to the Galaxy
console.log('\nAdded an item to the start...');
console.table(args);

// Let's remove the last item
let lastItem = args.pop();
// Let's remove the first item
let firstItem = args.shift();

console.log(`\nThe last item was ${lastItem} and the first item was ${firstItem}.`);
console.table(args);

// Rabbit Trails....
// I can declare an object like this
// (using an Object Literal - comma-separated set of properties)
let employee = {
    firstName: 'Stewart',
    lastName: 'Dent',
    wage: 15.05
}
console.log(`We hired ${employee.firstName} at ${employee.wage} per hour.`);
console.table(employee);
console.log(`His last name is ${employee['lastName']}`);

console.table(employee.lastName);
//            \___ string ____/
