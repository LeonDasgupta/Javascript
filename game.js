 var secretNumber = 4;
 var guess  = prompt("Guess a number");
 alert (guess);
 if ( Number (guess) === secretNumber) {alert ("YOU GOT IT RIGHT")}
 else if ( Number(guess) > secretNumber) {alert (" Too High")}
 else {alert (" Too low , Guess again")}