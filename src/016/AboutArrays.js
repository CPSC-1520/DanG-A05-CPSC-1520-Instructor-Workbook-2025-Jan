const fileName = 'AboutArrays.js';
//                01234567891111
//                          0123

console.log(`Loaded ${fileName}`);
console.log(`The file name as ${fileName.length} characters.`);
let index = fileName.length - 1;

// Declare an array with several names
let names = ['Stewart Dent', 'Anna Lyst', 'Phe Nominal'];

console.log(`My list of names has ${names.length} entries.`);
console.table(names);
index = names.length - 1; // the last entry
console.log(`The last name is ${names[index]}`);
// Position in the array:            \_____/

console.log('\nThe names are:');
for(let position = 0; position < names.length; position++) {
    let specificName = names[position];
    console.log(`names[${position}] ==> ${specificName}`);
}

console.log('\nAdding an item to the array');
let length = names.push('Al Linemint'); // add to the end
length = names.unshift('Phil Ossophy'); // add to the start

console.log('\nThe new data is:');
console.table(names);

console.log('\nRemoving an item from the array');
let removed = names.splice(2,1); // Remove one item from index position 2
console.log(`Removed '${removed}' at index 2`);
console.table(names);

console.log('\nRemove last item from array');
removed = names.pop();
console.log(`Removed '${removed}'`);

console.log('\nRemove first item from array');
removed = names.shift();
console.log(`Removed '${removed}'`);

console.log();
console.table(names);
