function printRange(start, end, increment=1){
    // default param for increment set to 1
    for (var i=start; i<end; i+=increment){
        console.log(i);
    }
}

// printRange(2,10,2);
printRange(-3,5);