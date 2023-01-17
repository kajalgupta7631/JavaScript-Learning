// some method

//will return true;
// const nums = [3,5,8,9];

// const ans = nums.some((num) => {
//     return num % 2 === 0;
// });
// console.log(ans);



//will return false;
const nums = [3,5,11,9];

const ans = nums.some((num) => {
    return num % 2 === 0;
});

console.log(ans);



const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 35000},
    {productId : 4, productName : "tv", price : 250000}
];

const result = userCart.some((item) => {
    return item.price > 100000;
});

console.log(result);
