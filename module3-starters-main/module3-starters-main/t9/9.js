'use strict';

const input = document.querySelector('#calculation') || document.querySelector('input[type="text"]');
const button = document.querySelector('button');
const resultP = document.querySelector('#result');

button.addEventListener('click', () => {
  const text = input.value;
  let result = 0;

  if (text.includes('+')) {
    const parts = text.split('+');
    result = parseInt(parts[0]) + parseInt(parts[1]);
  } else if (text.includes('-')) {
    const parts = text.split('-');
    result = parseInt(parts[0]) - parseInt(parts[1]);
  } else if (text.includes('*')) {
    const parts = text.split('*');
    result = parseInt(parts[0]) * parseInt(parts[1]);
  } else if (text.includes('/')) {
    const parts = text.split('/');
    result = Math.floor(parseInt(parts[0]) / parseInt(parts[1]));
  }

  resultP.textContent = `Result: ${result}`;
});