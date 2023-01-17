//objects inside array
//very useful in real world applications

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
]
//console.log(users);

//for of loop
for(let user of users)
{
    console.log(user.userId);
}
