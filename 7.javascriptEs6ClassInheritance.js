// 7) javascript es6 class inheritance

// Create a JavaScript class named Animal with a constructor that takes two parameters: name and sound. The class should have a method named makeSound that logs the sound of the animal.

class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound: ${this.sound}`);
    }
  }
  
  class Dog extends Animal {
    fetch() {
      console.log("Fetching the ball!");
    }
  }
  
  const cat = new Animal("Cat", "Meow");
  cat.makeSound();
  
  const dog = new Dog("Dog", "Woof");
  dog.makeSound();
  dog.fetch()