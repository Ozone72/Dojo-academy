var daysUntilMyBirthday = 60;

function bday(days_until){
    for(var i=days_until; i>=0; i--){
        if (i>30){
        console.log(i,"days until my birthday.  Such a long time... :(");
        }
        else if(i<31 && i>5){
            console.log(i,"days until my birthday.  It's getting CLOSER!!!");
        }
        else if(i<6 && i>0){
            console.log(i,"DAYS UNTIL MY BIRTHDAY!!!!!!");
        }
        else{
        console.log(`♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*
        ♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪
        *•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«`);
        }
    }      
}

bday(daysUntilMyBirthday);
