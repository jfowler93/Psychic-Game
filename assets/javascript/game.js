// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var letter = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var letterUser = document.getElementById("letter");

// function countGuessesLeft() {
//     document.querySelector("#guessesLeft").innerHTML = "Guesses Left " + guessesLeft;
// }

// function guessesSoFar() {
//     document.querySelector("#letter").innerHTML = "Your Guesses So Far " + letterUser.join('');
// }

var restart = function () {
    guessesLeft = 13;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === event.key) {
        guessesLeft--;

        directionsText.textContent = "Guess What Letter I'm Thinking of";

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "Guesses Remaining: " + guessesLeft;

        if (userGuess === computerGuess) {
            console.log("You won");
            wins++;
            restart()
        }

        else if (guessesLeft === 0) {
            losses++;
            restart()

        }
        // if (guessesLeft=0) {

        // }
        // restart(guessesLeft=0)
        // if(userGuess!= computerGuess){
        //   console.log("You lost");
        //   guessesLeft--
        // }
    }
};

// limit guesses and show letters guessed


// var computerChoices = ["a", "b","c","d","e","f","g","h", "i","j","k","l", "m", "n", "o","p","q","r","s","t","u","v","w","x","y","z"];

// // Creating variables to hold the number of wins, losses, and ties. They start at 0.
// var wins = 0;
// var losses = 0;
// var ties = 0;

// // Create variables that hold references to the places in the HTML where we want to display things.
// var directionsText = document.getElementById("directions-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var tiesText = document.getElementById("guesses-text");

// // This function is run whenever the user presses a key.
// document.onkeyup = function (event) {

//   // Determines which key was pressed.
//   var userGuess = event.key;

//   // Randomly chooses a choice from the options array. This is the Computer's guess.
//   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//     if (userGuess === computerGuess) {
//       console.log("You won");
//       wins++
//     }
//     if(userGuess != computerGuess){
//       console.log("You lost");
//       losses++
//     }
//   }
// ;