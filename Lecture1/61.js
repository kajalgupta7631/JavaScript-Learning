// find method

const array = ["hello", "cat", "dog", "lion"];

function isLength3(str){
    return str.length == 3;
}

// const ans = isLength3("dog");
// console.log(ans);


//it will return 1st occurence of string having length 3
const ans = array.find(isLength3);
console.log(ans);


const users = [
    {userId : 1, userName : "harshit"},
    {userId : 2, userName : "harsh"},
    {userId : 3, userName : "harshita"},
    {userId : 4, userName : "mohit"},
    {userId : 5, userName : "kajal"},
];

const myUser = users.find((user) => {
    return user.userId === 3;
});
console.log(myUser);