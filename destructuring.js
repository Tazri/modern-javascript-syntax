// object destructuring

let person = {
    name : 'Md Tazri',
    age : 17,
    color : 'crimson',
    education : {
        psc : 4.75,
        jsc : 4.64,
        ssc : 5
    }
}

let {name : title,age,education: {
    jsc : jscNumber
}} = person;

console.log('title : ',title);
console.log('age : ',age);
console.log('jsc : ',jscNumber);

// what happen if object is not here inside the object
let personOne = {
    name : 'Pentm Focasa',
    age : 'unknow',
}

// let {
//     name,
//     education : {
//         jsc
//     }
// } = personOne;


// console.log(jsc);

// in that case use default perameter.
let {
    name,
    education : {
        jsc
    } = {},
    age : ageOne
} = personOne;

console.log('PersonOne name : ',name);
console.log('personOne ageOne ',ageOne);
console.log('PersonOne jsc : ',jsc);


// array destructuring

let nameList = ['pentm','focasa','tazri','eren','kynstone',[3,2,34],'troy','trilon'];

let [namePentm,,,,nameKynstone,[numberOne,,numberTwo]] = nameList;

console.log(namePentm);
console.log(nameKynstone);
console.log(numberOne);
console.log(numberTwo);

// swap variable by array destructuring
console.log('>>> Swap variable <<<');
let numOne = 0;
let numTwo = 1;
console.log('before swap numOne : ',numOne);
console.log('before swap numTwo : ',numTwo);
[numOne,numTwo] = [numTwo,numOne];
console.log('numOne : ',numOne);
console.log('numTwo : ',numTwo);

