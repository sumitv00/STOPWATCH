const timeDisplay = document.querySelector('.time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let second = 0, min = 0, hr = 0;
let intervalId = null;

function updateDisplay() {
    const seconds = String(second).padStart(2, "0");
    const minutes = String(min).padStart(2, "0");
    const hours = String(hr).padStart(2, "0");
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (intervalId) return; // Prevent multiple intervals
    intervalId = setInterval(() => {
        second++;
        if (second > 59) {
            second = 0;
            min++;
        }
        if (min > 59) {
            min = 0;
            hr++;
        }
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetStopwatch() {
    stopStopwatch();
    second = 0;
    min = 0;
    hr = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
stopBtn.addEventListener('dblclick', resetStopwatch);

// Initialize display
updateDisplay();
