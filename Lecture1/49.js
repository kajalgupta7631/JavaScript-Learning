//lexical scope

const myvar = "value1";

function myApp(){
    //const myvar = "value1";
    function myFun(){
        //const myvar = "valuechanged"
        console.log("call from myFun",myvar);
    }
    const myFun2 = function(){};
    const myFun3 = () => {};
    console.log(myvar);
    myFun();
}
myApp();