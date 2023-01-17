// getter and setter

// class Person{
//     constructor(fname, lname, age){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }
//     fullname(){
//         return `${this.fname} ${this.lname}`;
//     }
// }

// const person1 = new Person("kajal", "gupta", 24);
// console.log(person1);
// console.log(person1.fullname());

// we want the same result as above code in below code
// console.log(person1.fullname);

// so for this we will use "get" keyword

// class Person{
//     constructor(fname, lname, age){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }
//     get fullname(){
//         return `${this.fname} ${this.lname}`;
//     }
// }
// const person1 = new Person("kajal", "gupta", 24);
// console.log(person1.fullname);




// SETTER

// class Person{
//     constructor(fname, lname, age){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }
//     get fullname(){
//         return `${this.fname} ${this.lname}`;
//     }
//     setName(fname, lname){
//         this.fname = fname;
//         this.lname = lname;
//     }
// }
// const person1 = new Person("kajal", "gupta", 24);
// console.log(person1.fullname);

// // person1.setName("nitin", "gupta");
// // or
// person1.fname = "nitin";
// person1.lname = "gupta";
// console.log(person1.fullname);




class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    get fullname(){
        return `${this.fname} ${this.lname}`;
    }
    set fullname(fullName){
        const [fname, lname] = fullName.split(" ");
        this.fname = fname;
        this.lname = lname;
    }
}
const person1 = new Person("kajal", "gupta", 24);
console.log(person1.fullname);

person1.fullname = "nitin gupta";
console.log(person1.fullname);
