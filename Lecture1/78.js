//  improving previous code

const userMethods = {
    about : function() {
        return `${this.firstName} is ${this.age} years`;
    },
    is18 : function() {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("kajal", "gupta", "kg@gmail.com", 24, "kjhdw");
const user2 = createUser("prity", "gupta", "kg@gmail.com", 24, "kjhdw");
const user3 = createUser("nitin", "gupta", "kg@gmail.com", 24, "kjhdw");
console.log(user1);
console.log(user1.is18());
console.log(user1.about);