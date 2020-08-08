// undefined mane tumi kono ekta kisu define koronay
//null mane empty/ khali/ not exit

// way 1-> pakhi define korinay
let pakhi;
console.log(pakhi);

// way-2-> return na korle

function add(num1,num2){
    console.log(num1+num2);  // return korinay tai undefined dekhabe
}
const result = add(13,5);
console.log('result1',result);

// way-3 tumi return likhso but ki return korso eta lekhoni

function add(num1,num2){
    return;  // return korinay tai undefined dekhabe
}
const result2 = add(13,5);
console.log('result2',result2);

// way -4 --paramameter na pathale 
function add(num1, num2){
    console.log(num1,num2);
}
const result3 = add(13);
console.log('result3',result3);

//way -5 -> kono ekta object er vitorer property jeta call kora hoise seta jodi na thake
const premik = {
    name : "smart dude",
    phoneNumber: 12345
}
console.log(premik.address);

// way-6 value set kore diso undefined
let fun = undefined;
console.log("undefined define korlam",fun);

//way -7
let marks = [2, 5 ,9 ];
console.log(marks[11])



