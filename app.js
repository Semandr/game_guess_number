"use strict";
let secretNum = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector(".btn__check");
const again = document.querySelector(".btn__again");
let score = 20;
let highScore = 0;

again.addEventListener("click", () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.body.style.background = "#333";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️  No number";
    // When player wins
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent = "🎉  Correct number!";
    document.querySelector(".number").textContent = secretNum;
    document.body.style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
    // When guess is too low
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
