function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector(".input-js");
const boxes = document.querySelector("#boxes");

let quantity = 0;

function valueFromInput(event) {
  quantity = Number(event.currentTarget.value);
  console.log(quantity);
}

inputEl.addEventListener("input", valueFromInput);

const divArray = [];

const createBoxes = (amount) => {
  let color = getRandomHexColor();
  let width = 20;
  let heigth = 20;

  if (inputEl.min < amount && inputEl.max > amount) {
    for (let i = 1; i <= amount; i += 1) {
      color = getRandomHexColor();
      width += 10;
      heigth += 10;

      const divEl = document.createElement("div");
      divEl.style.backgroundColor = color;
      divEl.style.width = `${width}px`;
      divEl.style.height = `${heigth}px`;
      divArray.push(divEl);
    }
    console.log(divArray);
    return divArray;
  } else {
    alert("the number is not in the range of suitable");
  }
};

function onClickCreate() {
  createBoxes(quantity);
  boxes.prepend(...divArray);
}

createBtn.addEventListener("click", onClickCreate);

function onClickDestroy() {
  for (const element of divArray) {
    element.remove();
  }
  divArray.splice(0);
}

destroyBtn.addEventListener("click", onClickDestroy);
