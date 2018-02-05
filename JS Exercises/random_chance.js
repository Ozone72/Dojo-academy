function randomChoice(quarters, quit=1){
    var stake = quarters;
    while(stake > 0){
        stake--;
        // console.log(stake);
        var winner = Math.floor(Math.random()*100);
        // console.log(winner);
        if(winner === 1){
            stake = stake + Math.trunc(Math.random()*50)+50;
            console.log(`Your stake is now ${stake} quarters.`);
        }
        if (stake >= quit || stake === stake*1.50){
            break;
        }
    }
    console.log(`You walked away with ${stake} quarters.`);
}
randomChoice(15,50);