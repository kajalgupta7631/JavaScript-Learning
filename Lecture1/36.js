//objects
//arrays are good but not sufficient
//for real world data
//objects store key value pairs
//objects don't have index

//how to create objects
const person = {name:"harshit", age:22};
console.log(person);
// console.log(typeof person);

//how to access data from objects
// person.name = "kajal";
// console.log(person.name);
// console.log(person.age);
//we can also access in this way
// console.log(person["name"]);
// console.log(person["age"]);

//how to add key value pair to objects
// person.gender = "female";
// console.log(person.gender);
//we can add in this way also
person["gender"] = "female";
console.log(person.gender);
