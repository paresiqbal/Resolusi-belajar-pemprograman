function showTime() {
  // Variable
  let date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session = "AM";

  // Conditional If
  if (hrs == 0) {
    h = 12;
  }

  if (hrs > 12) {
    hrs = hrs - 12;
    session = "PM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let time = `${hrs}:${min}:${sec}` + session;
  document.getElementById("MyClockDisplay").innerText = time;

  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
