const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

function addName(event) {
    outputEl.textContent = event.currentTarget.value;
}

function defaultName() {
    if(outputEl.textContent === '' || outputEl.textContent === ' '){
        outputEl.textContent = 'Anonymous';
    }
    

}

inputEl.addEventListener('input', addName);
inputEl.addEventListener('input', defaultName)
