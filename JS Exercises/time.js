// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

function tell_time (h,m,p){
    if (m < 30 ){
        if(p==="AM"){
            console.log("It's just after", h,"in the morning." );
        }
        else{
            console.log("It's just after", h,"in the evening.");
        }
    }
    else {
        if(p==="AM"){
            console.log("It's almost", h+1,"in the morning." );
        }
        else{
            console.log("It's almost", h+1,"in the evening.");
        }  
    }
}

tell_time(HOUR, MINUTE, PERIOD);
