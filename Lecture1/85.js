
let nums = [1,2,3];
console.log(Object.getPrototypeOf(nums));

// we know that "only functions has prototype "
// but there are lots of properties in array too
// how it can be possible
// analyse

// internally it works like

// let nums = new Array(1,2,3);
// console.log(Array.prototype);
// console.log(nums);


function hello(){
    console.log("hello");
}

// prototype
console.log(hello.prototype);


// we will see the diff between prototype of function and prototype of an array
// prototype of an array is an array whereas
// prototype of an function is an object


// we can also change prototype

hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push(1);
console.log(hello.prototype);
