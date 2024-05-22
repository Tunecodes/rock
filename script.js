function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else {
    switch (playerSelection) {
      case "rock":
        return computerSelection === "scissor" ? "you win" : "you lose";
      case "paper":
        return computerSelection === "rock" ? "you win" : "you lose";
      case "scissor":
        return computerSelection === "paper" ? "you win" : "you lose";
    }
  }
}

function playGame() {
  let win = 0;
  let lose = 0;
  let tie = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('enter rock, paper scissor')
    const computerSelection = getComputerChoice().toLowerCase();
    let buffer = playRound(playerSelection, computerSelection);
    console.log(buffer);
    if (buffer === "you win") {
      win++;
    } else if (buffer === "you lose") {
      lose++;
    } else {
      tie++;
    }
  }
  console.log("win", win);
  console.log("lose", lose);
  console.log("tie", tie);
}

playGame();
