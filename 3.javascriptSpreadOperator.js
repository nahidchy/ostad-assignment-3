// 3) javascript Spread Operator

// Write a JavaScript function named mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays using the spread operator.

function mergeArrays(array1, array2) {
    return [...array1, ...array2];
  }
  
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  console.log(mergeArrays(arr1, arr2));