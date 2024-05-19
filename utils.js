export function prompt(message) {
  console.log(`=> ${message}`);
}

export function invalidNumber(number) {
  return (
    number.trimStart() === "" ||
    Number.isNaN(Number(number)) ||
    Number(number) <= 0
  );
}

export function calculateMonthlyPayment(
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
