// Arrays 2 (Intermediate 2 Challenges)

//Smarter Sum
// Use a time-space tradeoff to accelerate the average running time of an iSigma(num) function that returns the sum of all positive integers from 1 to num. Recall: sig(1) = 1, sig(2) = 3, sig(3) = 6, sig(4) = 10.
// function iSigma(num) {
//   console.time("iSigma");
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num === 0) {
//       return null;
//     } else {
//       sum += i;
//     }
//   }
//   console.timeEnd("iSigma");
//   console.log("sum: ", sum);
// }
// // seems to indicate that JavaScript is keeping variables in session?
// iSigma(76453);
// iSigma(10);
// iSigma(3);
// iSigma(4);
// iSigma(1150)

// global array variable used to store values
var smarterSum = [0];
function smartSig(array, num) {
  // used to store sum if the value is not already in the array
  console.time("smartSig");
  var sum = 0;
  if (num <= 0) {
    console.log(0);
    return 0;
  }
  //   if the result already exists in the array, just return it
  if (array[num] !== undefined) {
    console.timeEnd("smartSig");
    console.log("existed in array: ", array[num]);
    return array[num];
  } else {
    for (var i = 1; i <= num; i++) {
      sum += i;
    }
    // assign sum to it's corresponding index if it doesn't exist
    smarterSum[num] = sum;
    console.timeEnd("smartSig");
    console.log("didn't exist in array: ", smarterSum[num]);
    return smarterSum[num];
  }
}
smartSig(smarterSum, 76453);
smartSig(smarterSum, 76453);
console.log(smarterSum);
