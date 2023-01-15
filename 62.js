// every method

//will return true
const nums = [2,4,6,8,10];

const ans = nums.every((num) => {
    return num % 2 === 0;
});
console.log(ans);

//will return false

// const nums = [2,4,6,9,10];
// const ans = nums.every((num) => {
//     return num % 2 === 0;
// });

// console.log(ans);



const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000}
];

// check every product price < 30000

const result = userCart.every((item) => {
    return item.price < 30000;
});
console.log(result);