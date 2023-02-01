const inputEl = document.querySelector('#validation-input');
const lengthEl = inputEl.dataset.length;
console.log(lengthEl);



function examinationInputValueLength(event) {
    const text = event.currentTarget.value;
    if(text.length === Number(lengthEl)){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else{
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}

inputEl.addEventListener('blur', examinationInputValueLength);