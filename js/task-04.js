const btnDecrement = document.querySelector(
  'button[data-action = "decrement"]'
);
const btnIncrement = document.querySelector(
  'button[data-action = "increment"]'
);
const valueEl = document.querySelector("#value");
let counterValue = 0;

function onValueIncrement() {
  counterValue = counterValue + 1;
  valueEl.textContent = counterValue;
}

function onValueDicrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

btnDecrement.addEventListener("click", onValueDicrement);
btnIncrement.addEventListener("click", onValueIncrement);
