//Basic String Challenges - due 2/25
// TEST
// var array1 = ["abc", 3, "yo", "extraKey", 42];
// var array2 = [42, "wassup", true];
// var beeblebrox = { name: "Zaphod", numHeads: 2 };
// var strng1 = "Coding Dojo";
// var strng2 = "babblefish";

// Arrs2Map
// Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For
// arr1 = ["abc", 3, "yo"] and
// arr2 = [42, "wassup", true],
// return {"abc": 42, 3: "wassup", "yo": true}.
// function objMap(arr1, arr2) {
//   var newObj = {};
//   if (arr2.length > arr1.length) {
//     console.log(
//       "value array is longer than key array - values will be dropped"
//     );
//   } else {
//     for (var i = 0; i < arr1.length; i++) {
//       newObj[arr1[i]] = arr2[i];
//     }
//   }
//   console.log(newObj);
// }
// objMap(array1, array2);

// InvertHash
// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys.
// Example:
// given {"name": "Zaphod"; "numHeads": 2},
// return {"Zaphod": "name"; 2: "numHeads"}.
// You will need to learn and use a JavaScript for ... in here!
// function invertHash(assocArr) {
//   // create new object - not sure if this can be done without creating a new object
//   var newObj = {};
//   // for each key in in assocArr, reverse into new object
//   for (var key in assocArr) {
//     console.log(`value of key: ${assocArr[key]}`);
//     console.log(`The key: ${key}`);
//     newObj[assocArr[key]] = key;
//   }
//   console.log(assocArr);
// }
// invertHash(beeblebrox);

// ReverseString
// Implement a function reverseString(str) that, given a string, will return the string of the same length but with characters reversed. Example:
// given "creature",
// return "erutaerc".
// Do not use the built-in reverse() function!
// function revStrng(str) {
//   // console.time("strng");
//   // remember that strings are immutable
//   var newStr = "";
//   for (var index = str.length - 1; index >= 0; index--) {
//     newStr += str[index];
//   }
//   // console.timeEnd("strng");
//   console.log(newStr);
//   return newStr;
// }
// revStrng(strng2);

// .myJoin method(arr) => return string
// Given an array of strings, return a string
// Given[‘a’, ’b’, ’c’]
// Return ‘abc’
// function myJoin(arr) {
//   let joinedStrng = "";
//   for (let i = 0; i < arr.length; i++) {
//     joinedStrng += arr[i];
//   }
//   return joinedStrng;
// }
// console.log(myJoin(array1));

// .mySplit method(str) => return array
// Given ‘abc’
// Return[‘a’, ’b’, ’c’]
// function mySplit(str) {
//   let newArr = [];
//   for (let i = 0; i < str.length; i++) {
//     newArr.push(str[i]);
//   }
//   console.log("newArr: ", newArr);
//   return newArr;
// }
// mySplit(myJoinStr);
