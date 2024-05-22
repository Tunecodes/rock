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

  const playerSelection = document.querySelectorAll("button");
  playerSelection.forEach((playerSelection) => {
    playerSelection.addEventListener("click", () => {
      const computerSelection = getComputerChoice().toLowerCase();
      let result = playRound(playerSelection.id, computerSelection);
      console.log(result);
      if (result === "you win") {
        win++;
      } else if (result === "you lose") {
        lose++;
      } else {
        tie++;
      }
      const score = document.querySelector("div");
      score.textContent =
        "Wins: " + win + " " + "Lose: " + lose + " " + "Ties: " + tie;

      function resetScore(message) {
        score.textContent = message;
        win = 0;
        lose = 0;
        tie = 0;
      }
      if (win === 5) {
        resetScore("You Win!");
      } else if (lose === 5) {
        resetScore("You Lose!");
      }
    });
  });
}

playGame();
