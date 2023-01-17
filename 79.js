//  improving previous code

// const userMethods = {
//     about : function() {
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     },
//     sing : function(){
//         return "la lala la la lala";
//     }

//     // the numbers of method we add here
// }

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     user.sing = userMethods.sing;

//     // we have to write them here also

//     return user;
// }

// const user1 = createUser("kajal", "gupta", "kg@gmail.com", 24, "kjhdw");
// const user2 = createUser("prity", "gupta", "kg@gmail.com", 24, "kjhdw");
// const user3 = createUser("nitin", "gupta", "kg@gmail.com", 24, "kjhdw");
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());




// after file 80.js

// improving above code


const userMethods = {
    about : function() {
        return `${this.firstName} is ${this.age} years`;
    },
    is18 : function() {
        return this.age >= 18;
    },
    sing : function(){
        return "la lala la la lala";
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

const user1 = createUser("kajal", "gupta", "kg@gmail.com", 24, "kjhdw");
const user2 = createUser("prity", "gupta", "kg@gmail.com", 24, "kjhdw");
const user3 = createUser("nitin", "gupta", "kg@gmail.com", 24, "kjhdw");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
console.log(user1.sing());