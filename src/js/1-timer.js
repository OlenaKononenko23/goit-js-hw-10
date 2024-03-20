"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const calendar = document.querySelector("input");
const btn = document.querySelector("button");

btn.disabled = true;

let countdown; 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateChoose(selectedDates);
  },
};

let userSelectedDate = flatpickr(calendar, options);

function dateChoose(selectedDates) {
  if (selectedDates[0] > new Date()) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
    iziToast.error({
      timeout: 3000,
      message: 'Please choose a date in the future'
    });
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Функція для запуску таймера
btn.addEventListener('click', () => {
  const deadline = userSelectedDate.selectedDates[0];
  btn.disabled = true;
  calendar.disabled = true; // Деактивуємо інпут

  clearInterval(countdown); // Очистіть попередній таймер, якщо він існує

  countdown = setInterval(() => {
    const now = new Date();
    const remainingTime = deadline - now;

    if (remainingTime <= 0) {
      clearInterval(countdown);
      document.querySelector('[data-days]').textContent = '00';
      document.querySelector('[data-hours]').textContent = '00';
      document.querySelector('[data-minutes]').textContent = '00';
      document.querySelector('[data-seconds]').textContent = '00';
      return;
    }

    const time = convertMs(remainingTime);
    document.querySelector('[data-days]').textContent = addLeadingZero(time.days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(time.hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(time.minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(time.seconds);
  }, 1000);
});
