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
let myString = "0s1a3y5w7h9a2t4?6!8?0";
function strDig(string) {
  let pattern = /\d+/g;
  let resultArray = string.match(pattern);
  let newString = "";
  for (let i = 0; i < resultArray.length; i++) {
    // loop through result array and return an integer
    newString += resultArray[i];
  }
  return Number(newString);
}
console.log(strDig(myString));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized).
// Given "there's no free lunch  -  gotta pay yer way",
// return "TNFL-GPYW".
// Given "Live from New York, it's Saturday Night!",
// return "LFNYISN".

// OPTIONAL:
// How to retrieve the Ascii numerical value of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// Ascii value of “a”
// Ascii value of “A”
