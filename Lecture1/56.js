//  important array methods

// forEach
// map   // very imp
// filter
// reduce    // very imp

const nums = [4, 2, 6, 7];

// function multiplyBy2(num, index){
//     console.log("index is : ", index);
//     console.log("after multiplication : ", num * 2);
// }

// for(let i = 0; i < nums.length; i++){
//     multiplyBy2(nums[i], i);
// }

// function fun(num, index){
//     console.log(`index is ${index} and number is ${num}`);
// }
// nums.forEach(fun);   //it will automatically pass each value with their index

// nums.forEach(function(num, index){
//     console.log(`index is ${index} and number is ${num}`);
// })

const users = [
    {firstName : "harshit", age : 23},
    {firstName : "mohit", age : 21},
    {firstName : "nitish", age : 22},
    {firstName : "garima", age : 20}
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// arrow function
users.forEach((user) => {
    console.log(user.firstName);
})
// is similar to

// for(let user of users){
//     console.log(user.firstName);
// }