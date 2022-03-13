"use strict";
const secretNum = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector(".btn__check");
let score = 20;
document.querySelector(".number").textContent = secretNum;

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️  No number";
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent = "🎉  Correct number!";
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
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
