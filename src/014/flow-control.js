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
shootDie(); // 
