//rest parameters

// function add(a, b, ...c){
//     console.log(`value of a is : ${a}`);
//     console.log(`value of b is : ${b}`);
//     console.log(`value of c is : ${c}`);
// }
// add(3, 4, 5, 6, 7, 8, 9);


function addAll(...numbers){
    let sum = 0;
    for(let i = 0; i< numbers.length; i++)
        sum += numbers[i];
    return sum;
}
const ans = addAll(7, 4, 5, 6, 2, 8);
console.log(`sum of numbers is : ${ans}`);