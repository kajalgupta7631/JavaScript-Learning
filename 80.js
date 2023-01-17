
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
// const obj2 = {
//     key3 : "value3"
// }

// output : undefined
// console.log(obj2.key1);


// but we want if key1 is not present in obj2 then
// control go to obj1 and search key1 in obj1
// for this we will do


const obj2 = Object.create(obj1);
obj2.key3 = "value3";

// output : value of obj1
console.log(obj2.key1);

// output : key3 and some [[prototype]]
console.log(obj2);

// __proto__
// official ecmascript documentation
// [[prototype]]
// so __proto__ and [[prototype]] is same


// output : key1 & key2
console.log(obj2.__proto__);


// internally 
// obj2.__proto__ = obj1;

