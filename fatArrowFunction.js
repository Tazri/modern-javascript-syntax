// example of fat arrow function

// function sum(a,b){
//     return a+b;
// }

// same thing do with fat arrow function

let sum = (a,b) => a+b;

// what importance of fat arrow function ?

// fat arrow function importance for it can not change this meaning in object.

// example of fat arrow function

// let languageOne = {
//     name: 'JavaScript',
//     framework : ['Angular','React','Vue'],
//     print(){
//         let self = this; // it is simple hacks
//         this.framework.forEach(function(element){
//             // in that case this meaning change inside this function.
//             console.log(`${self.name} is loved ${element}`);
//         })
//     }
// }

// languageOne.print()

// same thing do with fat arrow function inside the forEach function

let languageOne = {
    name : 'JavaScript',
    framework : ['Angular','React','Vue'],
    print(){
        this.framework.forEach(element=>{
            console.log(`${this.name} is loved ${element}`);
        })
    }
}

languageOne.print();

// in that case this meaning is not change inside the fat arrow function.

// one more thing, fat arrow function is not work as a constructor function. like below code:

// let Person = (name)=>{
//     this.name = name;
// }

// Above the code is not work. 