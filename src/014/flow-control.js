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

    console.log(message);
}

// Play the game
shootDie(); // 
