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

// Player selection
playerPickedRock.addEventListener('click', () => {
    playRound(playerPickedRock.className, getComputerChoice());
});
playerPickedPaper.addEventListener('click', () => {
    playRound(playerPickedPaper.className, getComputerChoice());
});
playerPickedScissors.addEventListener('click', () => {
    playRound(playerPickedScissors.className, getComputerChoice());
});

// Results after playing a round plus scoreboard setup
function playRound(playerPick, computerPick) {
    playedRounds++;
    if (playerPick === computerPick) {
        const computerWin = document.querySelector('.outcome');
        computerWin.textContent = `It's a tie! Both of you have showed ${playerPick}.`;
    }
    else if (playerPick === "rock" && computerPick === "scissors") {
        const playerWin1 = document.querySelector('.outcome');
        playerWin1.textContent = `Congratulations, you have won! Rock defeats Scissors`;
        playerScore++;
    }
    else if (playerPick === "paper" && computerPick === "rock") {
        const playerWin2 = document.querySelector('.outcome');
        playerWin2.textContent = `Congratulations, you have won! Paper defeats Rock`;
        playerScore++;
    }
    else if (playerPick === "scissors" && computerPick === "paper") {
        const playerWin3 = document.querySelector('.outcome');
        playerWin3.textContent = `Congratulations, you have won! Scissors defeats Paper`;
        playerScore++;
    }
    else {
        const draw = document.querySelector('.outcome');
        draw.textContent = `Sorry! You have lost. The computer's ${computerPick} has defeated your ${playerPick}.`;
        computerScore++;
    }
    const scoreboard = document.querySelector('.score');
    scoreboard.textContent = `After ${playedRounds} played games, you have ${playerScore} points, while the computer has ${computerScore} points.`;
    if (playedRounds === 5) {
        declareWinner();
    }
    else {
        const endTextCleaner = document.querySelector('.results');
        endTextCleaner.textContent = ` `;
    }
}

// Game over logic
function declareWinner() {
    if (playerScore > computerScore) {
        playedRounds = 0;
        playerScore = 0;
        computerScore = 0;
        const playerWon = document.querySelector('.results');
        playerWon.textContent = `Congratulations, you have won against the computer!`;
    }
    else if (computerScore > playerScore) {
        playedRounds = 0;
        playerScore = 0;
        computerScore = 0;
        const computerWon = document.querySelector('.results');
        computerWon.textContent = `You have lost against the computer. At least you had fun playing the game, right?`;
    }
    else if (playerScore === computerScore) {
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
