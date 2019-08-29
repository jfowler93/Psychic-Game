// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Only run the following code block if the user presses "r" or "p" or "s".
  if (userGuess === event.key) {

    // Hide the directions
    directionsText.textContent = "Guess What Letter I'm Thinking of";

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

    if (userGuess === computerGuess) {
      console.log("You won");
      wins++
    }
    
    if(userGuess!= computerGuess){
      console.log("You lost");
      losses++
    }
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