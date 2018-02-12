//Array Challenges homework for 2/14
//Methods allowed are .push() and .pop() - otherwise, nope.
//TEST ARRAYS:
var arrayNum = [1,2,3,65,9,7];
var arrayNeg = [-3,-4,-11,-20,-23];
var arrayStrng = ["Coding", "Dojo", "Chewy", "nomnom"];
var arrMixType = [
    {dog: "Chewy",
     cat: "Leo"}, 
     [1,2,3],
     true,
     "Puppies rule.",
     "Kitties drool."
];
var arrEdge = [undefined, Infinity, 4, 0, -1, "Weird", true];

//PushFront
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods. PushFront(arr,val)
// function pushFront(arr, val){
//     arr.length = arr.length+1;
//     for(var i=arr.length-1; i>=1; i--){
//         arr[i]=arr[i-1];
//     }
//     arr[0]=val;
//     console.log(arr);
//     return arr;
// }
// pushFront(arrayNum, 42);
// pushFront(arrayNeg, 42);
// pushFront(arrayStrng, 42);
// pushFront(arrMixType, 42);

// PopFront
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop(). 
// function popFront(arr){
//     var val = arr[0];
//     for(var i=0; i<arr.length; i++){
//         arr[i]=arr[i+1];
//     }
//     arr.pop();
//     console.log(arr);
//     return val;
// }
// popFront(arrayNum);
// popFront(arrayNeg);
// popFront(arrayStrng);
// popFront(arrMixType);

// InsertAt
// Given an array, index, and additional value, insert the value into the array at the given index. Do this without using built-in array methods. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val). 
// function insertAt(arr, index, val){
//     arr.length = arr.length+1;
//     if(index < 0 || index > arr.length+1){
//         console.log("Index is outside scope of given array.");
//         return null;
//     }
//     else {
//     for(var i=arr.length-1; i>=index; i--){
//         arr[i]=arr[i-1];
//     }
//     arr[index]=val;
//     console.log(arr);
//     return arr;
//     }
// }
// insertAt(arrayNum, 2, 42);
// insertAt(arrayNeg, 3, 42);
// insertAt(arrayStrng, 1, 42);
// insertAt(arrMixType, 4, 42);
// insertAt(arrMixType, 42, 42);