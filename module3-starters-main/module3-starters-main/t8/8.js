'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const button = document.querySelector('#calculate') || document.querySelector('button');
const resultP = document.querySelector('#result');

button.addEventListener('click', () => {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);
  const op = operation.value;
  let result = 0;

  if (op === 'add' || op === '+') {
    result = n1 + n2;
  } else if (op === 'sub' || op === '-') {
    result = n1 - n2;
  } else if (op === 'multi' || op === '*') {
    result = n1 * n2;
  } else if (op === 'div' || op === '/') {
    result = n1 / n2;
  }

  resultP.textContent = `Result: ${result}`;
});