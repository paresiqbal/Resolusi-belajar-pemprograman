// Global Variabel
const timeEl = document.querySelector(".watch .time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("stop");

let seconds = 0;
let interval = null;

// Event Listener
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

//Update the timer
function timer() {
  seconds++;

  // Format time
  let hrs = Math.floor(seconds / 3600);
  let min = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (min < 10) min = "0" + min;
  if (hrs < 10) hrs = "0" + hrs;

  timeEl.innerText = `${hrs}:${min}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  timeEl.innerText = "00:00:00";
}
