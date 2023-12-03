import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.body.style.backgroundColor = '#ECF3F7';
const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;

  for (let i = 0; i < amount.value; i++) {
    let position = i + 1;
    const delays = Number(delay.value) + step.value * i;

    createPromise(position, delays)
      .then(({ position, delay }) => {
        iziToast.show({
          title: '✅',
          message: `Fulfilled promise ${position} in ${delay}ms`,
          messageColor: '#4E9762',
          position: 'topRight',
          color: '#E6FCED',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          title: '❌',
          message: `Rejected promise ${position} in ${delay}ms`,
          messageColor: '#874844',
          position: 'topRight',
          color: '#FCE8E6',
        });
      });
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
