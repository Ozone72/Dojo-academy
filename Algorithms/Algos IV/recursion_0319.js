// Orin Fletcher
// Recursion Algo Challenges
// March 19, 2018

// rSigma
// Write a recursive function that, given a number, returns the sum of integers from one up to that number.
// For example, rSigma(5) = 1+2+3+4+5 = 15; rSigma(2.5) = 1+2 = 3; rSigma(-1) = 0.
// non-recursive solution
// function nrSigma(num) {
//   var number = Math.floor(num);
//   var sum = number;
//   if (number < 0) {
//     return 0;
//   }
//   while (number > 0) {
//     sum = sum + (number - 1);
//     number--;
//   }
//   return sum;
// }
// console.log("nrSigma(5): ", nrSigma(5));
// console.log("nrSigma(2.5): ", nrSigma(2.5));
// console.log("nrSigma(-1): ", nrSigma(-1));
// recursive solution
// function rSigma(num) {
//   let number = Math.floor(num);
//   //   console.log("number: ", number);
//   if (number < 1) {
//     return 0;
//   }
//   //   this is the main example of recursion
//   //   BASE CASE **HAS** TO BE IN A RECURSIVE FUNCTION
//   // if you don't change the local, you immediately hit an infinite loop, stack overflow, etc...
//   number = number + rSigma(number - 1);
//   return number;
// }
// console.log("rSigma(5): ", rSigma(5));
// console.log("rSigma(2.5): ", rSigma(2.5));
// console.log("rSigma(-1): ", rSigma(-1));

// Recursive Fibonacci
// Write rFib(num). Recursively compute and return the numth Fibonacci value.
// As earlier, treat the first two (num = 0, num = 1) Fibonacci values as 0 and 1.
// Thus, rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3).
// Also, rFib(3.65) = rFib(3) = 2. Finally, rFib(-2) = rFib(0) = 0.
// function rFib(num) {
//   // handle floats
//   let numb = Math.floor(num);
//   //   handles negs
//   if (numb < 0) return 0;
//   //   base cases for first 3 in sequence
//   if (numb < 2) return numb;
//   //   recursion
//   //
//   return rFib(numb - 1) + rFib(numb - 2);
// }

// console.log("rFib(0): ", rFib(0));
// console.log("rFib(1): ", rFib(1));
// console.log("rFib(2): ", rFib(2));
// console.log("rFib(3): ", rFib(3));
// console.log("rFib(4): ", rFib(4));
// console.log("rFib(5): ", rFib(5));
// console.log("rFib(3.65): ", rFib(3.65));
// console.log("rFib(-2): ", rFib(-2));

// Recursive binary search
// Given sorted array and value, determine whether the value is found in the array
// WITHOUT recursive function call
// function rBinarySearch(array, search_value) {
//   while (array.length > 0) {
//     if (array[array.length - 1] === search_value) {
//       console.log("array that evaluates to true: ", array);
//       return true;
//     }
//     array.pop();
//   }
//   console.log("array that evaluates to false: ", array);
//   return false;
// }

// sort numeric array (used in conjunction with Array.prototype.sort())
function comparenums(a, b) {
  return a - b;
}
// recursive call
function rBinarySearch(array, search_value) {
  // define middle(ish) index of array
  let mid_index = Math.floor(array.length / 2);
  // define the value of mid_ index
  let mid_val = array[mid_index];
  // define an easier to read length property of the array
  let len = array.length;
  // BASE CASE -> does value from middle of array match the search?  If so, we're done.
  if (mid_val === search_value) {
    return true;
  }
  // FORWARD PROGRESS
  // if the middle value is greater than the search term, then we want to recursively evaluate a sub-array, from middle index+1 to the end of the array
  if (mid_val > search_value) {
    // RECURSIVE CALL - also a closure
    return rBinarySearch(array.slice(0, mid_index), search_value);
  }
  // if middle value is less than the search term, then we want to recursively evaluate a sub-array, from the beginning of the array to middle index-1
  if (mid_val < search_value) {
    return rBinarySearch(array.slice(mid_index + 1), search_value);
    // if none of these recursive techniques result in a true, then we'll fall out to the else, which will be false.
  } else {
    return false;
  }
}
let test_array = [3, 17, 7, 1, 19, 42];
let sortedArray = test_array.sort(comparenums);
// console.log("rBinarySearch(sortedArray, 5): ", rBinarySearch(sortedArray, 5)); // is false
// console.log(
// "rBinarySearch(sortedArray,  42): ",
// rBinarySearch(sortedArray, 42)
// ); // is true
// console.log("rBinarySearch(sortedArray, 3): ", rBinarySearch(sortedArray, 3)); // is true
// console.log("rBinarySearch(sortedArray, 1): ", rBinarySearch(sortedArray, 1)); // is true
// console.log("rBinarySearch(sortedArray, 7): ", rBinarySearch(sortedArray, 7)); // is true
console.log("rBinarySearch(sortedArray, 17): ", rBinarySearch(sortedArray, 17)); // is true
// console.log("rBinarySearch(sortedArray, 19): ", rBinarySearch(sortedArray, 19)); // is true

/*Binary String Expansion
You will be given a string containing characters ‘0’, ‘1’, and ‘?’. For every ‘?’, either ‘0’ or ‘1’ characters can be substituted. Write a recursive function that returns an array of all valid strings that have ‘?’ characters expanded into ‘0’ or ‘1’. Ex.: binStrExpand("1?0?") should return ["1000","1001","1100","1101"]. For this challenge, you can use string functions such as slice(), etc., but be frugal with their use, as they are expensive.
*/
// INPUT: string
// OUTPUT: array
function binaryStrExpand(str) {
  let len = str.length;
  let result_array = [];
  let temp_str = "";
  // BASE CASE: iterate through the string, if the string has a '?' in it, replace either 0 or 1 (but include both as options)
  for (let index = 0; index < len; index++) {
    const element = array[index];
    if (element !== "?") {
    } else {
    }
  }
}
