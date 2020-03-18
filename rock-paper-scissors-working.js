
function computerPlay() {
    let playValue = Math.random();
    if (playValue <= .33) {
        return "rock";
    } else if (playValue <= .67) {
        return "paper";
    } else {
        return "scissors";
    }
} 

let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;


function playRound() {
    const resultsContainer = document.querySelector('#resultsContainer');
    const gameResult = document.createElement('div');
    gameResult.classList.add('gameResult');

    if (playerSelection === computerSelection) {
        gameResult.textContent = "You tie!";
        resultsContainer.appendChild(gameResult);

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        gameResult.textContent = "You win! Rock beats scissors!";
        playerWins += 1;
        document.getElementById("playerScoreContainer").textContent="Your Score: " + playerWins; 
        resultsContainer.appendChild(gameResult);

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        gameResult.textContent = "You lose! Paper beats rock!";
        computerWins += 1;
        document.getElementById("computerScoreContainer").textContent="Computer's Score: " + computerWins; 
        resultsContainer.appendChild(gameResult);

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        gameResult.textContent = "You lose! Scissors beats paper!";
        computerWins += 1;
        document.getElementById("computerScoreContainer").textContent="Computer's Score: " + computerWins; 
        resultsContainer.appendChild(gameResult);

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        gameResult.textContent = "You win! Paper beats rock!";
        playerWins += 1;
        document.getElementById("playerScoreContainer").textContent="Your Score: " + playerWins; 
        resultsContainer.appendChild(gameResult);

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        gameResult.textContent = "You win! Scissors beats paper!";
        playerWins += 1;
        document.getElementById("playerScoreContainer").textContent="Your Score: " + playerWins; 
        resultsContainer.appendChild(gameResult);

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        gameResult.textContent = "You lose! Rock beats scissors";
        computerWins += 1;
        document.getElementById("computerScoreContainer").textContent="Computer's Score: " + computerWins; 
        resultsContainer.appendChild(gameResult);

    } else {
        gameResult.textContent = "You need to pick rock, paper, or scissors.";
        resultsContainer.appendChild(gameResult);

    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.value;
    computerSelection = computerPlay();
    playRound();
  });
});

/*
function game() {
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    if (playerWins > computerWins) {
        console.log("You win! You won " + playerWins + " rounds!")
    } else if (playerWins < computerWins) {
        console.log("You lost. The computer won " + computerWins + " rounds.");
    } else {
        console.log("You tied!");
    }
}

console.log(game());
*/
