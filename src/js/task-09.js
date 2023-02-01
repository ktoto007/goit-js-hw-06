function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const btnEl = document.querySelector('.change-color');
const textEL = document.querySelector('.color')
const bodyEL = document.querySelector('.body');

console.log(bodyEL);
function getNewBackgroundColor() {
  const newColor = getRandomHexColor();
  bodyEL.style.background = newColor;
  textEL.textContent = newColor;
}

btnEl.addEventListener('click', getNewBackgroundColor)
