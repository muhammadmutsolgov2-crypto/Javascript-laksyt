'use strict';

const trigger = document.querySelector('#trigger');
const targetImg = document.querySelector('#target');

trigger.addEventListener('mouseover', () => {
  targetImg.src = 'picB.jpg';
});

trigger.addEventListener('mouseout', () => {
  targetImg.src = 'picA.jp';
});