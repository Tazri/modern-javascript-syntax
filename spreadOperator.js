// spread operator

let numberListOne = [3,5,3,4,2,4,5,2];

let numberListTwo = [...numberListOne,'p','p','p'];


console.log(numberListTwo);

// i use spread operator in object operator

let person = {
    name : 'Md Tazri',
    age : 17,
    dateOfBirth : '10feb2003',
    color : 'crimson'
}

let personTwo = {
    ...person,
    name : 'PentmFocasa'
}

console.log(personTwo)

// if we want copy object and array immutable way, so in that case spread is best work.

