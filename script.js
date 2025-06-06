const timeDisplay = document.querySelector('.time'); // Select only the time element
let second = 0, min = 0, hr = 0;
let intervalId;

const startStopwatch = () => {
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
        const seconds = String(second).padStart(2, "0");
        const minutes = String(min).padStart(2, "0");
        const hours = String(hr).padStart(2, "0");
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`; // Update only the time
    }, 1000);
};

const stopStopwatch = () => {
    clearInterval(intervalId);
};
const resetStopwatch = () => {
    clearInterval(intervalId);
    second = 0;
    min = 0;
    hr = 0;
    timeDisplay.textContent = "00:00:00"; 
};

const stopButton = document.querySelector('button[onclick="stopStopwatch()"]');
stopButton.addEventListener('dblclick', resetStopwatch);