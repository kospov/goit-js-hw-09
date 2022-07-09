import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInputEl = document.querySelector('#datetime-picker');
const countdownBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let ms = 0;
let selectedDate = 0;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    selectedDate = selectedDates[0];

    calculateTimeDiff();

    if (ms < 0) {
      Notify.failure('Please choose a date in the future.');
      countdownBtn.disabled = true;
      return;
    } else if (ms > 0) {
      countdownBtn.disabled = false;
    };
  },
};

flatpickr(dateInputEl, options);

countdownBtn.disabled = true;

countdownBtn.addEventListener('click', onCountdownBtnClick);

function onCountdownBtnClick() {
  
  intervalId = setInterval(() => {
    calculateTimeDiff();
    if (ms <= 1000) {
      clearInterval(intervalId);
      countdownBtn.disabled = true;
    };
      showTimerValue(convertMs(ms));
  }, 1000);
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

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function addLeadingTwiceZero(value) {
  return String(value).padStart(3, "0");
}

function showTimerValue({ days, hours, minutes, seconds } = time) {
  timerDays.textContent = addLeadingTwiceZero(days);
  timerHours.textContent = addLeadingZero(hours);
  timerMinutes.textContent = addLeadingZero(minutes);
  timerSeconds.textContent = addLeadingZero(seconds);
}

function calculateTimeDiff() {
  ms = selectedDate - Date.now();
  return ms;
}

//