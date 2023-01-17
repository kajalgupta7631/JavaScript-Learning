// oops

// proto,   prototype,   class

// const user = {
//     firstName : "kajal",
//     lastName : "gupta",
//     email : "kajal@gmail.com",
//     age : 24,
//     address : "hn, colony, pincode, state",
//     about() {
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18() {
//         return this.age >= 18;
//     }
// }

// const aboutUser = user.about();
// console.log(aboutUser);

// but is the above code is good for 1000+ users
// ans = NO
// therefore



// function (that function create object)
// add key value pair
// return an object

 
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
        return `${this.firstName} is ${this.age} years`;
    };
    user.is18 = function() {
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser("kajal", "gupta", "kg@gmail.com", 24, "kjhdw");
console.log(user1);
console.log(user1.is18());
console.log(user1.about);
