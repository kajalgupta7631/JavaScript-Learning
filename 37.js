//diff between dot and bracket notation
const key = "email";
const person = {
    name : "kajal",
    age : 24,
    "person hobbies" : ["sleeping", "guitar"]
};

console.log(person.age);
//but i can't access person hobbies in the same way like
//console.log(person.person hobbies);

//correct way to use person hobbies
console.log(person["person hobbies"]);

//add email where key name should be "email"

//but this will add key instead of email
// person.key = "kajalgupta7631@gmail.com";
// console.log(person);

//right way to do the same
person[key] = "kajalgupta7631@gmail.com";
console.log(person);