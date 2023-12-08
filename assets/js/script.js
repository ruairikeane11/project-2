/**
 * Declare constants for DOM elements
 * and choices
 */

const buttons = document.getElementsByClassName("selector");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages")
const choices = ['rock', 'paper', 'scissors']


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

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

/**
 * Checks who the winner is, accepts both strings chosen from 
 * player and computer
 */

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        alert('It is a tie!');
        let result = "Tie";
        return result;
    } else if ((playerChoice == 'rock' && computerChoice == "scissors") ||
        (playerChoice == 'scissors' && computerChoice == "paper") ||
        (playerChoice == 'paper' && computerChoice == 'rock')) {
        alert("You win :)");
        let result = "Win";
        return result;
    } else {
        alert('You lose:(');
        let result = 'Lose';
        return result;
    }

}


