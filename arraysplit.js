
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//array join elements
const together = numbers.join(" ami ");
console.log(together);

// array slice
const part =numbers.slice(2,5);   //index 2 theke suru index 5 a kete dilam sol 3 4 5 -> index 2,3,4 pabo
console.log(part);

// array splice 
//array.splice(index, howmany, item1, ....., itemX)

const removed = numbers.splice(2,3);  // 2theke suru korbe r 2ta sorabe orginal array theke
console.log(removed);

// inject items by splice
//const removed2 = numbers.splice(2,5, 77, 99);  // 2theke suru korbe r 2ta sorabe orginal array theke
//console.log(removed2);


