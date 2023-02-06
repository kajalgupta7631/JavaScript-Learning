// function execution context

let foo = "foo";
console.log(foo);
function getFullName(fname, lname){
    console.log(arguments);
    let myVar = "variable inside function.";
    console.log(myVar);
    const fullName = fname + " " + lname;
    return fullName;
}

const personName = getFullName("kajal", "gupta");
console.log(personName);