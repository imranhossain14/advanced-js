const allName = [];
const student = [
    {id : 21, name : "Imran Hossain"},
    {id : 31, name : "Kamal Hossain"},
    {id : 41, name : "Modafffor Hossain"},
    {id : 51, name : "Dipjol Hossain"}

]
for(let i = 0; i < student.length; i++) {
    const element = student[i];
    allName.push(element);
    
}
console.log(allName);

// better style
const names = student.map(s=>s.name);
const id = student.map(x=>x.id);
console.log(names);
console.log(id);

//filter
const bigger = student.filter(s=>s.id>40);
console.log(bigger);

// find

const bigger2 = student.find(s=>s.id>40);
console.log(bigger2);