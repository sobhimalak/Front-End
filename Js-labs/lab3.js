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
         return `${this.firstName} ${this.lastName} (age : ${this.age}, email: ${this.email})`;
     }
        
}
let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com'); 
console.log("" + person);