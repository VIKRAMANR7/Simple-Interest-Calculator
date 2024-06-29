let principal = document.querySelector(".principal");
let rate = document.querySelector(".rate");
let timeTaken = document.querySelector(".time");
let billingCycle = document.querySelector(".payment");
let calcBtn = document.querySelector(".btn");
let resultOutput = document.querySelector(".result-container");

calcBtn.addEventListener("click", () => {
  let si = (principal.value * rate.value * timeTaken.value) / 100;
  let monthsi = (principal.value * rate.value * timeTaken.value) / 1200;
  const principalAmt = Number(principal.value).toFixed(2);
  const totalInterest = Number(si).toFixed(2);
  const monthlytotalInterest = Number(monthsi).toFixed(2);
  const totalAmt = (Number(principalAmt) + Number(totalInterest)).toFixed(2);
  const monthlyTotalAmt = (
    Number(principalAmt) + Number(monthlytotalInterest)
  ).toFixed(2);
  if (billingCycle.value === "year") {
    resultOutput.innerHTML = `<div>Principal Amount: <span>${
      "$" + principalAmt
    }</span></div>
    <div>Total Interest: <span>${"$" + totalInterest}</span></div>
    <div>Total Amount: <span>${"$" + totalAmt}</span></div>`;
  } else {
    resultOutput.innerHTML = `<div>Principal Amount: <span>${
      "$" + principalAmt
    }</span></div>
    <div>Total Interest: <span>${"$" + monthlytotalInterest}</span></div>
    <div>Total Amount: <span>${"$" + monthlyTotalAmt}</span></div>`;
  }
});
