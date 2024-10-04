const prompt = require("prompt-sync")({sigint:true});

const computerMove = () => {

  let randomNumber = Math.random();

  if (randomNumber <= (1/3)) {
    return "r";
  }
  else if (randomNumber <= (2/3)) {
    return "p";
  }
  else {
    return "s";
  }

}

const generateResult = (playerMove, computerChoice) => {

  if (playerMove === computerChoice) {
    return "Draw";
  }

  if (
    (playerMove === "r" && computerChoice === "s") ||
    (playerMove === "p" && computerChoice === "r") ||
    (playerMove === "s" && computerChoice === "p") 
  ) {
    return "You Win";
  }
  else {
    return "Computer Wins";
  }

}

let playerMove = prompt("Enter your choice (r/p/s) : ").toLowerCase();
let computerChoice = computerMove();
console.log(generateResult(playerMove, computerChoice));