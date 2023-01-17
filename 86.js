// class keyword


// In javascript class are fake because
// internally it works like below code


// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;

//     return this;
// }
// CreateUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} years`;
// };
// CreateUser.prototype.is18 = function() {
//     return this.age >= 18;
// };
// CreateUser.prototype.sing = function() {
//     return "la lala la la lala";
// };

// const user1 = new CreateUser("kajal", "gupta", "kg@gmail.com", 24, "kjhdw");
// const user2 = new CreateUser("prity", "gupta", "kg@gmail.com", 24, "kjhdw");
// console.log(user1.is18());
// console.log(user1.about());



class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about = function() {
        return `${this.firstName} is ${this.age} years`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la lala la la lala";
    }

}

// without "new" keyword, we can'nt invoke class constructor
const user1 = new CreateUser("kajal", "gupta", "kg@gmail.com", 24, "kjhdw");
const user2 = new CreateUser("prity", "gupta", "kg@gmail.com", 24, "kjhdw");
console.log(user1.is18());
console.log(user1.about());