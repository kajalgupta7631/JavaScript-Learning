//  function returning function

// function myFunc(){
//     return {name : "kajal", age : 24};
// }
// const ans = myFunc();
// console.log(ans);

function myFunc(){
    function hello(){
        console.log("hello world.");
    }
    return hello;
}
const ans = myFunc();
ans();