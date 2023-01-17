//Array destructing
// const array = ["value1", "value2", "value3"];

// let key1 = array[0];
// let key2 = array[1];
// console.log("value of key1 is : ", key1);
// console.log("value of key2 is : ", key2);

// let [key1, key2] = array;
// console.log("value of key1 is : ", key1);
// console.log("value of key2 is : ", key2);

// let [key1, key2, key3, key4] = array;
// console.log("value of key1 is : ", key1);
// console.log("value of key2 is : ", key2);
// console.log("value of key3 is : ", key3);
// console.log("value of key4 is : ", key4);

// let [key1, , key2] = array;
// console.log("value of key1 is : ", key1);
// console.log("value of key2 is : ", key2);

const array = ["value1", "value2", "value3", "value4"];

let [key1, key2, ...array2] = array;
console.log("value of key1 is : ", key1);
console.log("value of key2 is : ", key2);
console.log("new array : ", array2);