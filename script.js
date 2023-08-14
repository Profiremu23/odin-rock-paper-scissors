// Initializing variables
let playerScore = 0;
let computerScore = 0;
let playedRounds = 0;

// Initializing the player's query selectors
const playerPickedRock = document.querySelector('.rock');
const playerPickedPaper = document.querySelector('.paper');
const playerPickedScissors = document.querySelector('.scissors');

// Computer selection
function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

// Player selections
function getPlayerChoiceRock() {
    playerPickedRock.addEventListener('click', () => {
        playRound(playerPickedRock.className, getComputerChoice(), game());
        playedRounds++;
    });
}

function getPlayerChoicePaper() {
    playerPickedPaper.addEventListener('click', () => {
        playRound(playerPickedPaper.className, getComputerChoice(), game());
        playedRounds++;
    });
}

function getPlayerChoiceScissors() {
    playerPickedScissors.addEventListener('click', () => {
        playRound(playerPickedScissors.className, getComputerChoice(), game());
        playedRounds++;
    });
}

// Results after playing a round
function playRound(playerPick, computerPick) {
    if (playerPick === computerPick) {
        const computerWin = document.querySelector('.outcome');
        computerWin.textContent = `It's a tie! Both of you have showed ${playerPick}.`;
    }
    else if (playerPick === "rock" && computerPick === "scissors") {
        playerScore++;
        const playerWin1 = document.querySelector('.outcome');
        playerWin1.textContent = `Congratulations, you have won! Rock defeats Scissors`;
    }
    else if (playerPick === "paper" && computerPick === "rock") {
        playerScore++;
        const playerWin2 = document.querySelector('.outcome');
        playerWin2.textContent = `Congratulations, you have won! Paper defeats Rock`;
    }
    else if (playerPick === "scissors" && computerPick === "paper") {
        playerScore++;
        const playerWin3 = document.querySelector('.outcome');
        playerWin3.textContent = `Congratulations, you have won! Scissors defeats Paper`;
    }
    else {
        computerScore++;
        const draw = document.querySelector('.outcome');
        draw.textContent = `Sorry! You have lost. The computer's ${computerPick} has defeated your ${playerPick}.`;
    }
}

// Game function and display
function game() {
    for (playedRounds = 0; playedRounds < 5; playedRounds++) {
        const scoreboard = document.querySelector('.score');
        scoreboard.textContent = `After ${playedRounds} played games, you have ${playerScore} points, while the computer has ${computerScore} points.`;
    }
    if (playedRounds === 5 && playerScore > computerScore) {
        playedRounds = 0;
        playerScore = 0;
        computerScore = 0;
        const playerWon = document.querySelector('.results');
        playerWon.textContent = `Congratulations, you have won against the computer!`;
    }
    else if (playedRounds === 5 && computerScore > playerScore) {
        playedRounds = 0;
        playerScore = 0;
        computerScore = 0;
        const computerWon = document.querySelector('.results');
        computerWon.textContent = `You have lost against the computer. At least you had fun playing the game, right?`;
    }
    else if (playedRounds === 5 && playerScore === computerScore) {
        playedRounds = 0;
        playerScore = 0;
        computerScore = 0;
        const draw = document.querySelector('.results');
        draw.textContent = `It's a tie! After 5 played games, your score is standing at ${playerScore} points, the computer's score is ${computerScore} points.`;
    }
}

// Button to reset the game
function refresh() {
    window.location.reload("Refresh");
}