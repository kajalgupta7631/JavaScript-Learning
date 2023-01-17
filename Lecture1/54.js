//  callback functions


function myFun2(){
    console.log("inside my func 2.");
}
function myFun(callback){
    console.log("inside my func. I  can........");
    callback();
}

myFun(myFun2);