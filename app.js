"use strict";
const secretNum = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector(".btn__check");
let score = 20;
document.querySelector(".number").textContent = secretNum;

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️  No number";
    // When player wins
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent = "🎉  Correct number!";
    document.body.style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
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
