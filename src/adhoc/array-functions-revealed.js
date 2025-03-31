// A "peek" into the internal workings of the Array's .map() function
function map(callback) {
    let copy = [];
    for(let index = 0; index < this.length; index++) {
        let item = this[index];
        let changedItem = callback(item, index, this);
        copy.push(changedItem);
    }
    return copy;
}

function forEach(callback) {
    for(let index = 0; index < this.length; index++) {
        let item = this[index];
        let changedItem = callback(item, index, this);
    }
}

