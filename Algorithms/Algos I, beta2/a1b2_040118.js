/*
* Algorithms 1, Beta 2
* April 2018
* Orin Fletcher
* April 2, 2018
*/
const testArr = [1, 2, 3, 4, 'hummus'];

/*
! pushFront
* Given an array and an additional value, insert this value at the beginning of the array.
* Do this without using any built-in array methods. PushFront(arr,val)
INPUT: arr is an array, val is some data
OUTPUT: should return the mutated (or new) array, or null if params don't exist
TESTCASE: arr should exist, var should exist
*/

function pushFront(arr, val) {
  if (!arr || !val) return null;
  let myArr = arr;
  myArr.length = myArr.length + 1;
  for (var i = myArr.length - 1; i >= 1; i--) {
    myArr[i] = myArr[i - 1];
  }
  myArr[0] = val;
  // alert('nailed it!');
  return myArr;
}
let pushArr = pushFront(testArr, 42);
// console.log('pushArr: ', pushArr);

/*
! popFront
* Given an array, remove the element at the beginning of the array, and return that data
INPUT: array should be an array
OUTPUT: should return the removed element, or null if params are missing or wrong type
TESTCASE: array should exist and be of type Array
*/
// function popFront(array) {
//   if (!Array.isArray(array) || array === undefined) return null;
//   let arr = array;
//   let result = arr[0];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.pop();
//   return result;
// }
// console.log('popFront(testArr): ', popFront(testArr));

/*
! insertAt
* Given an array, index, and additional value, insert the value into the array at the given index. 
* Do this without using built-in array methods. 
* You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val). 
INPUT: arr should be an array
INPUT: index, should be an index value within the length of the array
INPUT: val should be the data to insert at index prarameter
OUTPUT: no specified output - will return mutated array
TESTCASE: array should exist, index parameter inside bounds of array, val should exist
*/
function insertAt(arr, index, val) {
  console.log('arr: ', arr);
  console.log('index: ', index);
  console.log('val: ', val);
  if (!arr) return null;
  if (!val) return arr;
  if (index > arr.length || index < 0) {
    console.log('index outside array bounds');
    return arr;
  }
  let resultArr = arr;
  if (index === arr.length - 1) {
    arr[arr.length - 1] = val;
  } else {
    /*
  todo: refactor this to be able to call pushFront inside insertAt if index === 0
  todo: THIS DOESN'T WORK AT THE END OF THE ARRAY
  */
    for (let i = resultArr.length - 1; i >= index; i--) {
      resultArr[i + 1] = resultArr[i];
    }
  }
  resultArr[index] = val;
  return resultArr;
}
// // console.log('insertAt(testArr, 0, 42): ', insertAt(testArr, 0, 42));
// // console.log('insertAt(testArr, 1, 42): ', insertAt(testArr, 1, 42));
// // console.log('insertAt(testArr, 3, 42): ', insertAt(testArr, 3, 42));
// console.log('insertAt(testArr, 7, 42): ', insertAt(testArr, 7, 42));

/*
! removeAt
* Given an array and an index into the array, remove and return the array value at that index. 
* Do this without using any built-in array methods except pop(). 
* Think of PopFront(arr) as equivalent to RemoveAt(arr,0). 
INPUT: array, and index within scope of array
OUTPUT: return the data at array[index]
TESTCASE: array should exist, index exist and be in scope of the array
*/
function removeAt(array, index) {
  console.log('array: ', array);
  console.log('index: ', index);
  if (!array) return null;
  if (index > array.length - 1 || index < 0) {
    console.log('index outside array bounds');
    return array;
  } else {
    let result = array[index];
    for (let i = index; i < array.length; i++) {
      array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    return array;
  }
}
// console.log('removeAt(testArr, 0): ', removeAt(testArr, 0));
// console.log('removeAt(testArr, 1): ', removeAt(testArr, 1));
// console.log('removeAt(testArr, 2): ', removeAt(testArr, 2));
// console.log('removeAt(testArr, 3): ', removeAt(testArr, 3));
// console.log('removeAt(testArr, 4): ', removeAt(testArr, 4));
// console.log('removeAt(testArr, -1): ', removeAt(testArr, -1));

/*
! swapPairs
*Swap positions of successive pairs of values of given array. 
*If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
*For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
*As with all array challenges, do this without using any built-in array methods.
INPUT: an array
OUTPUT: modified array with swapped successive pairs.  If even, swap all pairs, if odd, the last element should stay where it is
TESTCASE: does array exist? 
TESTCASE: is the array is odd or even (modulo)?
*/
function swapPairs(array) {
  if (!array) return null;
  if (array.length % 2 === 0) {
    var len = array.length;
  } else {
    var len = array.length - 1;
  }
  for (let i = 0; i < len; i += 2) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
  return array;
}
removeAt(pushArr, 3);
console.log('pushArr before: ', pushArr);
console.log('swapPairs(pushArr): ', swapPairs(pushArr));
// console.log('testArr before: ', testArr);
// console.log('swapPairs(testArr): ', swapPairs(testArr));
let swapTest = insertAt(pushArr, 5, 'pita');
console.log('swapTest: ', swapTest);
console.log('swapPairs(swapTest): ', swapPairs(swapTest));
