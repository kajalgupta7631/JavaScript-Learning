// new keyword
// 1.  create empty object "this" --> {}
// 2.  return "this"
// 3.  it sets its __proto__ or [[prototype]] value to prototype
// e.g ->

// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function() {
//     console.log(this.firstName, this.age);
// }

// const user1 = new createUser("kajal", 24);
// user1.about();




// previous code correction

// constructor function
// the function which is called with the help of new keyword
// having the first character in capital
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;

    return this;
}

CreateUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years`;
};
CreateUser.prototype.is18 = function() {
    return this.age >= 18;
};
CreateUser.prototype.sing = function() {
    return "la lala la la lala";
};

const user1 = new CreateUser("kajal", "gupta", "kg@gmail.com", 24, "kjhdw");
const user2 = new CreateUser("prity", "gupta", "kg@gmail.com", 24, "kjhdw");
const user3 = new CreateUser("nitin", "gupta", "kg@gmail.com", 24, "kjhdw");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
console.log(user1.sing());