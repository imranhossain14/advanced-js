// double equal konta kon type er data type seta check korbena
//triple equal konta kon type er eta check kore .strictly check korbe
// double equal just value check korbe-> triple equal mane value and type duitai check korbe

const first = 2;
const second =3;
if(first==second){
    console.log("condition is true")
}
else{
    console.log("condition is false");
}


// string dile true bole
const first2 = 2;
const second2 ="2";
if(first2==second2){             
    console.log("condition is true")
}
else{
    console.log("condition is false");
}

// jodi triple use kori
const first3 = 2;
const second3 ="2";
if(first3===second3){
    console.log("condition is true")
}
else{
    console.log("condition is false");
}

// 0 and false have same value in case of double equal 

const first4 = 0;
const second4 =false;
if(first4==second4){
    console.log("condition is true")
}
else{
    console.log("condition is false");
}

// but it is false in case of triple equal as type r not same
const first5 = 0;
const second5 =false;
if(first5===second5){
    console.log("condition is true")
}
else{
    console.log("condition is false");
}


