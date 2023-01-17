
const user1 = {
    firstname : "kajal",
    age : 24,
    about : function(){
        console.log(this.firstname, this.age);
    }
};


// don't do this mistake

// it will give undefined as ans
const myfun = user1.about;
myfun();


// because internally it is doing like
// const myfun = function(){
//     console.log(this.name, this.age);
// }
// myfun();