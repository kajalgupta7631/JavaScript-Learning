// Hoisting 
// before declaration we can use the variables & functions
// because of Global Execution Context.


console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "kajal";
var lastName = "gupta";
var fullName = firstName + " " + lastName;
console.log(fullName);