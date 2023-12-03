document.body.style.backgroundColor = '#ECF3F7';
let intID;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const element = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

element.btnStop.disabled = true;
element.btnStart.addEventListener('click', onBtnStartChangeColor);
element.btnStop.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
  element.btnStart.disabled = true;
  element.btnStop.disabled = false;

  intID = setInterval(() => {
    element.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStopChangeColor() {
  element.btnStart.disabled = false;
  element.btnStop.disabled = true;

  clearInterval(intID);
}
