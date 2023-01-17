// methods
// functions inside objects

function personInfo(){
    console.log(`person name is : ${this.name} and age is : ${this.age}`);
}

const person1 = {
    name : "kajal",
    age : 24,
    about : personInfo
};
const person2 = {
    name : "nitin",
    age : 20,
    about : personInfo
};
const person3 = {
    name : "prity",
    age : 26,
    about : personInfo
};
const person4 = {
    name : "hj",
    age : 25,
    about : personInfo
};

person4.about();