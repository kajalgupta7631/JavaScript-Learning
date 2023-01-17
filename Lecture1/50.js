//block scope vs function scope

//let and const are block scope
//var is function scope



//cann.t access outside
// {
//     let name = "kajal";
// }
// console.log(name);


//cann.t access outside
// {
//     const name = "kajal";
// }
// console.log(name);


//can possible
// {
//     var name = "kajal";
// }
// console.log(name);


//use
// if(true){
//     var name = "kajal";
//     console.log(name);
// }
// console.log(name);


function myApp(){
    if(true){
        let name = "kajal";
        console.log(name);
    }
    console.log(name);
}
myApp();