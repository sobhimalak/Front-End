//LAB 1. Rectangle 
class Rectangle{
    constructor(width, height, color ){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea(){
        return this.width * this.height;
    }
}
const rect = new Rectangle(4,5,'red');
console.log(rect.width); 
console.log(rect.height); 
console.log(rect.color); 
console.log(rect.calcArea());
////////////////////////////////////////////
//LAB 2. Person
class Person{
    constructor(firstName,lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
     }
     toString(){
         return `${this.firstName} ${this.lastName} ${this.age} ${this.email}`;
     }
        
}
let person = new Person('Maria', 'Petterson', "(age : 22", 'email: mp@gmail.com)'); 
let person1 = new Person('Lexicon'); 
let person2 = new Person('Stefan', 'Larsson', 'age : 25'); 
let person3 = new Person('Peter', 'Jansson', 'age : 24', 'email: ptr@live.com');

console.log('' + person);
console.log('' + person1);
console.log('' + person2);
console.log('' + person3);
