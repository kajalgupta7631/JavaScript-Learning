// in javascript
// function can act like a function as well as an object.
// function ===> function + object


function hello(){
    console.log("hello world");
}

// property "name" --> give name of the funtion
console.log(hello.name); 
// looking like accessing some property of an object


// we can add our own properties

hello.myOwnProperty = "unique value";
console.log(hello.myOwnProperty);



// function provides more userful properties.


// function provides free space means empty object
// this free space is known as prototype in which we can add our own key pair value
// console.log(hello.prototype); // {}
// only functions provide prototype property 

// output : prototype is present.
if(hello.prototype)
    console.log("prototype is present.");
else
    console.log("prototype is not present.");



// creating an object
const obj = {
    about(){
        console.log("i am an object");
    }
}

// output : prototype is not present.
if(obj.prototype)
    console.log("prototype is present.");
else
    console.log("prototype is not present."); 



// creating an array
const arr = ["value1"]

// output : prototype is not present.
if(arr.prototype)
    console.log("prototype is present.");
else
    console.log("prototype is not present."); 




// adding properties in prototype
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "la lalal la la lala";
}
console.log(hello.prototype);