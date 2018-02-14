// Arrays 2 (Intermediate Challenges)
// TEST ARRAYS
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
function arrConcat(array1, array2){
    var newArr = [];
    console.log('array1:', array1);
    console.log('array2:', array2);
    for(var i=0; i<array1.length; i++){
        newArr[i]=array1[i];
    }
    for(var j=0; j<array2.length; j++){
        newArr[newArr.length]=array2[j];
    }
    console.log('concatenated arrays:', newArr);
}
 arrConcat(arrNum, arrStrng);
 arrConcat(arrNum2, arrStrng);
 arrConcat(arrStrng, arrNum);
 arrConcat(arrNum, arrMix);
 arrConcat(arrMix, arrNum);
