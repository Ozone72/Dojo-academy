// Parens Valid
// Create a function that, given an input string, returns a boolean whether parentheses in that string are valid. Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)3", return false. Given "n)0(t(0)k", return false.
// An opening must have a closing paren, doesn't matter where it is, as long as it's closed.
// INPUT: a string
// OUTPUT: a bool
// TESTS: closing paren first, odd number of one or the other.
// let parenTrue = "y(3(p)p(3)r)s";
// let parenFalse = "n)0(t(0)k";
// let parenFalse2 = "n(0(p)3";

// function validparens(str) {
//   let gates = [];
//   let check = true;
//   //   iterate over the string
//   for (let i = 0; i < str.length && check === true; i++) {
//     //   if the gate is open, push to the stack
//     if (str[i] === "(") {
//       gates.push(str[i]);
//     }
//     // can't close a gate without opening it, so check to see if stack has an open gate
//     // if the array is empty, gate hasn't been opened
//     if (str[i] === ")" && gates.length === 0) {
//       // check fails
//       check = false;
//       //   otherwise, pop the open gate off the stack - same as closing it.
//     } else {
//       gates.pop();
//     }
//   }
// }
// // if the array is empty, and the check hasn't failed, return true
// if (gates.length === 0 && check === true) {
//   return true;
// } else {
//   return false;
// }
// console.log(validparens(parenTrue));
// console.log(validparens(parenFalse));
// console.log(validparens(parenFalse2));

// Braces Valid
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. For example, given the input string "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!", return true. Given "d(i{a}l[t]o)n{e", return false. Given "a(1)s[O(n]0{t)0}k", return false.
// function bracesValid(str) {
//   // declare an array to hold the sequence
//   let gatesKeeper = [];
//   //   declare an object to hold the key/value pairs (open/closed) gates
//   const gatesMatch = {
//     ")": "(",
//     "}": "{",
//     "]": "["
//   };
//   for (let idx = 0; idx < str.length; idx++) {
//     // switch (str[idx]) {
//     // checks for an opener - if a match, push to the gatekeeper array
//     if (str[idx] === "(" || str[idx] === "{" || str[idx] === "[") {
//       gatesKeeper.push(str[idx]);
//     }
//     // does this character match a closing gate?
//     if (str[idx] === ")" || str[idx] === "}" || str[idx] === "]") {
//       // if so, does value of this key match last value in pushed to gatesKeeper?
//       if (gatesMatch[str[idx]] === gatesKeeper[gatesKeeper.length - 1]) {
//         //   yes?  pop that sucker off
//         gatesKeeper.pop();
//       } else {
//         //   otherwise, invalid
//         return false;
//       }
//     }
//   }
//   // If this exists, return false, since we want an empty array
//   if (gatesKeeper.length > 0) return false;
//   return true;
// }
// console.log(
//   'bracesValid("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!"): ',
//   bracesValid("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!")
// );
// console.log('bracesValid("d(i{a}l[t]o)n{e"): ', bracesValid("d(i{a}l[t]o)n{e"));
// console.log(
//   'bracesValid("a(1)s[O(n]0{t)0}k"): ',
//   bracesValid("a(1)s[O(n]0{t)0}k")
// );
// bracesValid("(now{I[don{t{k}ow}abou(t)this}ma)n");
// console.log(
//   'bracesValid("(now{I[don{t{k}ow}abou(t)this}ma)n"): ',
//   bracesValid("(now{I[don{t{k}ow}abou(t)this}ma)n")
// );
// bracesValid("{}(){}{{[]}}");
// console.log('bracesValid("{}(){}{{[]}}"): ', bracesValid("{}(){}{{[]}}"));

// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from front and back.

// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
// function myStrictPal(str) {
//   // (str.length-1)/2 catches the front and back
//   for (let i = 0; i < (str.length - 1) / 2; i++) {
//     // out of the loop if isn't a strict palindrome.
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   // if loop completes, it's a strict palindrome
//   return true;
// }
// console.log('myStrictPal("aoxomoxoa"): ', myStrictPal("aoxomoxoa"));
// console.log('myStrictPal("Aoxomoxoa"): ', myStrictPal("Aoxomoxoa"));
// console.log('myStrictPal(" a x a "): ', myStrictPal(" a x a "));
// console.log('myStrictPal("a x a "): ', myStrictPal("a x a "));
// console.log('myStrictPal("aa"): ', myStrictPal("aa"));
// console.log('myStrictPal("a"): ', myStrictPal("a"));
// console.log('myStrictPal(""): ', myStrictPal(""));
// console.log('myStrictPal(" "): ', myStrictPal(" "));
// Longest Palindrome
// For this challenge, we will look not only at the entire string, but also substrings within it.
// For a string, return the longest palindromic substring. Given "what up, dada?", return "dad". Given "not much", return "n". Include spaces as well (i.e. be strict, as in the “Is Palindrome” challenge): given "My favorite racecar erupted!", return "e racecar e".
// function longPal(str) {
//   let possibles = [];
//   let longest = 0;
//   let result = "";
//   // moving forward in the array looking for a match on the other end.
//   for (let idx = 0; idx < str.length; idx++) {
//     // for each character in the string, look for a match on the other end, and if found, slice it out, push it into an array
//     for (let j = str.length - 1; j >= idx; j--) {
//       if (str[idx] === str[j]) {
//         let subStr = str.slice(idx, j + 1);
//         // use previously built palindrome checker to see if this is in fact a palindrome.
//         if (myStrictPal(subStr) === true) {
//           // if so, push to the array of possibles.
//           possibles.push(subStr);
//         }
//       }
//     }
//   }
//   for (let k = 0; k < possibles.length; k++) {
//     if (possibles[k].length > longest) {
//       longest = possibles[k].length;
//       result = possibles[k];
//     }
//   }
//   return result;
// }
// console.log(
//   'longPal("I wish my racecar was a civic."): ',
//   longPal("I wish my racecar was a civic.")
// );
// console.log('longPal("what up, dada?"): ', longPal("what up, dada?"));
// console.log('longPal("not much"): ', longPal("not much"));
