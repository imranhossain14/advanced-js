let bonus = 20 ;  // global scope -sob jaiga theke accessible 


function sum(first, second){
    let result = first + second+bonus;
    
    console.log(bonus);
    if(result>9){         // block scope
        const mood ="Happy";
        console.log(mood);
    }
    console.log(mood); // it will provide error bolbe mood is not defiend 
    return result;
}

const output = sum(3,7);
//console.log(result); // result baire theke access kora jabena. out of scope
//console.log(output);
//console.log(bonus);
