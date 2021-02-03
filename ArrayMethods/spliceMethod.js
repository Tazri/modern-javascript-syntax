// Array.prototype.splice();

let number = [1,2,3,4,5,6,7,8,9];

let sliceOne = number.splice(2,3,'p','p','p');

console.log(sliceOne);

// it change the main array. in other word splice method work mutable way.
console.log(number);

let sliceTwo = number.splice(20,0,'p','p','p');
// in that case it work in last index
console.log(sliceTwo);
console.log(number);