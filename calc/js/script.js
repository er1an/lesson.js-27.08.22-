const form = document.querySelector("#loan-form");

form.addEventListener("submit", calculateResults);

const output = document.querySelector("#output");
output.style.display = "none";
const loader = document.querySelector("#loader");
loader.style.display = "none";
loader.style.position = "relative";

const img = document.querySelector("img");
img.style.textAlign = "center";
img.style.width = "160px";
img.style.height = "200px";

const err = document.querySelector(".error");
err.style.display = "none";
err.style.backgroundColor = "blueviolet";
err.style.height = "40px";
err.style.textAlign = "center";
err.style.fontSize = "20px";

function calculateResults(e) {
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");

  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    loader.style.display = "block";
    err.style.display = "none";
    output.style.display = "none";
    function setTime() {
      loader.style.display = "none";
      output.style.display = "block";
      err.style.display = "none";
    }
    setTimeout(setTime, 1500);
  } else {
    err.style.display = "block";
    output.style.display = "none";
  }

  e.preventDefault();
}
