/* ===========================================================
   ⏱️ 타이머 / 스톱워치 JS
   - 모드 전환 / 원형 SVG 애니메이션 / 시간 포맷
=========================================================== */

let mode = "stopwatch";
let startTime = 0;
let elapsed = 0;
let timerInterval = null;
let countdown = 0;
const display = document.getElementById("timeDisplay");
const circle = document.getElementById("progressCircle");
const circumference = 2 * Math.PI * 90;

const updateDisplay = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  display.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

function start() {
  if (timerInterval) return;
  if (mode === "stopwatch") {
    startTime = Date.now() - elapsed * 1000;
    timerInterval = setInterval(() => {
      elapsed = (Date.now() - startTime) / 1000;
      updateDisplay(elapsed);
      const progress = (elapsed % 60) / 60;
      circle.style.strokeDashoffset = circumference * (1 - progress);
    }, 100);
  } else {
    const min = parseInt(document.getElementById("minutes").value) || 0;
    const sec = parseInt(document.getElementById("seconds").value) || 0;
    countdown = min * 60 + sec;
    if (countdown <= 0) return alert("시간을 입력하세요!");
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const remaining = countdown - Math.floor((Date.now() - startTime) / 1000);
      updateDisplay(Math.max(remaining, 0));
      const progress = remaining / countdown;
      circle.style.strokeDashoffset = circumference * (1 - progress);
      if (remaining <= 0) stop(true);
    }, 200);
  }
}

function stop(done = false) {
  clearInterval(timerInterval);
  timerInterval = null;
  if (done) alert("⏰ 시간이 끝났습니다!");
}

function reset() {
  stop();
  elapsed = 0;
  updateDisplay(0);
  circle.style.strokeDashoffset = circumference;
}

document.getElementById("startBtn").onclick = start;
document.getElementById("pauseBtn").onclick = stop;
document.getElementById("resetBtn").onclick = reset;

// ✅ 모드 전환
document.getElementById("stopwatchMode").onclick = () => switchMode("stopwatch");
document.getElementById("timerMode").onclick = () => switchMode("timer");

function switchMode(m) {
  mode = m;
  document.getElementById("stopwatchMode").classList.toggle("active", m === "stopwatch");
  document.getElementById("timerMode").classList.toggle("active", m === "timer");
  document.getElementById("timeInput").style.display = m === "timer" ? "flex" : "none";
  reset();
}
