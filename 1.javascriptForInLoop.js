// 1) javascript For in loop

// Write a JavaScript function named printObjectProperties that takes an object as an argument and uses the for...in loop to print all the properties and their values in the following format: "property: value". If the object is empty, print "Object is empty".

function printObjectProperties(obj) {
    const keys = Object.keys(obj);
    
    for (const key in keys) {
      console.log(`${keys[key]}: ${obj[keys[key]]}`);
    }
    
    if (keys.length === 0) {
      console.log("Object is empty");
    }
  }
  

  const myObject = {
    name: "John",
    age: 30,
    occupation: "Engineer"
  };
  
  const emptyObject = {};
  
  printObjectProperties(myObject);
  printObjectProperties(emptyObject);