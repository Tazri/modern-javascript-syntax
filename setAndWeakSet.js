// Set
// what is set ?
// set is array like object. It use for store unique type of any data.

// Example of set :

// let numberList = [1,2,3,4,5,3,2,34];
// let numberSet = new Set();
// let numberSetTwo = new Set(numberList);
// console.log(numberSet);
// console.log(numberSetTwo);

// set method in javascript

let numberSet = new Set();
// methods:

// numberSet.add(343); // add for add element in set;
// numberSet.add(33,34,348); // only add first element.
// numberSet.add(3); // it  first element then return same set in here.
// let refOfNumberSet = numberSet.add('p'); // if we want we store it another variable. like this;
// console.log('refOfNumberSet ', refOfNumberSet);
// console.log('They are same .', numberSet === refOfNumberSet);

// console.log('p is here ? ',numberSet.has('p')); // has method use for check element is exist in set;
// console.log('t is here ? ', numberSet.has('t')); // in that case it return false because t is not exist in numberSet;

// numberSet.delete(3); // delete for delete element from set;
// numberSet.add('t').add('f'); // we use multiply time method like this.
// let whatReturn = numberSet.delete('t'); // delete method return boolean if the element exist in set. also delete this element.
// console.log('whatReturn =',whatReturn);
// let ifElementNotExist = numberSet.delete('salkdjf');
// console.log('ifElementNotExist = ', ifElementNotExist); // in here it return false;

// let whatReturnClear = numberSet.clear(); // it clear the set;
// console.log('whtatReturnClear = ',whatReturnClear); // clear return undefined;
// let whatReturnClearEmptySet = numberSet.clear(); // in that case it return undefined
// console.log('what return clear empty set = ',whatReturnClearEmptySet);

// numberSet.add(2).add(32).add(343);
// let setEntries = numberSet.entries(); // it return iterator. which iterate set value;
// console.log('setEntries = ' ,setEntries);
// console.log('setEntries.next() = ', setEntries.next());
// console.log('setEntries.next() = ', setEntries.next());
// console.log('setEntries.next() = ', setEntries.next());
// console.log('setEntries.next() = ', setEntries.next());

// let setKey = numberSet.keys(); // it look like work entries
// console.log('setKey = ',setKey);
// console.log('setKey.next() = ',setKey.next());
// console.log('setKey.next() = ',setKey.next());
// console.log('setKey.next() = ',setKey.next());
// console.log('setKey.next() = ',setKey.next());


// numberSet.add(3).add('p').add('t').add('f').add('l');
// let setValues = numberSet.values(); // work like key
// console.log('setValues = ',setValues);
// console.log('setValues.next() = ',setValues.next());
// console.log('setValues.next() = ',setValues.next());
// console.log('setValues.next() = ',setValues.next());
// console.log('setValues.next() = ',setValues.next());
// console.log('setValues.next() = ',setValues.next());
// console.log('setValues.next() = ',setValues.next());

// console.log('numberSet.size = ',numberSet.size); // return element number;
// numberSet.forEach(element=>console.log(element)); // work like forEach method. element is set element;
// console.log(numberSet);

// set methods

// add >>> work for add element and return set
// delete >>> work for delete element and return boolean
// clear >>> work for clear set and return undefined
// has >>> chack element exist() and return boolean
// entries >>> return iterator entries it value is array
// keys >>> it look like work entries but it value is not array
// values >>> work like key
// size >>> return element number
// forEach >>> work like forEach methods


// set can store referance type data

// let students = [
//     {name: 'Md Tazri', id : 3},
//     {name: 'Md Tazri', id : 3},
//     {name: 'Pentm Focasa', id : 34}
// ]

// let studentsSet = new Set(students);
// console.log(studentsSet);

// if we want delete element in the set in here

// let deleteId = students[0];
// studentsSet.delete(deleteId);
// console.groupCollapsed(studentsSet);

// convert the set to a array

// let letterSet = new Set(['p','t','l','k','m','n'])

// console.log('Letter Set : ',letterSet);

// let letterSetArray = Array.from(letterSet);
// console.log('letterSetArray = ',letterSetArray);
// let letterSetArrayTwo = [...letterSet];
// console.log('letterSetArrayTwo = ',letterSetArrayTwo); // es 6 syntax

// remove duplicate element in array

// let numberList = [1,2,3,4,5,5,4,3,4,4];

// console.log('nuberList =',numberList);
// console.log('remove duplicate number list = ',[...new Set(numberList)]);

// create set functionality

let setOne = new Set([1,4,5,7,'a','p','t']);
let setTwo = new Set([3,'t','p']);

// function for union
// function union(setOne,setTwo){
//     return new Set([...setOne],[...setTwo]);
// }

// function for intersection 
// function intersection(setOne,setTwo){
//     return new Set([...setOne].filter(element=> setTwo.has(element)));
// }

// console.log('SetOne union setTwo = ',union(setOne,setTwo));
// console.log('setOne intersection setTwo = ',intersection(setOne,setTwo));

// >>> WeakSet <<<
// >>> WeakSet Only store refernce type value;

// example of weakSet

// let weakSetOne = new WeakSet(3); // we can store any premitive type value.
// console.log(weakSetOne);

// let weakSetOne = new WeakSet([{
//     name : 'Md Tazri.',
//     age : 17
// }])

// weakSetOne.add({name:'Pentm Focasa' , age : 'unknown'});

// console.log('weakSetOne = ', weakSetOne);
// console.log('weakSetOne.size = ',weakSetOne.size);

// usage of weakSet

const weakSet = new WeakSet();
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        weakSet.add(this);
    }
    // print something
    print(){
        if(!weakSet.has(this)){
            throw new Error('You can not use this method directly');
        }else{
            return this.name;
        }
    }
}

let personOne = new Person('Md Tazri',17);
console.log(personOne.print());
console.log(Person.prototype.print());