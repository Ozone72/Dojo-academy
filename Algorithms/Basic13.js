// The foundation “Basic 13” algorithm challenges.

// Print 1-255
// Print all the integers from 1 to 255.
// Inputs: n/a
// Outputs: prints to console 1 to 255.
function printFromTo(){
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}
printFromTo();

// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
// Inputs: none
// Outputs: prints to screen 0 to 255, and with each integer, also print the current sum
// function basic2(){
//     let sum = 0;
//     for (let i = 0; i <= 255; i++) {
//         sum+=i;
//         console.log(`Value of i: ${i} \nCurrent sum: ${sum}`);
//     }
// }
// basic2();

// Find and Print Max
// Given an array, find and print its largest element.
// Inputs: an array 
// Outputs: print to screen the largest element of the given array
// function basic3(array){
//     let max = array[0];
//     for (let index = 0; index < array.length; index++) {
//         if (array[index]>max) {
//             max = array[index];
//         }
//     }
//     console.log(`The largest element in the array is: ${max}`);
// }
// basic3([1,5,4,6,7,65,34,-23,0]);

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
// Inputs: n/a
// Outputs: returns an array with odd integers from 1 to 255 inclusive
// function basic4(){
//   let array = [];
//   for (let i = 1; i <= 255; i++) {
//     array.push(i);
//   }
//   return(array);
// }
// console.log(basic4());

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// Inputs: an array of numbers, and a number Y to compare to
// Outputs: a count of the elements in the array that are greater than Y
// function basic5(array, Y){
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if(array[i]>Y){
//       count++;
//     }
//   }
//   // Template literals are awesome
//   console.log(`Number of elements in the array greater than ${Y}: ${count}`);
// }
// basic5([78,2,6,4,5,6,1,23],2);

// Max, Min, Average
// Given an array, print the max, min and average values for that array.
// Inputs: an array of numbers
// Outputs: Print the max, min, and average values of the array
// function basic6(array) {
//   let max = array[0];
//   let min = array[0];
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if(array[i]>max){
//       max = array[i];
//     }
//     if(array[i]<min){
//       min = array[i];
//     }
//     sum+=array[i];
//   }
//   console.log(`Max value in the array: ${max} \nMin value in the array: ${min} \nAverage for values in the array: ${sum /(array.length)}`);
// }
// basic6([1,4,6,75,23,100]);

// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
// function basic7(array){
//   for (let index = 0; index < array.length; index++) {
//     if(array[index]<0){
//       array[index]='Dojo';
//     }
//   }
//   return array;
// }
// console.log(basic7([1,3,-76,4,3,-1]));

// Print Odds 1-255
// Print all odd integers from 1 to 255.
// function basic8(){
//   for (let index = 1; index < 255; index+=2) {
//     console.log(index);
//   }
// }
// basic8();

// Iterate and Print Array
// Iterate through a given array, printing each value.
// function printArray(array){
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);    
//   }
// }
// printArray([-1,4,5,6,"cat","dojo",[3,2]]);

// Get and Print Average
// Analyze an array’s values and print the average.
// function printAvg(array){
//   let avg = 0;
//   for (let i = 0; i < array.length; i++) {
//     avg=avg+array[i];
//   }
//   avg = avg/(array.length);
//   console.log(`The average of the elements in the array is: ${avg}`);
// }
// printAvg([4,7,12,15,4,4,2]);

// Square the Values
// Square each value in a given array, returning that same array with changed values.
// function sqrVals(array){
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i]*array[i];  
//   }
//   return array;
// }
// console.log(sqrVals([0,5,3,4,1]));

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
// function zeroNegs(array){
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]<0) {
//       array[i]=0;
//     }    
//   }
//   return array;
// }
// console.log(zeroNegs([-1, -8, 24, 56,-2, 42]));

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
// function shiftArray(array){
//   console.log('Start',array);
//   for (let i = 0; i < array.length; i++) {
//     array[i]=array[i+1];   
//   }
//   array[array.length-1]=0;
//   console.log('Result:', array);
// }
// shiftArray([1,23,4,2,5,3]);
