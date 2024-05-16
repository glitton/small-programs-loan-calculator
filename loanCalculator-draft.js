const input = require("readline-sync");

// Ask the user for these things: loan amount in dollars and cents,
// the annual percentage rate as a whole number and the loan duration in years.
// Convert the loan duration in months and years
//Convert the APR to a percentage (divide by 100)

let loanAmount = 100000;
let loanDurationInYears = 5;
let annualPercentageRate = 3 / 100;

let monthlyInterestRate = annualPercentageRate / 12;
let loanDurationInMonths = loanDurationInYears * 12;

let monthlyPayment =
  loanAmount *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));

monthlyPayment = monthlyPayment.toFixed(2);
monthlyPayment = `$${monthlyPayment}`;
//output
//monthly payment
//number of months per payment
//Total interest paid
console.log("annual", annualPercentageRate);
console.log(monthlyInterestRate);
console.log(typeof monthlyInterestRate);
console.log(typeof loanDurationInMonths);
console.log(monthlyPayment);
