/**
 * Declare constants for DOM elements
 * and choices
 */

const buttons = document.getElementsByClassName("selector");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
let messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];


/**
 * Add event listeners to all the buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        alert(`You clicked ${playerChoice}`);
        playGame(playerChoice);


    });
}


/**
 * Main Game function, takes one parameter 
 * which is the data-choice value of selected button
 */

function playGame(playerChoice) {


    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);


    updateScores(result);
    getMessage(result);

}

/**
 * Checks who the winner is, accepts both strings chosen from 
 * player and computer
 */

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert('It is a tie!');
        let result = "Tie";
        return result;

    } else if (
        (playerChoice === 'rock' && computerChoice === "scissors") ||
        (playerChoice === 'scissors' && computerChoice === "paper") ||
        (playerChoice === 'paper' && computerChoice === 'rock')) {
        alert("You win :)");
        let result = "Win";
        return result;

    } else {
        alert('You lose:(');
        let result = 'Lose';
        return result;
    }

}

/**
 * Gets answer from DOM and displays it in the messages div
 */

function getMessage(result) {
    let messages = document.getElementById('messages');

    if (result === 'Tie') {
        messages.innerHTML = '<h2>ITS A DRAW!</h2>';
    } else if (result === 'Win') {
        messages.innerHTML = '<h2>YOU WIN THIS ROUND!</h2>';
    } else {
        messages.innerHTML = '<h2>YOU LOSE THIS ROUND!</h2>';
    }


}


/**
 * Gets score from DOM and increments by one
 */

function updateScores(result) {

    let playerScore = parseInt(document.getElementById('player-score').innerText);
    let computerScore = parseInt(document.getElementById('computer-score').innerText);

    if (result === "Tie") {

        playerScore += 1;
        computerScore += 1;

    } else if (result === 'Win') {
        playerScore += 1;

    } else {
        computerScore += 1;
    }

    document.getElementById('player-score').textContent = playerScore.toString();
    document.getElementById('computer-score').textContent = computerScore.toString();


}

