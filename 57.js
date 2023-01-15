// map method

const numbers = [3,4,6,1,8];

// function square(number){
//     return number * number;
// }
// const squareArray = numbers.map(square);
// console.log(squareArray);


// function expression

// const squareArray = numbers.map(function(number){
//     return number * number;
// });
// console.log(squareArray);



// arrow function

// const squareArray = numbers.map((number) => {
//     return number * number;
// });
// console.log(squareArray);


const users = [
    {firstName : "harshit", age : 23},
    {firstName : "mohit", age : 21},
    {firstName : "nitish", age : 22},
    {firstName : "garima", age : 20}
]

const nameArray = users.map((user) => {
    return user.firstName;
})

console.log(nameArray);
