console.log('Running flow-control.js');

const rollDie = function() {
    let rnd = Math.random();
    rnd = rnd * 6;
    rnd = Math.ceil(rnd);
    return rnd;
}

// console.log('Testing rollDie(): ', rollDie());
const shootDie = function () {
    let firstDie = rollDie();
    let secondDie = rollDie();
    let total = firstDie + secondDie;
    let message = `You rolled a ${total}`;

    // Determine the winner/loser
    if(total === 7 || total === 11) {
        message += ' - You Win!!';
    } else if(total === 2 || total === 3 || total === 12) {
        message += ' - you lose 😢';
    }
    console.log(message);
}

// Play the game
// shootDie(); // 

// ================================
// What is looping?
const learnLoops = function() {
    // While statements
    while(rollDie() !== 6) {
        // Run when the conditional expression is truthy
        console.log('Not a 6');
    }
    console.log('Finally! A 6');

    // Let's do something a little less random
    let message = 'Counting to ten: ';
    let count = 1;
    while(count <= 10) {
        message += count + ', ';
        count++; // count = count + 1
    }
    console.log(message);
    console.log('done with while loop\n\ndemo of for loop');

    message = 'Counting with for statement:\n';
    for(let counter = 0; counter <= 10; counter++) {
        // my repeating logic...
        message += counter + ' | ';
    }
    console.log(message);
}

// learnLoops(); // comment this out after I learn

// Fibonacci Sequence
// 1, 1, 2, 3, 5, 8, 13, ....
//               \  +  /, next value

const buildFibonacciSequence = function(quantity) {
    let sequence;
    if(quantity <= 0) {
        sequence = 'Invalid quantity - must be greater than zero';
    } else if(quantity === 1) {
        sequence = '1';
    } else {
        // Use a loop to build the sequence
        // setup of variables
        let previous = 0;
        let current = 1;
        sequence = `${current}`;
        // begin the loop
        for(let count = 2; count <= quantity; count++) {
            console.log(`calc: next = ${previous} + ${current}`);
            let next = previous + current;
            sequence += `, ${next}`;
            // update values for the next time through the loop
            previous = current;
            current = next;
            console.log(`previous: ${previous}, current: ${current}`);
        }
    }

    return sequence;
}

console.log('\n\n');
console.log(buildFibonacciSequence(1));
console.log(buildFibonacciSequence(7));
