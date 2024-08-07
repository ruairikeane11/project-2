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


    getMessage(result, upperCaseChoice, choices[computerChoice]);
    updateScores(result);
}

/**
 * Checks who the winner is, accepts both strings chosen from 
 * player and computer
 */
function checkWinner(playerChoice, computerChoice) {

    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

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
    let upperCaseChoice = playerChoice.toUpperCase();
    let computerChoiceUpper = computerChoice.toUpperCase();



    if (result === 'Tie') {
        messages.innerHTML = `<h1>${playerChoice}</h1>`;
        messages.style.color = "green";
        messages1.innerHTML = `<h1> ${computerChoiceUpper}</h1>`;
        messages1.style.color = "red";
    } else if (result === 'Win') {
        messages.innerHTML = `<h1>${playerChoice}</h1>`;
        messages.style.color = "green";
        messages1.innerHTML = `<h1> ${computerChoiceUpper}</h1>`;
        messages1.style.color = "red";
    } else {
        messages.innerHTML = `<h1>${playerChoice}</h1>`;
        messages.style.color = "green";
        messages1.innerHTML = `<h1> ${computerChoiceUpper}</h1>`;
        messages1.style.color = "red";
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
    let messages1 = document.getElementById('messages1');
    let vs = document.getElementById('vs');

    if (playerScoreValue >= 5) {
        playerRound.textContent = parseInt(playerRound.innerText) + 1;
        // reset  score
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        messages.innerHTML = ``;
        messages1.innerHTML = '';
        messages.style.color = 'green';
        alert('WELL DONE, YOU WON THAT ROUND!');

    } else if (computerScoreValue >= 5) {
        computerRound.textContent = parseInt(computerRound.innerText) + 1;
        //resets score
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        messages.innerHTML = ``;
        messages1.innerHTML = '';
        messages.style.color = 'red';
        alert('HARD LUCK, YOU LOST THAT ROUND!')
}
}
