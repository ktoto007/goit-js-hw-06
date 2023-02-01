const controlLine = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function findTextSizeValue(event) {
    const value = event.currentTarget.value;
    textEl.style.fontSize = `${value}px`;
};

controlLine.addEventListener('input', findTextSizeValue);