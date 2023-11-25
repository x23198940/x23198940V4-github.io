$('.carousel').carousel({
    ride: 2000
  })

  function checkGuess() {
    var lowerBound = 1;
    var upperBound = 10;
    var randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

    var guessInput = document.getElementById("guessInput");
    var userGuess = parseInt(guessInput.value);

    var outputDiv = document.getElementById("output");
    var guessButton = document.getElementById("guessButton");

    if (isNaN(userGuess) || userGuess < lowerBound || userGuess > upperBound) {
        outputDiv.innerHTML = "Please guess within the range [" + lowerBound + " - " + upperBound + "]";
    } else if (userGuess < randomNumber) {
        outputDiv.innerHTML = "Sorry, wrong guess. The correct number was " + randomNumber + ".";
        outputDiv.style.color = "red";
    } else if (userGuess > randomNumber) {
        outputDiv.innerHTML = "Sorry, wrong guess. The correct number was " + randomNumber + ".";
        outputDiv.style.color = "red";
    } else {
        outputDiv.innerHTML = "Congratulations! You guessed the number " + randomNumber + ". You win a 10 euro coupon!";
        outputDiv.style.color = "green";       
    }
    guessButton.disabled = true;
}
 