// Object Constructor - Constructs Node Objects = { val: #, next: null}
function sNode(val) {
  this.val = val;
  this.next = null;
}
// Object Constructor - Constructs List Objects = {head: null}
function sList() {
  this.head = null;
}

module.exports = {
  first_name: "Orin", // <--- Enter your first name within the string
  last_name: "Fletcher", // <--- Enter your last name within the string
  email: "orin.fletcher@gmail.com", // <--- Enter your email within the string
  reverseString: function(str) {
    // Given a string (str), return the string in reverse.
    // return type: String
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  },
  removeLetter: function(str, char) {
    // Given a string (str) and a character (char), return a string without the supplied character (char).
    // return type: String
    let changedString = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== char) {
        changedString += str[i];
      }
    }
    return changedString;
  },
  factorial: function(num) {
    // Return the factorial of a number (num)
    // Given: 0 Return 1 || Given: 1 Return 1 || Given: 2 Return 2
    // Given: 3 Return 6 || Given: 4 Return 24 || Given: 5 Return 120
    // return type: Number
    var result = 1;
    if (num === 0) {
      return 1;
    }
    if (num < 0) {
      return 0;
    }
    for (var i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  },
  isBracketValid: function(str) {
    // Given a string, returns whether the sequence of various brackets within it are valid. For example:
    // Given: "[] [] [ [] [] ]" or "[]" Return: true
    // Given: "[][]]" or "[][[[]]" Return: false
    // return type: Boolean
    let gatesKeeper = [];
    for (let idx = 0; idx < str.length; idx++) {
      if (str[idx] === "[") {
        gatesKeeper.push(str[idx]);
      }
      if (str[idx] === "]") {
        if (gatesKeeper[gatesKeeper.length - 1] === "[") {
          gatesKeeper.pop();
        } else {
          console.log("gatesKeeper: ", gatesKeeper);
          return false;
        }
      }
    }
    if (gatesKeeper.length > 0) {
      console.log("gatesKeeper: ", gatesKeeper);
      return false;
    }
    console.log("gatesKeeper: ", gatesKeeper);
    return true;
  },
  isPalindromeStrict: function(str) {
    // Create a function that returns a boolean whether the string is a strict palindrome.
    // Given "a x a" or "racecar" Return: true
    // Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
    // return type: Boolean
    for (let i = 0; i < (str.length - 1) / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  },
  insertAt: function(arr, idx, val) {
    // Given an array (arr), index (idx), and additional value (val), insert the value into the array at the given index. Do this without using built-in array methods. Return the modified or new array.
    // return type: Array
    arr.length = arr.length + 1;
    if (idx < 0 || idx > arr.length + 1) {
      console.log("idx is outside scope of given array.");
      return null;
    } else {
      for (var i = arr.length - 1; i >= idx; i--) {
        arr[i] = arr[i - 1];
      }
      arr[idx] = val;
      return arr;
    }
  },
  removeAt: function(arr, idx) {
    // Given an array (arr) and an index (idx), remove the value from the array, this should shorten the length of the array. Do this without using any built-in array methods except pop().
    // return type: Array
    if (idx < 0 || idx >= arr.length) {
      console.log("Returning null");
      return null;
    } else {
      var val = arr[idx];
      for (var i = idx; i < arr.length; i++) {
        arr[i] = arr[i + 1];
      }
      arr.pop();
      return arr;
    }
  },
  invertHash: function(hash) {
    // Convert the given hash's keys to values and values to corresponding keys.
    // Given: {a:1,b:2}, return: {1:a,2:b}.
    // return type: Object
    var newObj = {};
    for (var key in hash) {
      newObj[hash[key]] = key;
    }
    return newObj;
  },
  removeLastNode: function(node) {
    // Given the head node, pop off the last node and return the head node (if applicable).
    // return type: Node
    if (node) {
      var runner = node;
      while (runner.next.next !== null) {
        runner = runner.next;
      }
      runner.next = null;
    }
    return runner;
  },
  // - - - - BONUS ALROTIHM - - - -
  shiftValuesByNum: function(arr, num) {
    // Given an array (arr), shift the array values by num.
    // Given: arr: [1,2,3,4,5], num: 1, Return: [5,1,2,3,4]
    // Given: arr: [1,2,3,4,5], num: 3, Return: [3,4,5,1,2]
    // return type: Array
  }
};
