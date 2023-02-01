const validathionElement = document.querySelector("#validation-input");
const lengthEl = validathionElement.dataset.length;
console.log(lengthEl);

function examinationInputValueLength(event) {
  const text = event.currentTarget.value;
  if (text.length === Number(lengthEl)) {
    validathionElement.classList.add("valid");
    validathionElement.classList.remove("invalid");
  } else {
    validathionElement.classList.remove("valid");
    validathionElement.classList.add("invalid");
  }
}

validathionElement.addEventListener("blur", examinationInputValueLength);
