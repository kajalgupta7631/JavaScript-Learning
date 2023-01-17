// arrow function

// arrow function doen not have i's own "this"
// it takes "this" from it's surrounding


const user1 = {
    firstname : "kajal",
    age : 24,
    about : () => {
        console.log(this.age, this.firstname);
    }
}

user1.about();

// also we can'nt do
// user1.about.call(user1);