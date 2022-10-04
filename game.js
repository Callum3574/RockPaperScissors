function welcomeToGame() {
  const userName = prompt("please enter your name");
  alert(`Hi ${userName}, welcome to Rock, Paper, Scissors`);
  alert("if you wish to exit the game at any point, please type 'exit'");
  return game(playTurn);
}

function askUserForChoice() {
  const userChoice = prompt("please enter your choice");

  if (
    userChoice != "rock" &&
    userChoice != "paper" &&
    userChoice != "scissors" &&
    userChoice != "exit"
  ) {
    alert("please enter either rock, paper or scissors...");
    return askUserForChoice();
  } else {
    return userChoice;
  }
}
function computerDecision() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
    computerChoice;
  } else if (computerChoice === 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playTurn() {
  const usersChoice = askUserForChoice();
  const computersChoice = computerDecision();

  if (computersChoice == "paper" && usersChoice == "paper") {
    alert(`draw. ${usersChoice} & ${computersChoice}`);
  } else if (computersChoice == "rock" && usersChoice == "rock") {
    alert(`draw. ${usersChoice} & ${computersChoice}`);
  } else if (computersChoice == "scissors" && usersChoice == "scissors") {
    alert(`draw. ${usersChoice} & ${computersChoice}`);
  } else if (computersChoice == "rock" && usersChoice == "paper") {
    alert(`the user wins. ${usersChoice} beats ${computersChoice}`);
    return "user";
  } else if (computersChoice == "rock" && usersChoice == "scissors") {
    alert(`the computer wins. ${computersChoice} beats ${usersChoice}`);
    return "computer";
  } else if (computersChoice == "scissors" && usersChoice == "rock") {
    alert(`the user wins. ${usersChoice} beats ${computersChoice}`);
    return "user";
  } else if (computersChoice == "scissors" && usersChoice == "paper") {
    alert(`the computer wins. ${computersChoice} beats ${usersChoice}`);
    return "computer";
  } else if (computersChoice == "paper" && usersChoice == "rock") {
    alert(`the computer wins. ${computersChoice} beats ${usersChoice}`);
    return "computer";
  } else if (computersChoice == "paper" && usersChoice == "scissors") {
    alert(`the user wins. ${usersChoice} beats ${computersChoice}`);
    return "user";
  } else if (usersChoice === "exit") {
    return "cancelled";
  }
}
function game(playTurn) {
  let usersScore = 0;
  let computersScore = 0;

  for (let i = 0; i < 6; i++) {
    let round = playTurn();
    if (round === "computer") {
      computersScore++;
    } else if (round === "user") {
      usersScore++;
    } else if (round === "draw") {
      drawGame++;
    } else if (round === "cancelled") {
      alert("game has been cancelled");
      return;
    }

    alert(`user score: ${usersScore} <----> computer score: ${computersScore}`);
    if (usersScore === 3) {
      alert("USER has won!");
      return playAgainOrNot();
    } else if (computersScore === 3) {
      alert("COMPUTER has won!");
      return playAgainOrNot();
    }
  }
  if (computersScore < usersScore) {
    alert("USER has won");
    return playAgainOrNot();
  } else if (computersScore > usersScore) {
    alert("COMPUTER has won");
    return playAgainOrNot();
  } else if (computersScore === usersScore) {
    alert("You have drawn");
    return playAgainOrNot();
  }
}
function playAgainOrNot() {
  const playAgain = prompt("Would you like to play again?");

  if (playAgain != "yes" && playAgain != "no" && playAgain != "exit") {
    alert("please enter either yes or no...");
  } else if (playAgain === "yes") {
    return game(playTurn);
  } else if (playAgain === "no") {
    return;
  } else if (playAgain === "exit") {
    return;
  }
}

welcomeToGame();
