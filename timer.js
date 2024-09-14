let timer;
let timeLeft = 25 * 60;
let isRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer-display").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("start-timer-btn").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
      }
    }, 1000);
  }
});

document.getElementById("pause-timer-btn").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById("reset-timer-btn").addEventListener("click", () => {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateTimerDisplay();
  isRunning = false;
});
