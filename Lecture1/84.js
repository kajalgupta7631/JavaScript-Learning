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
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());
// console.log(user1.sing());

for(let key in user1){
    // output : will show all properties including prototype
    // console.log(key);

    // output : will show only it's own properties
    console.log(`${key}`, user1.hasOwnProperty(key));
}