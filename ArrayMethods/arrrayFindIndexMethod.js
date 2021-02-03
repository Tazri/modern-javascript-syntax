// Array.prototype.findIndex();

let numberArray = [1,2,3,4,5,6,7,8];

let index = numberArray.findIndex(element=> element > 5);
console.log(index);

// if element not exist inside the numberArray 

let indexOne = numberArray.findIndex(element=> element > 399);

console.log(indexOne);

// in that case it return -1