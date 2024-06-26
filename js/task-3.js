'use strict';

const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const nameDefault = 'Anonymous';
input.addEventListener(
  'input',
  e => (nameOutput.innerText = e.target.value.trim() || nameDefault),
);
