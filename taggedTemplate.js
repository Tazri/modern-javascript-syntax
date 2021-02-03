// tagged tempalte literal

function addMr(string,...value){
    return string.reduce((prevStr,curStr)=>{
        return prevStr + curStr + (value.length?'Mr '+value.shift():'');
    },'')
}

let nameOne = 'Md Tazri';
let nameTwo = 'Pentm Focasa';


console.log(addMr`We know ${nameOne} and ${nameTwo} is a human.`);
