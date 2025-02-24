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