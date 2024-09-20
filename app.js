const choiceIcon = {
    rock: "&#9994;",
    paper: "&#9995;",
    scissors: "&#9996;"
};

const playerOptions = ["rock", "paper", "scissors","paper","rock", "scissors","rock","paper", "rock",
    "scissors","paper","rock", "scissors","rock","paper", "rock", "scissors"];
const computerChoiceDisplay = document.getElementsByClassName("computer-choice")[0];
const scoreTextDisplay = document.getElementsByClassName("score-text")[0];
const playerChoiceDisplay = document.getElementsByClassName("player-choice-display")[0];
const computerScoreDisplay = document.getElementsByClassName("computerScoreDisplay")[0];
const playerScoreDisplay = document.getElementsByClassName("playerScoreDisplay")[0];

let defaultChoice = "rock";

// function to initialize defaultChoice 
function inializeDefaultChoice(){
    computerChoiceDisplay.innerHTML = choiceIcon[defaultChoice];
    playerChoiceDisplay.innerHTML = choiceIcon[defaultChoice];
    scoreTextDisplay.textContent = "CURRENTLY DRAW"
}
inializeDefaultChoice();


function playGame(playerChoice) {
    const computerChoice = playerOptions[Math.floor(Math.random() * 3)];
    let result;

    if (computerChoice === playerChoice) {
        result = "DRAW";
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        result = "PLAYER WINS";
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        result = "COMPUTER WINS";
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        result = "PLAYER WINS";
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        result = "COMPUTER WINS";
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "COMPUTER WINS";
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        result = "PLAYER WINS";
    }

    
    playerChoiceDisplay.innerHTML = choiceIcon[playerChoice];
    computerChoiceDisplay.innerHTML = choiceIcon[computerChoice];
    scoreTextDisplay.textContent = result;

    if (result === "PLAYER WINS") {
        playerScoreDisplay.textContent = parseInt(playerScoreDisplay.textContent) + 1;
    } else if (result === "COMPUTER WINS") {
        computerScoreDisplay.textContent = parseInt(computerScoreDisplay.textContent) + 1;
    }
}
