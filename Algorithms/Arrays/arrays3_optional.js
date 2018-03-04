// Arrays 2 (Intermediate 2 Challenges)

//Smarter Sum
// Use a time-space tradeoff to accelerate the average running time of an iSigma(num) function that returns the sum of all positive integers from 1 to num. Recall: sig(1) = 1, sig(2) = 3, sig(3) = 6, sig(4) = 10.
// function iSigma(num) {
//
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num === 0) {
//       return null;
//     } else {
//       sum += i;
//     }
//   }
//
//
// }
// // seems to indicate that JavaScript is keeping variables in a session
// iSigma(76453);
// iSigma(10);
// iSigma(3);
// iSigma(4);
// iSigma(1150)

// global array variable used to store values
// var smarterSum = [0];
// function smartSig(num) {
//   // used to store sum if the value is not already in the array
//
//   var sum = 0;
//   if (num <= 0) {
//
//     return 0;
//   }
//   //   if the result already exists in the array, just return it
//   if (smarterSum[num] !== undefined) {
//
//
//     return smarterSum[num];
//   } else {
//     for (var i = smarterSum.length; i <= num; i++) {
//       sum += i;
//       smarterSum.push(sum);
//     }
//     // assign sum to it's corresponding index if it doesn't exist
//     smarterSum[num] = sum;
//
//
//     return smarterSum[num];
//   }
// }
// smartSig(10);
//
// smartSig(1);
// smartSig(20);
// smartSig(4);
// smartSig(5);
//

// Fabulous Fibonacci
// Use a time-space tradeoff to accelerate the average running time of an iFibonacci(num) function that returns the ‘num’th number in the Fibonacci sequence. Recall: fib(0) = 0, fib(1) = 1, fib(2) = 1, fib(3) = 2.
// let fastFib = [0, 1];
// function fabFib(num) {
//   if (num < 0) {
//     return null;
//   }
//   if (fastFib[num] !== undefined) {
//     return fastFib[num];
//   } else {
//     for (let i = fastFib.length; i <= num; i++) {
//       let fibIt = fastFib[i - 2] + fastFib[i - 1];
//       fastFib.push(fibIt);
//     }
//   }
//   return fastFib[num];
// }
// console.log("fabFib(10): ", fabFib(10));
// console.log("fabFib(7): ", fabFib(7));
// console.log("fabFib(3): ", fabFib(3));
// console.log("fabFib(0): ", fabFib(0));
// console.log("fabFib(4): ", fabFib(4));

// Tricky Tribonacci
// Why stop with fibonacci?  Create a function to retrieve a “tribonacci” number, from the sum of the previous 3. Tribonaccis are {0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, ...}. Again, use a time-space tradeoff to make this fast.
// let fastTrib = [0, 0, 1];
// function trickTrib(num) {
//   if (num < 0) {
//     return null;
//   }
//   if (fastTrib[num] !== undefined) {
//     return fastTrib[num];
//   } else {
//     for (let i = fastTrib.length; i <= num; i++) {
//       let tribIt = fastTrib[i - 3] + fastTrib[i - 2] + fastTrib[i - 1];
//       fastTrib.push(tribIt);
//     }
//   }
//   return fastTrib[num];
// }
// console.log("trickTrib(0): ", trickTrib(0));
// console.log("trickTrib(1): ", trickTrib(1));
// console.log("trickTrib(2): ", trickTrib(2));
// console.log("trickTrib(3): ", trickTrib(3));
// console.log("trickTrib(4): ", trickTrib(4));
// console.log("trickTrib(5): ", trickTrib(5));
// console.log("trickTrib(6): ", trickTrib(6));
