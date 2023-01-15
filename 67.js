// sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// order is not guarenteed
// unique items only (no duplicates allowed)


const items = new Set([1,2,3,3,1]);
// or

const nums = new Set();
nums.add(1);
nums.add(2);
nums.add(items);

// to check particular element is present or not
// if(nums.has(1))
//     console.log("1 is present.");
// else
// console.log("1 is not present.");

// console.log(nums);

// for(let num of nums){
//     console.log(num);
// }


const arr = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(arr);

console.log(uniqueElements);

let length = 0;
for(let ue of uniqueElements)
{
    length++;
}
console.log(length);
