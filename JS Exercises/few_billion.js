function reward(){
    var penny = .01;
    var dayCheck = false;
    for(var day=1; day<=30; day++){
        penny*=2;
        console.log(penny);
        if(dayCheck === false && penny >=10000){
            console.log(`It took ${day} days to make ${penny}!`);
            dayCheck = true;
        }
    }
}
reward();

function billions(){
    var penny = .01;
    var dayCheck = 0;
    while(penny <= 1000000000){
        penny = penny * 2;
        dayCheck++;
        // console.log(`I have ${penny}. And it's taken ${dayCheck} days.`);
    }
    console.log(`It took ${dayCheck} days to make $${penny}!`);
}
billions();
