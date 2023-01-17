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
// }

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

console.log(createUser.prototype);


createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years`;
};
createUser.prototype.is18 = function() {
    return this.age >= 18;
};
createUser.prototype.sing = function() {
    return "la lala la la lala";
};

const user1 = createUser("kajal", "gupta", "kg@gmail.com", 24, "kjhdw");
const user2 = createUser("prity", "gupta", "kg@gmail.com", 24, "kjhdw");
const user3 = createUser("nitin", "gupta", "kg@gmail.com", 24, "kjhdw");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
console.log(user1.sing());