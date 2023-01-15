//hoisting

//can possible
// hello();
// function hello(){
//     console.log("hello world");
// }

//can not possible in function expression
// hello();
// const hello = function(){
//     console.log("hello world");
// }

//can not possible in arrow function
// hello();
// const hello = () => {
//     console.log("hello world");
// }

//will give output : undefined
// console.log(hello);
// var hello = "hello world"

//will give output : ERROR
// console.log(hello);
// let hello = "hello world"

//will give output : ERROR
console.log(hello);
const hello = "hello world";