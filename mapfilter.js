const numbers = [3, 4, 5 ,6 ,7 ,8];
const output = [];
for(let i =0; i< numbers.length; i++){
    const element = numbers[i];
    const result  = element*element;
    output.push(result);
    
}
console.log(output);


//Easy method
const result = numbers.map(function(element, index, array){
    console.log(element, index, array);
    return element*element;
});

console.log(result);

//shortcut method
const square = element=>element*element;
const square2 = x =>x * x;

// by arrow function
const result2 = numbers.map(x=> x*x);
console.log(result2);


// filter -> specific kisu select korar jonno use hoy-- na pele empty array dibe

const bigger = numbers.filter(x=> x>5);
console.log(bigger);

// find -> filter er special version-> find check korbe sudhu matro ekta ase kina. prothme jeta pabe diye dibe

const larger = numbers.find(x=> x>5);
console.log(larger);





