// maps object
// map is an iterable

//store data in ordered fashion

// store key value pair(like objects)
// duplicate keys are not allowed like objects

// different between maps and objects

// objets can only have string or symbol as key

// in maps you can use anything as key 
// like array,  number,  string

// object literals
// keys  --->  string
// keys  --->  symbol
// const person = {
//     name : "kajal",
//     1 : 24
// }
// console.log(person.name);
// console.log(person["name"]);

// for(let key in person){
//     console.log(typeof key);
// }



// key value pair
const person = new Map([["name", "kajal"], ["age", 24]]);
// const person = new Map();
// person.set("name", "kajal");
// person.set("age", 24);
// person.set(1, "one");
// person.set([1,2,3], "array");
// person.set({1 : "one"}, "object");
//console.log(person);

// console.log(person.get("name"));
// console.log(person.keys);

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key, value] of person){
//     console.log(key);
//     console.log(Array.isArray(key));
//     console.log(key, value);
// }



const person1 = {
    id : 1,
    name : "kajal"
};

const extraInfo = new Map();
extraInfo.set(person1, {age : 8, gender : "female"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);