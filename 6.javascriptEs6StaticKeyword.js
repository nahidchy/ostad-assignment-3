// 6) javascript es6 static keyword

// Create a JavaScript class named MathUtility with an ES6 static method called multiply. The multiply method should take two parameters and return their product.

class MathUtility {
    static multiply(a, b) {
      return a * b;
    }
  }
  const result = MathUtility.multiply(5, 3);
  console.log(result);