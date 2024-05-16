const input = require("readline-sync");
const MESSAGES = require("./loan_calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

// Validate APR, need to be not greater than 20% or something

function calculateMonthlyPayment(
  loanAmount,
  annualPercentageRate,
  loanDurationInYears
) {
  let loanDurationInMonths = loanDurationInYears * 12;
  let monthlyInterestRate = annualPercentageRate / 100 / 12;

  let monthlyPayment =
    loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));
  return monthlyPayment;
}

prompt(MESSAGES["welcome"]);
prompt(MESSAGES["description"]);

while (true) {
  prompt(MESSAGES["loanAmount"]);
  let loanAmount = input.question();
  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES["invalidNumber"]);
    loanAmount = input.question();
  }

  prompt(MESSAGES["annualPercentageRate"]);
  let annualPercentageRate = input.question();
  while (invalidNumber(annualPercentageRate)) {
    prompt(MESSAGES["invalidNumber"]);
    annualPercentageRate = input.question();
  }
}
