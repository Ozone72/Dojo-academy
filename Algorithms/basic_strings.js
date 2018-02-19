// TEST
var arr1 = ["abc", 3, "yo"];
var arr2 = [42, "wassup", true];
var beeblebrox = {"name": "Zaphod", "numHeads": 2};

// Arrs2Map
// Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For 
// arr1 = ["abc", 3, "yo"] and 
// arr2 = [42, "wassup", true], 
// return {"abc": 42, 3: "wassup", "yo": true}.
function objMap(arr1,arr2){
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
        }
    }
}


// InvertHash
// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys. 
// Example: 
// given {"name": "Zaphod"; "numHeads": 2}, 
// return {"Zaphod": "name"; 2: "numHeads"}. 
// You will need to learn and use a JavaScript for ... in here!
function invertHash(assocArr){
    // code here
}


// ReverseString
// Implement a function reverseString(str) that, given a string, will return the string of the same length but with characters reversed. Example: 
// given "creature", 
// return "erutaerc". 
// Do not use the built-in reverse() function!
function revStrng(str){
    // console.time("strng");
    // remembr that strings are immutable
    var newStr = "";
    for (var index = str.length-1; index>=0; index--) {
        newStr+=str[index];
    }
    // console.timeEnd("strng");
    console.log(newStr);
    return newStr;
} 
revStrng("creature");