// lexical environment, scope chain


// const lname = "gupta";

// const printName = function(){
//     const fname = "kajal";
//     console.log(fname);
//     console.log(lname);
// }
// printName();


const lname = "gupta";

const printName = function(){
    const fname = "kajal";
    function myFun(){
        console.log(fname);
        console.log(lname);
    }
    myFun();
}
printName();