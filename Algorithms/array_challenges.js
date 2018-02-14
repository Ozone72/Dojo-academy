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

// RemoveAt
// Given an array and an index into the array, remove and return the array value at that index. Do this without using any built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0). 
// function removeAt(arr, index){
//     if(index < 0 || index >= arr.length){
//         console.log("Returning null");
//         return null;
//     }
//     else {
//         var val = arr[index];
//         for(var i=index; i<arr.length; i++){
//             arr[i]=arr[i+1];
//         }
//         arr.pop();
//         // console.log(arr);
//         // console.log(val);
//         return val;
//     }
// }
// removeAt(arrayNum, 2);
// removeAt(arrayNeg, 1);
// removeAt(arrayStrng, 0);
// removeAt(arrMixType, 4);

// Second-to-Last
// Return the second-to-last element of an array.
// Given: [1,2,3,4]
// Returned: 3
// function secondToLast(arr){
//     if(arr.length<2){
//         console.log("Returning null");
//         return null;
//     }
//     else{
//         console.log(arr[arr.length-2]);
//         return arr[arr.length-2];
//     }
// }
// secondToLast(arrayNum);
// secondToLast(arrayNeg);
// secondToLast(arrayStrng);
// secondToLast(arrMixType);
// secondToLast(arrEdge);

// Nth-to-Last
// Return the element that is N-from-array’s-end.
// Arr, nth
// Given [1,2,3,4], Nth to last  => 2
// Return: 3
// function nthToLast(arr, Nth){
//    if(Nth > arr.length){
//        console.log("Returning null");
//    }
//    else {
//     //    console.log(arr);
//     //    console.log(arr[arr.length-Nth]);
//        return arr[arr.length-Nth];
//    }
// }
// nthToLast(arrayNum,2);
// nthToLast(arrayNeg,1);
// nthToLast(arrayStrng,5);
// nthToLast(arrMixType,44);
// nthToLast(arrEdge,6);

// Second-Largest
// Return the second-largest element of an array. 
// Given: [1,2,3,4,5,6,7]
// Return: 6
// function secondLargest(arr){
//     if(arr.length<2){
//         console.log("Returning null");
//         return null;
//     }
//     else {
//         for(var i=0; i<arr.length; i++){
//             var temp = arr[i];
//             for (var j=i-1; j>=0 && (arr[j]>temp);j--){
//                 arr[j+1]=arr[j];
//             }
//             arr[j+1]=temp;
//         }
//         console.log(arr);
//         var target = arr[arr.length-2];
//         console.log(target);
//         return target;
//     }
// }
// secondLargest(arrayNum);
// secondLargest(arrayNeg);

// Nth-Largest
// Given an array, return the Nth-largest element: there should be (N - 1) elements that are larger. 
// Given: [1,4,3,2,5,7,6], nth => 3
// Return: 5
// function nthLargest(arr, Nth){
//     if(arr.length < Nth){
//         console.log("Returning null");
//         return null;
//     }
//     else {
//         for(var i=0; i<arr.length; i++){
//             var temp = arr[i];
//             for (var j=i-1; j>=0 && (arr[j]>temp);j--){
//                 arr[j+1]=arr[j];
//             }
//             arr[j+1]=temp;
//         }
//         console.log(arr);
//         var target = arr[arr.length-Nth];
//         console.log(target);
//         return target;
//     }
// }
// nthLargest(arrayNum, 3);
// nthLargest(arrayNeg, 4);


