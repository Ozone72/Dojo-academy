// Parens Valid
// Create a function that, given an input string, returns a boolean whether parentheses in that string are valid. Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)3", return false. Given "n)0(t(0)k", return false.
// An opening must have a closing paren, doesn't matter where it is, as long as it's closed.
// INPUT: a string
// OUTPUT: a bool
// TESTS: closing paren first, odd number of one or the other.
let parenTrue = "y(3(p)p(3)r)s";
let parenFalse = "n)0(t(0)k";
let parenFalse2 = "n(0(p)3";
let oneOpenParenFalse = "(";
let oneClosedParenFalse = ")";
let twoParenWrongOrderFalse = ")(";
let myTest = "orin(pab)(jack)mike(bb)";

function validParens(str) {
  let gates = [];
  let check = true;
  //   iterate over the string
  for (let i = 0; i < str.length && check === true; i++) {
    //   if the gate is open, push to the stack
    if (str[i] === "(") {
      gates.push(str[i]);
    }
    // can't close a gate without opening it, so check to see if stack has an open gate
    // if the array is empty, gate hasn't been opened
    if (str[i] === ")" && gates.length === 0) {
      // check fails
      check = false;
      //   otherwise, pop the open gate off the stack - same as closing it.
    } else {
      gates.pop();
    }
  }
}
// if the array is empty, and the check hasn't failed, return true
if (gates.length === 0 && check === true) {
  return true;
} else {
  return false;
}
console.log("validParens(myTest): ", validParens(myTest));

// Braces Valid
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. For example, given the input string "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!", return true. Given "d(i{a}l[t]o)n{e", return false. Given "a(1)s[O(n]0{t)0}k", return false.
function bracesValid(str) {}

// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from front and back.

// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

// Longest Palindrome
// For this challenge, we will look not only at the entire string, but also substrings within it.

// For a string, return the longest palindromic substring. Given "what up, dada?", return "dad". Given "not much", return "n". Include spaces as well (i.e. be strict, as in the “Is Palindrome” challenge): given "My favorite racecar erupted!", return "e racecar e".
