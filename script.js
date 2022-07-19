let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  
  button.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }    
    document.getElementById('button');
    game(button.id);
  });
});

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

function game(buttonPress) {
    let playerSelection = buttonPress;
    let computerSelection = computerPlay();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
       console.log("You selected " + playerSelection);
       console.log("Computer selects " + computerSelection);
      console.log(roundPlay(playerSelection, computerSelection));
    }
    else {
      console.log("Error! Try again!");
    }
    document.getElementById("score").innerHTML = "Player: " + playerScore + "Computer:" + computerScore;
}

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