//  param destructuring

//used in
//object
//react


const person = {
    name : "kajal",
    gender : "female"
}

// function printDetails(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
//     console.log(obj.age );
// }

function printDetails({name, gender, age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}

printDetails(person);