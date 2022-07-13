let playerScore = 0;
let computerScore = 0;
game();

function computerPlay() {
  let playVariable = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

  if (playVariable === 0) {
    return "rock";
  } else if (playVariable === 1) {
    return "paper";
  } else if (playVariable === 2) {
    return "scissors";
  }
}

function roundPlay(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "Computer wins! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "Computer wins! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "Computer wins! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection == computerSelection) {
    return "Draw, " + playerSelection + " and " + computerSelection;
  } else {
    playerScore++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
}

function game() {
  for (let x = 1; x < 6; x++) {
    let playerSelection = prompt("Rock Paper or Scissors?").toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
      console.log("Your choice is " + playerSelection);
      console.log("Computer selects " + computerSelection);
      console.log(roundPlay(playerSelection, computerSelection));
    } else {
      console.log("Error! Try again!");
    }
    console.log("Round " + x);
    console.log("Your Score " + playerScore);
    console.log("Computer Score " + computerScore);
  }
}