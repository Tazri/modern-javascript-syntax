// Array.prototype.map();

// map use for do something with array element and return some value and it store sperad array.

let number = [1,2,3,4,5,6,7,8,9];

let multiNumber = number.map(number=>number*2);
console.log(multiNumber);

// it work immutable way.
console.log(number);

// what happen it apply on empty array?

let numberListOne = [];

let result = numberListOne.map(element => element*3);
console.log(result);

// in that case it return empty array.