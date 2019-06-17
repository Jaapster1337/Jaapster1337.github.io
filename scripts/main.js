var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let randomNumber = Math.floor(Math.random()*100) +1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

<label for="guessField">Enter a guess: <label><input type="text" id="guessField" class="guessField">;
<input type="submit" value="Submit guess" class="guessSubmit">

function checkGuess(){
	alert('placeholder');
}

checkGuess();