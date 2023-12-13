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
let currentRound = 1;
const totalRounds = 5;


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


    let playerIndex = choices.indexOf(playerChoice);
    playerImage.src = `assets/images/${choices[playerIndex]}.jpg`;
    playerImage.alt = choices[playerIndex];

    let computerChoice = Math.floor(Math.random() * 3);


    let computerIndex = choices.indexOf(computerChoice);
    computerImage.src = `assets/images/${choices[computerIndex]}.jpg`;
    computerImage.alt = choices[computerIndex];

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
        messages.innerHTML = `<h3> ITS A DRAW</h3>`;
    } else if (result === 'Win') {
        messages.innerHTML = `<h3> YOU WIN!</h3>`;
    } else {
        messages.innerHTML = `<h3> YOU LOSE!</h3>`;
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

/**
 * Ends round and gets increments the rounds integer by 1
 */
function endGame() {

}


