"use strict";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const delayInput = form.elements.delay;
  const delay = delayInput.value;
  const state = form.elements.state.value;

  delayInput.value = '';

  new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  })
  .then(delay => {
    iziToast.show({
      message: `✅ Fulfilled promise in ${delay}ms`,
      color: 'green'
    });
  })
  .catch(delay => {
    iziToast.show({
      message: `❌ Rejected promise in ${delay}ms`,
      color: 'red'
    });
  });
});
