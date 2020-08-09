const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
    if(numbers[i]>3){
        break;
    }
}

// //continue

const numbers1 = [-1, -2, -3,-4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers1.length; i++) {
 
    if(numbers1[i]<0){
        continue;
    }
    console.log(numbers1[i]);
}
