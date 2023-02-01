const controlLine = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
// тут не змінив бо не дуже зрозумів для чого тут деструктуризація
function findTextSizeValue(event) {
  const value = event.currentTarget.value;
  textEl.style.fontSize = `${value}px`;
}

controlLine.addEventListener("input", findTextSizeValue);
