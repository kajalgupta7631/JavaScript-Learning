// same method in sub class

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

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    eat(){
        return `modified eat : ${this.name} is eating`;
    }
    run(){
        return `${this.name} is running at ${this.speed} speed.`
    }
}

// tommy ---> object / instance
const tommy = new Dog("tommy", 10, 45);
console.log(tommy.eat());
console.log(tommy.run());

const animal1 = new Animal("sheru",2);
console.log(animal1.eat());