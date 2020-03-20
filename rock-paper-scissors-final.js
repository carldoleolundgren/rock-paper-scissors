
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
let roundsPlayed = 0;


function playRound() {
    const gameResult = document.createElement('div');
    gameResult.classList.add('gameResult');

    if (roundsPlayed < 4) {
        if (playerSelection === computerSelection) {
            gameResult.textContent = "You tie!";
            resultsContainer.appendChild(gameResult);
    
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            gameResult.textContent = "You win! Rock beats scissors!";
            resultsContainer.appendChild(gameResult);
            playerWins += 1;
            document.getElementById("playerScoreContainer").textContent="Your Score: " + playerWins; 
    
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            gameResult.textContent = "You lose! Paper beats rock!";
            resultsContainer.appendChild(gameResult);
            computerWins += 1;
            document.getElementById("computerScoreContainer").textContent="Computer's Score: " + computerWins; 
    
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            gameResult.textContent = "You lose! Scissors beats paper!";
            resultsContainer.appendChild(gameResult);
            computerWins += 1;
            document.getElementById("computerScoreContainer").textContent="Computer's Score: " + computerWins; 
    
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            gameResult.textContent = "You win! Paper beats rock!";
            resultsContainer.appendChild(gameResult);
            playerWins += 1;
            document.getElementById("playerScoreContainer").textContent="Your Score: " + playerWins; 
    
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            gameResult.textContent = "You win! Scissors beats paper!";
            resultsContainer.appendChild(gameResult);
            playerWins += 1;
            document.getElementById("playerScoreContainer").textContent="Your Score: " + playerWins; 
    
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            gameResult.textContent = "You lose! Rock beats scissors";
            resultsContainer.appendChild(gameResult);
            computerWins += 1;
            document.getElementById("computerScoreContainer").textContent="Computer's Score: " + computerWins; 
    
        } else {
            gameResult.textContent = "You need to pick rock, paper, or scissors.";
            resultsContainer.appendChild(gameResult);
        }    
    } else {
        if (playerWins > computerWins) {
            document.getElementById("resultsContainer").textContent= "You win! You won " + playerWins + " rounds!";
        } else if (playerWins < computerWins) {
            document.getElementById("resultsContainer").textContent= "You lost. The computer won " + computerWins + " rounds.";
        } else {
            document.getElementById("resultsContainer").textContent= "You tied!";
        }
    }

    
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.value;
    computerSelection = computerPlay();
    playRound();
    roundsPlayed += 1;
  });
});
