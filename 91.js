// static methods and properties


class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    static desc = "static property.";
    static info(){
        return "static methods and properties are called by using class name."
    }
    get fullname(){
        return `${this.fname} ${this.lname}`;
    }
    set fullname(fullName){
        const [fname, lname] = fullName.split(" ");
        this.fname = fname;
        this.lname = lname;
    }
    eat(){
        return `${this.fname} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

const person1 = new Person("kajal", "gupta", 24);
console.log(person1.eat());
console.log(Person.desc);
console.log(Person.info());