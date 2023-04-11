let person = {
    name:'Gintas',
    age: 30
};
person.name = 'berzinis'; 

let selection = 'name';
person[selection] = 'Mary';
console.log(person); 

let selectedColor = ['red','blue'];
selectedColor[2] = 1;
console.log(selectedColor.length);