let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  }
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю вы угадали число ${winningNum}`, "green");
  }
});
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
