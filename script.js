var roundsToPlay = 5;
var userGuesses = [];

function playGame() {
    for (var roundsPlayed = 0; roundsPlayed < roundsToPlay; roundsPlayed++) {
        var userChoice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
        userGuesses.push(userChoice); // Store user's guess
        var computerChoice = getComputerChoice();
        var result = determineWinner(userChoice, computerChoice);

        // Output
        alert("You chose " + userChoice + ".\nComputer chose " + computerChoice + ".\n" + result);

        if (result === 'You win!') {
            alert("Congratulations! You've won the game!");
            break; // Exit the loop if the user wins
        }
    }
    
    // Display user's guesses at the end
    var userGuessesString = "Your guesses: " + userGuesses.join(', ');
    alert("Game Over. " + userGuessesString);
}

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}