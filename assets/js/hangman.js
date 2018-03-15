//DECLARE THOSE VARS
//----------------------------
// The wordbank
var words = ["Maleficent", "Scar", "Jafar", "Gaston", "Ursula", "Chernabog"];
// Word that player is guessing
var chosenWord = [];
// Letters in word(number of underscores for each letter)
var underScore = [];

var wrongGuess =[];
// Records how many times a letter can be pressed
var oneLetter = ['a','b','c','d','e','f',
                    'g','h','i','j','k',
                    'l','m','n','o','p',
                    'q','r','s','t','u',
                    'v','w','x','y','z'];


// Blanks in a word
var numBlanks = 0;
// Blanks and Successful guesses
var blankSuccess =[];
// Wrong guesses

//Game counterssss
var wins = 0;
var lose = 0;
var guessesLeft = 9;
var rightGuess = 0;

//GET THOSE FUNCTIONS
//--------------------------
function reset () {
    // Picks randomly from words
    chosenWord = words[Math.floor(Math.random() * words.length)];
    // Splits chosen word into individual letters
    underScore = chosenWord.split('');
    // Ready for underscores
    numBlanks = underScore.length;

    // Resets the game
    letterGuessed = 0;
    rightGuess = 0;
    guessesLeft = 9;
    wrongGuess = [""];
    blankSuccess = [""];
    var oneLetter = ['a','b','c','d','e','f',
                    'g','h','i','j','k',
                    'l','m','n','o','p',
                    'q','r','s','t','u',
                    'v','w','x','y','z'];
    test=false;
    startGame();
}


function startGame() {
    // Picks randomly from words
    chosenWord = words[Math.floor(Math.random() * words.length)].split('');

    //Get underscores
    for(var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }

    // Resets the game
    letterGuessed = 0;
    rightGuess = 0;
    guessesLeft = 9;
    wrongGuess = [""];
    blankSuccess = [""];
    var oneLetter = ['a','b','c','d','e','f',
                    'g','h','i','j','k',
                    'l','m','n','o','p',
                    'q','r','s','t','u',
                    'v','w','x','y','z'];
    


    //Changes HTML
    document.getElementById('wordToGuess').textContent = underScore.join('');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = wins;
    document.getElementById('lossCounter').innerHTML = lose;
    document.getElementById('wrongGuesses').innerHTML = wrongGuess;
    console.log(chosenWord);
	console.log(underScore);
	console.log(numBlanks);
	console.log(blankSuccess);
}

function compareLetters(userKey) {
    console.log('WORKING!');
    // If what the user typed is in chosen word then...
    if(chosenWord.indexOf(userKey) > -1) {
        //Keeps it going for each blank space
        for(var i = 0; i < numBlanks; i++) {
            // Fills in each correct guess
            if(underScore[i] === userKey) {
                righGuess++;
                blankSuccess[i] = userKey;
                document.getElementById('wordToGuess').innerHTML = blankSuccess.join(' ');
            }
        }
        console.log(blankSuccess);
    }

    // If what the user typed is not in the chosen word then...
    else {
        wrongGuess.push(userKey);
        guessesLeft--;
        // Changes HTML
        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('wrongGuesses').innerHTML = wrongGuess;
    }
}

function endGame() {
    // When blanks are full, you win!
    if(rightGuess === numBlanks) {
        // Add win! Yay!
        wins++;
        // Changes HTML
        document.getElementById('winCounter').innerHTML = wins;
        alert('You Win!');
        reset();
    }

    // When the number of guesses is zero, you lose
    else if (guessesLeft === 0) {
        //Add loss awww
        lose++;
        // Changes HTML
        document.getElementById('lossCounter').innerHTML = lose;
        aler('Evil got the best of you... Try again.');
        reset();
    }
}

// Game startup!

startGame();

document.onkeyup = function(event) {
    test = true;
    var letterGuessed = events.key;
    for(var i = 0; i < oneLetter.length; i++) {
        if(letterGuessed === oneLetter[i] && test === true) {
            var splicedWord = oneLetter.splice(i,1);
            compareLetters(letterGuessed);
            endGame();
            
        }
    }
}