

    var wins = 0;
    var losses = 0;
    var guessesWins = 0;
    var guessesLosses = 0;
    var guessesLeft = 10;
    var guessesSoFar = 0;
    var guessesSoFar = [];
    var i = 0;
 
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    // var chars = "abcde";
    var randomChar = '';

    // Randomly chooses a choice from the chars array.
    function randomString() {
        var temp = Math.floor(Math.random() * chars.length);
        randomChar = chars[temp];
        return randomChar;
    }

    // Reset variables
    function reset() {
        guessesLeft = 10;
        guessesSoFar.length = 0;
        i = 0;
    }

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        // This is the Computer's guess.
        var computerGuess = randomString();

        // building the guessesSoFar array
        guessesSoFar[i] = userGuess;
        
        if(userGuess === computerGuess ) {
            wins++; 
            reset();
        } else {
            guessesLosses++;
            guessesLeft--;
        }

        i++;
        
        console.log(guessesSoFar);
        
        if(guessesLeft == 0) {
            losses++;
            reset();
        }

        var html = 
        "<p> Your chose: " + userGuess + "</p>" +
        "<p> Computer chose: " + computerGuess + "</p>" +
        "<p> wins: " + wins + "</p>" +
        "<p> losses: " + losses + "</p>" +
        "<p> Guesses Left: " + guessesLeft + "</p>" +
        "<p> Your Guesses so far: " + guessesSoFar + "</p>";

        document.querySelector("#game").innerHTML = html;
    };
