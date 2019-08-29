// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var letterLine = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var letterUser = document.getElementById("letter");


var restart = function () {
    guessesLeft = 13;
    letterLine = [];
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

        // Display the user and computer guesses, and wins/losses/letters used.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Remaining: " + guessesLeft;
        letterUser.textContent = "Letters Guessed: " + letterLine;


        if (userGuess === computerGuess) {
            console.log("You won");
            wins++;
            restart()
        }

        else if (guessesLeft === 0) {
            losses++;
            restart()

        }
        letterLine.push(userGuess);
    }
};