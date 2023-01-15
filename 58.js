// filter method

const nums = [8,7,4,1,2,3];

// const isEven = function(number){
//     return number % 2 === 0;
// }
// const evenNums = nums.filter(isEven);
// console.log(evenNums);


// arrow function

const evenNums = nums.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNums);