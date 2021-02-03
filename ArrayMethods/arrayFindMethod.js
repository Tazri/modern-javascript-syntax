// Array.prototype.find()


let numberArray = [1,2,3,4,5,6,7,8];

let result = numberArray.find((element,elementIndex,array)=>{
    console.log(element,elementIndex,array);
    return element > 15;
})

console.log(result);

// console.log(result);

// use find in class

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     test(){
//         console.log('This is test');
//     }
//     print(){
//         let numberArray = [1,2,3,4,5,6];
//         // numberArray.find(function(element){
//         //     this.test();
//         //     return element > 4;
//         // },this)
//         // do it another way:
//         numberArray.find(element=>{
//             this.test();
//             return element > 4;
//         })// in that case we can not defined this meaning in secound perameter
//     }
// }

// let personOne = new Person('Md Tazri',17);

// personOne.print()