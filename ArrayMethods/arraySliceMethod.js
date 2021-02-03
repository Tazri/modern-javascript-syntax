// Array.prototype.slice();

let nameList = ['Md Tazri','Pentm Focasa','Focasa','Kynstone','Kingstone','Picaso'];

let sliceOne = nameList.slice(1,4);
let sliceTwo = nameList.slice(2);
let sliceThree = nameList.slice(-4,4);
console.log(sliceOne)
console.log(sliceTwo);
console.log(sliceThree);

// what happen if no index is not valid

let sliceFour = nameList.slice(39,500);
console.log(sliceFour);
// in that case it return empty array

// one more thing, slice method can not change main array. In other word it work immoutable way.
console.log(nameList);