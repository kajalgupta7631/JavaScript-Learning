//functions

function singHBD(){
    console.log("HAPPY BIRTHDAY TO YOU.....")
}
function add(n1, n2){
    return n1+n2;
}
singHBD();
console.log(add(4, 6));

//isEven
//input : 1 number
//output : true/false 

function isEven(number)
{
    if(number & 1)
        return false;
    return true;
}
// let n = +prompt();
// console.log(isEven(n));

//input : string
//output : first character

function firstChar(str){
    return str[0];
}
console.log(firstChar("jsgdfugdvb"));

//input : array, target(number)
//output : index of target number
function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i] === target)
            return i;
    }
    return -1;
}
const array = [4, 2, 90, 7];
const ans = findTarget(array, 90);
console.log(ans);
