// rest operator use inside the function parameter

function print(...number){
    console.log(...number);
}

print(2,3,5,34,4534,3,'Tazri')

// another example 

function printOne(a,b,...params){
    console.log(a);
    console.log(b);
    console.log(...params);
}

printOne('Tazri','Focasa',2,2,234,2);