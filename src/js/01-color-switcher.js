const startBtnEl = document.querySelector("[data-start]");
const stopBtnEl = document.querySelector("[data-stop]");
let timerId = null;

stopBtnEl.setAttribute('disabled', false);

startBtnEl.addEventListener('click', onStartBntClick);

stopBtnEl.addEventListener('click', onStopBtnClick);

function onStartBntClick() {
    timerId = setInterval(changeBodyBackgroundColor, 1000);
    startBtnEl.disabled = true;
    stopBtnEl.disabled = false;
}

function onStopBtnClick() {
    clearInterval(timerId);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}