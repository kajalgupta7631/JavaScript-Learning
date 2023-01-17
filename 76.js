// const user1 = {
//     firstname : "kajal",
//     age : 24,
//     about : function(){
//         console.log(this.age, this.firstname);
//     }
// }

// is same as

const user1 = {
    firstname : "kajal",
    age : 24,
    about(){
        console.log(this.age, this.firstname);
    }
}

user1.about();
