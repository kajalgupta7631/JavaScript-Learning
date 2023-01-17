// class practice + INHERITANCE


// animal class

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

const animal1 = new Animal("tom", 10);
console.log(animal1.eat());
console.log(animal1.isSuperCute());


// dog class

// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const tommy = new Dog("tommy", 10);
// console.log(tommy.eat());
// console.log(tommy.isSuperCute());




// INHERITANCE

class Dog extends Animal{
    
}
const tommy = new Dog("tommy", 10);
console.log(tommy.eat());
console.log(tommy.isSuperCute());
