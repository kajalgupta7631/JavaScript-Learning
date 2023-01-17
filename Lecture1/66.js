// iterables
// jispe hum for of loop laga sakein
// strings, array are iterable


const name = "harshit";
for(let char of name)
    console.log(char);

const items = ["item1", "item2", "item3"];
for(let item of items)
    console.log(item);


// objects are not iterable

// const users = {
//     key1 : "value1",
//     key2 : "value2"
// };
// for(let user of users){
//     console.log(user);
// }


// array like objects
// jinke pas length property hoti hai
// aur jike hum index se access kar sakte hai
// example :- string

