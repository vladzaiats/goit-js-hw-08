'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBgColor() {
  const randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
  const span = document.querySelector('.color');
  span.innerText = randColor;
}
const button = document.querySelector('.change-color');
button.addEventListener('click', changeBgColor);
