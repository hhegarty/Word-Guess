var Wins = 0;
var Losses = 0;
var GuessesLeft;
var Guessessofar;
var Computerchoice;
var Userguess = 0;
var Letters = ['a', 'b','c','d','e', 'f','g','h','i', 'j','k','l','m', 'n','o','p','q', 'r','s','t','u', 'v','w','x','y','z']

reset();
display();

document.onkeyup = function(event){
    var guess = event.key;
        if (guess === Computerchoice){
            win();
        }
        else if (GuessesLeft - 1 === 0){
            Lose();
        }
        else {
            fail(guess);
        }
        display();
}