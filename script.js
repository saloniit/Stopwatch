let timerInterval;
let timerTime = 60;
const timerDisplay = document.getElementById('timer-display');
const timerInput = document.getElementById('timer-input');
const startTimerButton = document.getElementById('start-timer');
const stopTimerButton = document.getElementById('stop-timer');
const resetTimerButton = document.getElementById('reset-timer');

function startTimer() {
  stopTimer();
  timerTime = parseInt(timerInput.value) * 60;
  timerInterval = setInterval(decrementTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  timerTime = parseInt(timerInput.value) * 60;
  updateTimerDisplay();
}

function decrementTimer() {
  timerTime--;
  updateTimerDisplay();
  if (timerTime === 0) {
    stopTimer();
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerTime / 60);
  const seconds = timerTime % 60;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  timerDisplay.innerHTML = `${displayMinutes}:${displaySeconds}`;
}

startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
resetTimerButton.addEventListener('click', resetTimer);

updateTimerDisplay();








const stopwatchDisplay = document.getElementById('stopwatch-display');
const startStopwatchButton = document.getElementById('start-stopwatch');
const stopStopwatchButton = document.getElementById('stop-stopwatch');
const resetStopwatchButton = document.getElementById('reset-stopwatch');

let stopwatchInterval = null;
let stopwatchTime = 0;

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchTime / 3600);
  const minutes = Math.floor((stopwatchTime % 3600) / 60);
  const seconds = stopwatchTime % 60;

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  stopwatchDisplay.textContent = formattedTime;
}

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchTime += 1;
    updateStopwatchDisplay();
  }, 1000);
  startStopwatchButton.disabled = true;
  stopStopwatchButton.disabled = false;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  startStopwatchButton.disabled = false;
  stopStopwatchButton.disabled = true;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

startStopwatchButton.addEventListener('click', startStopwatch);
stopStopwatchButton.addEventListener('click', stopStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);
