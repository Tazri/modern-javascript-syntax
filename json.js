// what is json?

// json full meaning is JavaScript Object Notation

// json example

// let personOne = {
//     name : 'Tazri',
//     age : 17,
//     friends : ['Pentm Focasa','Focasa','Kynstone']
// }

// let personOneJson = JSON.stringify(personOne);
// let personTwo = JSON.parse(personOneJson);

// console.log('personOne = ',personOne);
// console.log('personOneJson = ',personOneJson);
// console.log('typeof personOneJson = ',typeof personOneJson);
// console.log('personTwo = ',personTwo);
// console.log('typeof personTwo = ',typeof personTwo);
// console.log('personOne == personTwo = ',personOne == personTwo);
// personTwo.friends[2] = 'unknow';
// console.log('personOne = ',personOne);
// console.log('personTwo = ',personTwo);


// copy object deeply by json 

let languageOne = {
    name : 'JavaScript',
    estd : 1995,
    libraries : ['Angular','React','Vue']
}

let languageTwo = JSON.parse(JSON.stringify(languageOne));

console.log('languageOne = ',languageOne);
console.log('languageTwo = ',languageTwo);
// now change languageTwo
languageTwo.name = 'Python';
console.log('>>> change language Two <<<');
console.log('languageOne = ',languageOne);
console.log('languageTwo = ',languageTwo);

// change libraries
languageTwo.libraries[0] = 'Dojango';
console.log('>>> change language Two libraries <<<');
console.log('languageOne = ',languageOne);
console.log('languageTwo = ',languageTwo);
