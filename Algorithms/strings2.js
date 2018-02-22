// More String Challenges - due 2/25

// Remove Blanks
// Create a function that, given a string, returns the string, without blanks.
// Given "  play  that   Funky Music  ",
// returns a string containing "playthatFunkyMusic".
// let funk = "  play  that   Funky Music  ";
// function noBlanks(string) {
//   // as funk is a string, you can't mutate it without creating a new string
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== " ") {
//       // this is effectively just concatenating string indexs themselves.
//       newString += string[i];
//     }
//   }
//
//   return newString;
// }
// noBlanks(funk);

// Get String Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should
// return the number 1357924680.
// let myString = "0s1a3y5w7h9a2t4?6!8?0";
// function strDig(string) {
//   // RegEx pattern for finding one or more digits globally in a string
//   let pattern = /\d+/g;
//   //   .match() is a string method for matching the RegEx pattern, and returning the results in an array
//   let resultArray = string.match(pattern);
//   let newString = "";
//   //   looping through the newly created array to create new string of all found digits
//   for (let i = 0; i < resultArray.length; i++) {
//     newString += resultArray[i];
//   }
//   //   using the Number() method converts my string of digits to an integer - effectively removing the leading zero
//   return Number(newString);
// }
// console.log(strDig(myString));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized).
// Given "there's no free lunch  -  gotta pay yer way",
// return "TNFL-GPYW".
// Given "Live from New York, it's Saturday Night!",
// return "LFNYISN".
let noLunch = "there's no free lunch  -  gotta pay yer way";
let snl = "Live from New York, it's Saturday Night!";
function acronyms(str) {
  str = str.toUpperCase();
  let newStr = "";
  //console.log(str);
  let regEx = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (str[0] === str.regEx) {
      console.log("str[0]: ", str[0]);
      newStr += str[0];
    }
    if (str[i] === /\s/ && str[i + 1] === /[A-Z]/) {
      newStr += str[i + 1];
    }
  }
}
acronyms(noLunch);
acronyms(snl);

// OPTIONAL:
// How to retrieve the Ascii numerical value of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// Ascii value of “a”
// Ascii value of “A”
// function ascii(char) {
//   if (char.charCodeAt() > 128) {
//     console.log("ASCII codes are from 0-128 - this is not an ASCII character");
//   }
//   if (char.length > 1) {
//     console.log(
//       "You entered more than one character; will return the ASCII code at position 0"
//     );
//   }
//   console.log(`ASCII code is: ${char.charCodeAt(0)}`);
//   return char.charCodeAt(0);
// }
// ascii("a");
// ascii("A");
// ascii("≈b");
