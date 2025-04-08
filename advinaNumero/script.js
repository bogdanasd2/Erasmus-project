/*Generate a number at chance
Math.random generates a random number between 0 and 1
Math.floor removes the decimals */
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowerOrHigher = document.querySelector('.lowerOrHigher');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
//Variables for attempts
let guessCount = 1;
//Variable to create the reset button
let resetButton;
//function for checking the number introduced
function checkGuess(){
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Introduced Previously: ";
    }
    guesses.textContent += userGuess + " ";
    //block for finding out whether we have guessed right or not the number introduced previously
    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations, you got it right🫃";
        lastResult.style.backgroundColor = "black";
        lowerOrHigher.textContent = "";
        setGameOver();
    } else if(guessCount===10){
        lastResult.textContent = "Ohh Game Over🥀";
        setGameOver();
    } else {
        lastResult.textContent = "Incorrect!🪫";
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowerOrHigher.textContent = "The number is bigger";

        }else if(userGuess > randomNumber){
            lowerOrHigher.textContent = "The number is smaller";
        }
    }
    guessCount++;
    guessField.value= "";
    guessField.focus();
}



//add a listener to the button
guessSubmit.addEventListener('click', checkGuess);
// create a gameover function
function setGameOver(){
    guessField.disabled = true; //Disables the input
    guessSubmit.disabled = true;
    //create a new button to reset the game
    resetButton = document.createElement('button');
    resetButton.classname = 'resetButton';
    resetButton.textContent = "Reinitiate Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i=0;i < resetParas.length; i++){
        resetParas[i].textContent ="";
        resetParas[i].style.backgroundColor = 'green';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value="";
    guessField.focus();
    lastResult.style.backgroundColor = 'green';
    let randomNumber = Math.floor(Math.random() * 100) + 1;
}