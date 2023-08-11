// 8) javascript es6 super keyword

// Create a JavaScript class named Person with a constructor that takes two parameters: name and age. The class should have a method named introduce that logs a greeting message including the person's name and age.

// Next, create a subclass of Animal named Dog. The Dog class should have an additional method named fetch that logs "Fetching the ball!".

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Helo, I am ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I'm majoring in ${this.major}.`);
    }
  }
  

  const person = new Person("Alice", 25);
  person.introduce(); // Output: Hi, I'm Alice and I'm 25 years old.
  
  const student = new Student("Bob", 20, "Computer Science");
  student.introduce();

