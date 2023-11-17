function clicked(val) {
  computerTurn(val);
}


let newScore = localStorage.getItem("Score");
let score = JSON.parse(newScore) || {
  uwin: 0,
  cwin: 0,
};


function updateScore() {
  localStorage.setItem("Score", JSON.stringify(score));
}

function resetScores(){
  score.uwin = 0;
  score.cwin = 0;
  updateScore();
  document.querySelector(".result").innerText = "";
  document.querySelector(".userScore").innerText = score.uwin + " : ";
  document.querySelector(".computerScore").innerText = score.cwin;
}

score.displayScore = function () {
  document.querySelector(".userScore").innerText = score.uwin + " : ";
  document.querySelector(".computerScore").innerText = score.cwin;
};

function computerTurn(val) {
  userChoice = val;

  let randomNumber = Math.random() * 3; //to generate a random number between 1 and 3
  let computerChoice = 0;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 1;
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 2;
  } else {
    computerChoice = 3;
  }

  if (userChoice == computerChoice) {
    document.querySelector(".result").innerText = "DRAW🤯🤯!!";
    updateScore();
    score.displayScore();
  } else if (userChoice == 1 && computerChoice == 2) {
    document.querySelector(".result").innerText =
      "You Lose🤣🤣!!\nI chose Paper";
    score.cwin++;
    updateScore();
    score.displayScore();
  } else if (userChoice == 1 && computerChoice == 3) {
    document.querySelector(".result").innerText =
      "Congratulations You Won😒😒!!\nI chose Scissor";
    score.uwin++;
    updateScore();
    score.displayScore();
  } else if (userChoice == 2 && computerChoice == 1) {
    document.querySelector(".result").innerText =
      "Congratulations You Won😒😒!!\nI chose Stone";
    score.uwin++;
    updateScore();
    score.displayScore();
  } else if (userChoice == 2 && computerChoice == 3) {
    document.querySelector(".result").innerText =
      "You Lose🤣🤣!!\nI chose Scissor";
    score.cwin++;
    updateScore();
    score.displayScore();
  } else if (userChoice == 3 && computerChoice == 1) {
    document.querySelector(".result").innerText =
      "You Lose🤣🤣!!\nI chose Stone";
    score.cwin++;
    updateScore();
    score.displayScore();
  } else if (userChoice == 3 && computerChoice == 2) {
    document.querySelector(".result").innerText =
      "Congratulations You Won😒😒!!\nI chose Paper";
    score.uwin++;
    updateScore();
    score.displayScore();
  }
}
