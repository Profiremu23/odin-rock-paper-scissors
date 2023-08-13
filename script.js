// Initializing variables
let playerScore = 0;
let computerScore = 0;

// Computer selection
function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

// Player selection
function getPlayerChoice() {
    const playerPick = document.querySelectorAll('button');
    playerPick.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.className, getComputerChoice());
        });
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

// Game start and game over logic
function game() {
    for (let i = 0; i < 5; i++) {
        const scoreboard = document.querySelector('.score');
        scoreboard.textContent = `You have ${playerScore} points, while the computer has ${computerScore} points.`;
    }
    if (playerScore > computerScore) {
        playerScore = 0;
        computerScore = 0;
        const playerWon = document.querySelector('.results');
        playerWon.textContent = `Congratulations, you have won against the computer!`;
    }
    else if (computerScore > playerScore) {
        playerScore = 0;
        computerScore = 0;
        const computerWon = document.querySelector('.results');
        computerWon.textContent = `You have lost the game against the computer. At least you had fun playing the game, right?`;
    }
    else {
        playerScore = 0;
        computerScore = 0;
        const draw = document.querySelector('.results');
        draw.textContent = `It's a tie! After 5 games, your score is standing at ${playerScore} points, the computer's score is ${computerScore} points.`;
    }
}
getPlayerChoice();
game();