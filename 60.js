// SORT

//by default sort function sort the array as an string.

// const nums = [800,4,50,6,2000,100,90];
// nums.sort();
// console.log(nums);

// const str = ["harshit", "abc", "Kajal", "ABC"];
// str.sort();
// console.log(str);


const nums = [800,4,50,6,2000,100,90];
nums.sort((a,b) => {
    return a-b;
});
console.log(nums);


// 800, 4
// 800 - 4 => 796
// a-b  =>  +ve then swap
// 4, 800

// 4, 50
// 4 - 50 => 46
// a-b  =>  -ve then do nothing
// 4, 50


//price lowToHigh, highToLow

const products = [
    {productId : 1, productName : "p1", price : 300},
    {productId : 2, productName : "p2", price : 3000},
    {productId : 3, productName : "p3", price : 200},
    {productId : 4, productName : "p4", price : 5000},
    {productId : 5, productName : "p5", price : 8000},
    {productId : 6, productName : "p6", price : 500},
];

const low2High = products.slice(0).sort((a,b) => {
    return a.price-b.price;
});
console.log(low2High);


