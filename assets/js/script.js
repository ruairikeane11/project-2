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

    let computerChoice = Math.floor(Math.random() * 3);

    playerImage.src = `assets/images/${choices[playerChoice]}`;
    playerImage.alt = choices[playerChoice];

    computerImage.src = `assets/images/${choices[computerChoice]}`;
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
        messages.innerHTML = '<h1>Go Again!</h1>';
    } else if (result === 'Win') {
        messages.innerHTML = `<h1>Well Done!</h1>`;
    } else {

        messages.innerHTML = `<h1>Hard Luck!</h1>`;
    }


}


/**
 * Gets score from DOM and increments by one
 */

function updateScores(result) {

    let playerScore = parseInt(document.getElementById('player-score').innerText);
    let computerScore = parseInt(document.getElementById('computer-score').innerText);

    if (result === "Tie") {

    } else if (result === "Win") {
        playerScore += 1;

    } else {
        computerScore += 1;
    }

    document.getElementById('player-score').textContent = playerScore.toString();
    document.getElementById('computer-score').textContent = computerScore.toString();


    endRound();
}

/**
 * resets player and computer score but increments rounds by 1
 */

function endRound() {

    let playerRound = document.getElementById('player-round');
    let computerRound = document.getElementById('computer-round');
    let playerScoreValue = parseInt(playerScore.innerText);
    let computerScoreValue = parseInt(computerScore.innerText);

    if (playerScoreValue >= 3) {
        playerRound.textContent = parseInt(playerRound.innerText) + 1;
        // reset  score
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        messages.innerHTML = `<h2> WELL DONE, YOU WON THIS ROUND!</h2>`;
    } else if (computerScoreValue >= 3) {
        computerRound.textContent = parseInt(computerRound.innerText) + 1;
        //resets score
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        messages.innerHTML = `<h2> HARD LUCK, YOU LOSE THIS ROUND!</h2>`;
    }

}
