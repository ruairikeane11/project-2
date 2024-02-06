/**
 * Declare constants for DOM elements
 * and choices
 */
const buttons = document.getElementsByClassName("selector");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["rock", "paper", "scissors"];


/**
 * Add event listeners to all the buttons
 */
// Loop through buttons and add event listeners
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = button.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * Main Game function, takes one parameter 
 * which is the data-choice value of selected button
 */
function playGame(playerChoice) {

    let computerChoice = Math.floor(Math.random() * 3);

    playerImage.src = `assets/images/${choices[playerChoice]}3.jpg`;
    playerImage.alt = choices[playerChoice];

    computerImage.src = `assets/images/${choices[computerChoice]}3.jpg`;
    computerImage.alt = choices[computerChoice];


    let result = checkWinner(choices[playerChoice], choices[computerChoice]);
    let upperCaseChoice = choices[playerChoice].toUpperCase();

    getMessage(result, upperCaseChoice);
    updateScores(result);
}

/**
 * Checks who the winner is, accepts both strings chosen from 
 * player and computer
 */
function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        let result = "Tie";
        return result;
    } else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK")) {
        let result = "Win";
        return result;
    } else {
        let result = "Lose";
        return result;
    }
}

/**
 * Gets answer from DOM and displays it in the messages div
 */
function getMessage(result, playerChoice, computerChoice) {

    let messages = document.getElementById('messages');
    let messages1 = document.getElementById('messages1');


    if (result === 'Tie') {
        messages.innerHTML = `<h2>YOU CHOSE</h2><h2>${playerChoice}</h2>`;
        messages.style.color = "blue";
        messages1.innerHTML = `<h2>COMPUTER CHOSE ${computerChoice}</h2>`
    } else if (result === 'Win') {
        messages.innerHTML = `<h2>YOU CHOSE</h2><h2>${playerChoice}</h2>`;
        messages.style.color = "blue";
        messages1.innerHTML = `<h2>COMPUTER CHOSE ${computerChoice}</h2>`
    } else {
        messages.innerHTML = `<h2>YOU CHOSE</h2><h2>${playerChoice}</h2>`;
        messages.style.color = "blue";
        messages1.innerHTML = `<h2>Computer chose ${computerChoice}`;
        messages1.innerHTML = `<h2>COMPUTER CHOSE ${computerChoice}</h2>`
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
    let messages = document.getElementById('messages');

    if (playerScoreValue >= 3) {
        playerRound.textContent = parseInt(playerRound.innerText) + 1;
        // reset  score
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        messages.innerHTML = `<h1>WELL DONE</h1><h1>YOU WON</h1><h1>THAT ROUND!</h1>`;
    } else if (computerScoreValue >= 3) {
        computerRound.textContent = parseInt(computerRound.innerText) + 1;
        //resets score
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        messages.innerHTML = `<h1>HARD LUCK</h1><h1>YOU LOST</h1><h1>THAT ROUND!</h1>`;
    }
}
