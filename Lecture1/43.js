//nested destructuring

const users = [
    {
        userId : 1,
        firstName : "kajal",
        gender : "female"
    },
    {
        userId : 2,
        firstName : "nitin",
        gender : "male"
    },
    {
        userId : 3,
        firstName : "prity",
        gender : "female"
    }
];
// const [user1, user2, user3] = users;
// console.log(user1);

//but if we want firstname of user1, and gender of user3
const [{firstName:user1FirstName, userId}, , {gender:user3Gender}] = users;
console.log(user1FirstName);
console.log(userId);
console.log(user3Gender);