//default parameter

// function add(n1, n2){
//     return n1+n2;
// }
// const ans = add(4,5);
// console.log(ans);


//previously we do this for default value set.
// function add(a, b){
//     //used to set default value of b = 1.
//     if(typeof b === "undefined")
//         b = 1;
//     return a+b;
// }
// const ans = add(4);
// console.log(ans);


//now we do this
function add(a, b = 0){
    return a+b;
}
//const ans = add(4);   //ans = 4
const ans = add(4, 8);  //ans = 12
console.log(ans);



