const input = require("readline-sync");
const MESSAGES = require("./loan_calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

// function invalidChoice(userChoice) {
//   return userChoice !== "y" || userChoice !== "n" || userChoice !== "x";
// }

function invalidChoice(userChoice, message) {
  while (!["y", "n", "x"].includes(userChoice)) {
    prompt(MESSAGES[message]);
    userChoice = input.question();
  }
  return userChoice;
  console.clear();
}

console.log(invalidChoice("first", "choice"));
// console.log(invalidChoice("y", "choice"));
