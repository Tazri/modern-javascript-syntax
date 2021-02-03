// Array.prototype.concat()

// concat method use for join two array.

let numberListOne = [1,2,3,4,5,6];
let numberListTwo = [7,8,9];
let numberList = numberListOne.concat(numberListTwo,33,[34,23]);

console.log(numberList);

// it only use for join two and more array. 
// but it can not change main array. In other word it work in immutable way.
console.log(numberListOne);