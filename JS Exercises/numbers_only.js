function numbersOnly(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        if(typeof(arr[i])==="number"){
            newArr.push(arr[i]);
        }
     }
     console.log(newArr);
 }
 numbersOnly([1, "apple", -3, "orange", 0.5]);
 numbersOnly(["nope", "still no", true, 4,5,6]);