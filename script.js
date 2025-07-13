// script.js

let votes = 0;

function upvote() {
  votes++;
  updateDisplay();
}

function downvote() {
  votes--;
  updateDisplay();
}

function updateDisplay() {
  const result = document.getElementById("result");
  result.textContent = `Votes: ${votes}`;
}