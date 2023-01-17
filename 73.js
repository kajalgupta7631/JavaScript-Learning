// call,  apply,    bind  ---> v.v.imp

// function myfun(){
//     console.log("Hello World");
// };
// myfun();
// we can call myfun in this way also
// myfun.call();


// const user1 = {
//     name : "kajal",
//     age : 24,
//     about : function(){
//         console.log(this.name, this.age);
//     }
// };

// const user2 = {
//     name : "nitin",
//     age : 20
// };

// it will pass user2 and this will represent user2 object
// user1.about.call(user2);

// const user1 = {
//     name : "kajal",
//     age : 24,
//     about : function(hobby, favMusician){
//         console.log(this.name, this.age, this.hobby, this.favMusician);
//     }
// };

//user1.about.call(user2, "guitar", "atif");



function about(hobby, favMusician){
    console.log(this.name, this.age, hobby, favMusician);
}

const user1 = {
    name : "kajal",
    age : 24,
};
const user2 = {
    name : "nitin",
    age : 20
};



// apply
about.apply(user2, ["guitar", "atif"]);


// bind
const fun = about.bind(user2, "guitar", "atif");
fun();