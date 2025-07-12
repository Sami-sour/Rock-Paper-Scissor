let innerLayout = document.querySelector(".inner-layout");

let outerLayout = document.querySelector(".outer-layout");

let btn = document.querySelector(".start");

let gameImg = document.querySelectorAll(".game-img");

let msg = document.querySelector(".msg");

let userScore = document.querySelector("#user-score");

let compScore = document.querySelector("#comp-score");

let subinnerLayout = document.querySelector(".subinner-layout");

let para = document.querySelector(".para");

let resetBtn = document.querySelector(".reset-btn");

let userscore = 0;
let compscore = 0;

innerLayout.style.display = "none";
subinnerLayout.style.display = "none";

btn.addEventListener("click", () => {
  outerLayout.style.display = "none";
  innerLayout.style.display = "block";
});

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game draw!. Play again";
  msg.style.color = "blue";
};

const getcompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin) => {
  if (userWin) {
    ++userscore;
    userScore.innerText = userscore;

    console.log("user score =", userscore);
    console.log("You win the game!");
    msg.innerText = "You win the game!";
    msg.style.color = "green";
  } else {
    ++compscore;
    compScore.innerText = compscore;

    console.log("comp score =", compscore);
    console.log("You loose the game!");
    msg.innerText = "You loose the game!.";
    msg.style.color = "red";
  }
  winner();
};

const winner = () => {
  if (userscore === 10) {
    userscore = 0;
    innerLayout.style.display = "none";
    subinnerLayout.style.display = "block";
    para.innerText = "Hurrah! You win the game ";
    para.style.color = "green";
  } else if (compscore === 10) {
    compscore = 0;
    innerLayout.style.display = "none";
    subinnerLayout.style.display = "block";
    para.innerText = "Oops! You loose the game ";
    para.style.color = "red";
  }
  resetGame();
};

const resetGame = () => {
  resetBtn.addEventListener("click", () => {
    innerLayout.style.display = "block";
    subinnerLayout.style.display = "none";
    outerLayout.style.display = "none";
    msg.innerText = "";
    userScore.innerText = 0;
    compScore.innerText = 0;
    userscore = 0;
    compscore = 0;
  });
};

const playGame = (userChoice) => {
  console.log("userChoice =", userChoice);
  const compChoice = getcompChoice();
  console.log("compChoice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin);
  }
};

gameImg.forEach((gameImg) => {
  gameImg.addEventListener("click", () => {
    const userChoice = gameImg.getAttribute("id");

    playGame(userChoice);
  });
});
