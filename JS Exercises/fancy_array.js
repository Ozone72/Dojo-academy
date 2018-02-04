

function fancy(arr, sym, reversed=false){
    if(reversed===true){
        for(var i=arr.length-1; i>=0; i--){
            console.log(`${i} ${sym} ${arr[i]}`);
        }
    }
    else{
        for(var i=0; i<arr.length; i++){
            console.log(`${i} ${sym} ${arr[i]}`);
        }
    }   
}

fancy(["Athena", "Kirsten", "Blair", "Tracy"], "--$$");
fancy(["Tom", "Bill", "Gronk", "Amendola"], "=>", true);