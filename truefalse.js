// falsy value -> number 0 hole, empty string hole, undefined, null, NaN, false
// Truthy value -> white space string a thakle, empty array


const age = 4; // sob kisu true dhorbe except 0. 0 hole false dhore nibe
if(age){
    console.log("condition is true");
}

else{
    console.log("condition is true");
}

const name = "Solaiman"; // eta r eta same (name.length>0) sob kisu true dhorbe except exmpty string. empty hole false dhore nibe
if(name){
    console.log("condition is true");
}

else{
    console.log("condition is true");
}

let student; // kono kisu define na korle by default seta false. undefined > false
console.log(student); 

let studentName = 0;

if(name || name ==0){
    console.log("condition is true");
}

else{
    console.log("condition is true");
}
