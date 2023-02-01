function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const bodyEL = document.querySelector(".body");
//Body я не змінив бо не знаю як зробити більш зрозумілим
//та і наврядчи воно буде не одно
console.log(bodyEL);
function getNewBackgroundColor() {
  const newColor = getRandomHexColor();
  bodyEL.style.background = newColor;
  colorName.textContent = newColor;
}

changeColorBtn.addEventListener("click", getNewBackgroundColor);
