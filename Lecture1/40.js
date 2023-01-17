//spread operator = ...

//in array how we used
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2];
// console.log(newArray);

//If we do this then it will not spread the array2 and output is diffrent.
// const newArray1 = [...array1, array2];
// console.log(newArray1);

// const newArray = [..."1234567"];
// console.log(newArray);

//NOW SPREAD OPERATOR IN OBJECT

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// };
// const obj2 = {
//     key3 : "value3",
//     key4 : "value4"
// };
// const newObject = {...obj1, ...obj2};
// console.log(newObject);

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};
const obj2 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4"
};

//the last updated value of key will considered
// const newObject = {...obj1, ...obj2};
// console.log(newObject);

//key will be 0, 1......
// const newObject = {...["item1", "item2"]};
// console.log(newObject);

//used for finding the index of string like
const newObject = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObject);




