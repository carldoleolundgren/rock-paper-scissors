
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
    if (playerSelection === computerSelection) {
        console.log("You tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors!");
        playerWins += 1; 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock!");
        computerWins += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats paper!");
        computerWins += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock!");
        playerWins += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper!");
        playerWins += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats scissors");
        computerWins += 1;
    } else {
        console.log("You need to pick rock, paper, or scissors.");
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