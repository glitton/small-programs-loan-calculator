const input = require("readline-sync");
const MESSAGES = require("./loan_calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return (
    number.trimStart() === "" ||
    Number.isNaN(Number(number)) ||
    Number(number) <= 0
  );
}

function calculateMonthlyPayment(
  loanAmount,
  annualPercentageRate,
  loanDurationInYears
) {
  let loanDurationInMonths = Number(loanDurationInYears) * 12;
  let monthlyInterestRate = Number(annualPercentageRate) / 100 / 12;

  let monthlyPayment =
    Number(loanAmount) *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));
  monthlyPayment = monthlyPayment.toFixed(2);

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

  prompt(MESSAGES["loanDurationInYears"]);
  let loanDurationInYears = input.question();
  while (invalidNumber(loanDurationInYears)) {
    prompt(MESSAGES["invalidNumber"]);
    loanDurationInYears = input.question();
  }

  prompt(`You entered:\n
 - a loan amount of $${loanAmount} dollars\n
 - with an annual percentage rate of ${annualPercentageRate} percent\n
 - and a loan term of ${loanDurationInYears} years.\n
 If your input is correct, press 'y' to continue.  To start over press 'x'`);

  let userInput = input.question();
  while (!["y", "x"].includes(userInput)) {
    prompt(MESSAGES["invalidInput"]);
    userInput = input.question();
  }

  console.clear();

  if (userInput === "x") continue;

  let userMonthlyPayment = calculateMonthlyPayment(
    loanAmount,
    annualPercentageRate,
    loanDurationInYears
  );

  prompt(`${MESSAGES["monthlyPayment"]}$${userMonthlyPayment}`);
  prompt(MESSAGES["anotherCalculation"]);

  let answer = input.question();
  console.clear();

  while (!["y", "x"].includes(answer)) {
    prompt(MESSAGES["choice"]);
    answer = input.question();
  }

  if (answer !== "y") break;
}
