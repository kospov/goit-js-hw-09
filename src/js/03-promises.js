import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick (e) {
  e.preventDefault();

  const firstDelay = Number(e.target.elements.delay.value);
  const delaysAfterFirst = Number(e.target.elements.step.value);
  const amountPromises = Number(e.target.elements.amount.value);

  for (let i = 0; i < amountPromises; i++) {
    const position = i + 1;
    const delay = firstDelay + delaysAfterFirst * i;
    setTimeout(() => {
      createPromise(position, delay)
        .then(({ position, delay }) => { Notify.success(`Fulfilled promise ${position} in ${delay}ms`)})
        .catch(({ position, delay }) => {Notify.failure(`Rejected promise ${position} in ${delay}ms`)})
    }, delay);
  }
}

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    });
}