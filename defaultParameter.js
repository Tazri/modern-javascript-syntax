// default parameter in javascript

function sayName(name = 'Unknow'){
    console.log(name);
}


sayName('Md Tazri');
sayName();
sayName(undefined)// in that case it use default value;
sayName(null)// in that case it use null