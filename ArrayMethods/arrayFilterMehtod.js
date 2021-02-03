// Array.prototype.filter()

let numberArray = [1,2,3,4,5,6,7,8];

let resultArray = numberArray.filter(element => element % 2);
console.log(resultArray);

// What heppen if no element complate this condition in filter;

let resultArrayOne = numberArray.filter(element => element > 399);

console.log(resultArrayOne);

// in that case it return empty array.