const randomNumber=parseInt((Math.random()*100+1));

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');

const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHigh');
const startOver= document.querySelector('.resultParas');


const p=document.createElement('p')

let prevGuess=[]
let numGuess=1;

let playGame=true;

if(playGame){
submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
   

})
}

function validateGuess(guess){
if(isNaN(guess)){
    alert("please enter a valid number")
}
else if(guess <1){
    alert("please enter a greater number")
}
else if(guess>100){
    alert("please enter a lesser number")
}
else{
    prevGuess.push(guess)
    if(numGuess===11){
displayGuess(guess)
displayMessage(`game over, random number was ${randomNumber}`)
endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

function checkGuess(guess){
if(guess==randomNumber){
displayMessage("You guessed it right");
endGame();
}
else if(guess<randomNumber){
displayMessage("number is TOO low");
}
else if(guess>randomNumber)
    {
        displayMessage("number is TOO high");
    }
}

function displayGuess(guess){
userInput.value='';
guessSlot.innerHTML+=`${guess}`;
numGuess++;
remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(msg){
lowOrHi.innerHTML = `<h2>${msg} </h2>`;
}

function newGame(){

}

function endGame(){

}