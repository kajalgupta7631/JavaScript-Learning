// reduce

const nums = [1,2,3,4,5];

// aim : sum of all the numbers in array

// const sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(sum);

//internal work

// accumulator,   currentValue,   return
// 1          ,   2           ,   3
// 3          ,   3           ,   6
// 6          ,   4           ,   10
// 10         ,   5           ,   15

// by passing initial value as 100.

// const sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);

// accumulator,   currentValue,   return
// 100        ,   1           ,   101
// 101        ,   2           ,   103
// 103        ,   3           ,   106
// 106        ,   4           ,   110
// 110        ,   5           ,   115



const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000}
];

const costSum = userCart.reduce((totalPrice, currProduct) => {
    return totalPrice + currProduct.price;
}, 0);

console.log(costSum);

// totalPrice,   currProduct,   return
// 0         ,   12000      ,   12000
// 12000     ,   22000      ,   34000
// 34000     ,   15000      ,   49000





