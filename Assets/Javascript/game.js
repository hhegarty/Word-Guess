var Wins = 0 ;
var Losses = 0;
var GuessesLeft;
var Guessessofar;
var Computerchoice;
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
function display(){
    var winsP = document.getElementById("wins");
    var lossesP = document.getElementById("losses");
    var numguesses = document.getElementById("numguesses");
    var userguesses = document.getElementById("userguesses");
    winsP.innerHTML = Wins;
    lossesP.innerHTML = Losses;
    numguesses.innerHTML = GuessesLeft;
    userguesses.innerHTML = Guessessofar.join(',');

    }
function win(){
    Wins ++;
    reset();
}
 function Lose(){
     Losses ++;
     reset();
 }
function fail(letter){
    GuessesLeft --;
    Guessessofar.push(letter);
    }
function reset(){
    GuessesLeft = 9;
    Guessessofar = [];
    Computerchoice = Letters[Math.floor(Math.random() * Letters.length)];
    console.log ("letter to guess: " + Computerchoice);
}
