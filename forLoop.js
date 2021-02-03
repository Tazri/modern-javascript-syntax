// for loop

let number = [1,2,3,4,5,6];

var i =1;

for(/* if i want i can not declear variable in here*/ ; i < number.length;/**It not importance */){
    console.log(number[i]);
    // inside the loop i want use increament opearator;
    i++;
}

// do same thing with for of loop.

let string = 'Md Tazri'
let object = {
    name : 'Tazri',
    age: 17,
    dateOfBirth : '10feb2003',
    color : 'crimson'
}

let numberList = ['p','p','t',3,4,5,6,7,8,9];

// for of loop traverse in array:
for(element of numberList){
    console.log(element);
}

// for of loop try to traverse in object
// for(element of object){
//     console.log(element);
// }

// we can not traverse object by for of loop.

// now try to traverse string by for of loop

for(element of string){
    console.log(element);
}

// for in loop for traverse object property and traverse array and string index:
// let see above thing with for in loop

for(element in numberList){
    console.log('index: ',element);
}
// in that case it print element index;

// let see it on string;
for(elementIndex in string){
    console.log('String index: ',elementIndex);
}

// but if it apply on object then it print object property
// let see it
console.log('>>> let see for in loop on object <<<');
for(property in object){
    console.log('>>>This is object property :',property);
}

