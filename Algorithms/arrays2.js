// Arrays 2 (Intermediate Challenges)
// TEST vars
var arrNum = [1,65,43,-11,42, 2];
var arrNum2 = [42,36,23,4];
var arrStrng = ["Coding", "Dojo", "Chewy", "Leo"];
var arrMix = [{
    key: "value", 
    dog: "cat",
    git: "hub"
},
42,
"Buttah"
];

// arrConcat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: 
// arrConcat( ['a','b'], [1,2] ) should return ['a','b',1,2].
// using .push()
// function arrConcat(array1, array2){
//     var newArr = [];
//     for(var i=0; i<array1.length; i++){
//         newArr.push(array1[i]);
//     }
//     for(var j=0; j<array2.length; j++){
//         newArr.push(array2[j]);
//     }
//     console.log(newArr);
//     return newArr;
// }
// without using .push()
// function arrConcat(array1, array2){
//     var newArr = [];
//     console.log('array1:', array1);
//     console.log('array2:', array2);
//     for(var i=0; i<array1.length; i++){
//         newArr[i]=array1[i];
//     }
//     for(var j=0; j<array2.length; j++){
//         newArr[newArr.length]=array2[j];
//     }
//     console.log('concatenated arrays:', newArr);
// }
//  arrConcat(arrNum, arrStrng);
//  arrConcat(arrNum2, arrStrng);
//  arrConcat(arrStrng, arrNum);
//  arrConcat(arrNum, arrMix);
//  arrConcat(arrMix, arrNum);

// Faster Factorial
// Remember iFactorial from last chapter? Take that implementation and use a time-space tradeoff to accelerate the average running time. Recall that iFactorial(num) returns the product of positive integers from 1 to the given num. For example: fact(1) = 1, fact(2) = 2, fact(3) = 6. For these purposes, fact(0) = 1.
// function iFactorial(num){
//     console.time("factorial");
//     var result = 1;
//     if(num===0){
//         return 1;
//     }
//     if(num < 0){
//         return 0;
//     }
//     for(var i=2; i<=num; i++){
//         result*=i;
//     }
//     console.timeEnd("factorial");
//     return result;
// }
// console.log(iFactorial(100));

// recursive implementation
// function recursFactorial(num){
//     console.time("recursive");
//     if(num === 0){
//         return 1;
//     }
//     var result = num * recursFactorial(num-1);
//     console.timeEnd("recursive");
//     return result;
// }
// console.log(recursFactorial(100)); 

//pre-existing array implementation
// function factArray(num){
//     var newArr = [1];
//     var factorial = 1;
//     for(var i=1; i<=num; i++){
//         newArr.push(factorial*=i);
//     }
//     return newArr;
// }
// var bigArray = factArray(100);

// function lookupFact(arr, num){
//     console.time("lookup");
//     if(num > arr.length+2 || num < 0){
//         return null;
//     }
//     console.timeEnd("lookup");
//     return arr[num];
// }
// console.log(lookupFact(bigArray, 5));
