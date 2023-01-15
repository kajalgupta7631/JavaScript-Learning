//imp  used in nodejs
//arrow functions

// const singHBD = function(){
//     console.log("HAPPY BIRTHDAY TO YOU.....")
// }
const singHBD = () => {
    console.log("HAPPY BIRTHDAY TO YOU.....")
}
singHBD();


// const add = function(n1, n2){
//     return n1+n2;
// }
const add = (n1, n2) => {
    return n1+n2;
}
console.log(add(4, 6));


// const isEven = function(number){
//     if(number & 1)
//         return false;
//     return true;
// }
//if having only 1 argument
// const isEven = number => {
//     if(number & 1)
//         return false;
//     return true;
// }
const isEven = number => number % 2 === 0;
// let n = +prompt();
// console.log(isEven(n));


