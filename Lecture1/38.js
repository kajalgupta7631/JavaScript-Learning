//how to iterate an object
const person = {
    name : "kajal",
    age : 24,
    "person hobbies" : ["sleeping", "guitar"]
};

//for in loop
// for(let key in person)
// {
//     console.log(person[key]);
//     //console.log(person.key); == console.log(person["key"]);
// }

// for(let key in person)
// {
//     //console.log(`${key} : ${person[key]}`);
//     console.log(key, " : ", person[key]);
// }

//object.keys
// console.log(Object.keys(person));
// console.log(typeof Object.keys(person));
// let val = Array.isArray(Object.keys(person));
// console.log(val);

for(let key of Object.keys(person))
{
    console.log(person[key]);
}