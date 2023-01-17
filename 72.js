// console.log(this);
// is same as
// console.log(window);


// will show window object
// function myfun(){
//     console.log(this);
// }
// myfun();


// will show the same output
// function myfun(){
//     console.log(this);
// }
// window.myfun();


// it will give output : undefined
// function myfun(){
//     "use strict"
//     console.log(this);
// }
// myfun();

 

//we can also write in top
"use strict"
function myfun(){
    console.log(this);
}
myfun();