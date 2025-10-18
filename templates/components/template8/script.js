/* ===========================================================
   💫 진행바 JS
   - setProgress(%) 로 진행률 업데이트
   - 색상은 0~100%에 따라 변화
=========================================================== */

const bar = document.getElementById("progressBar");
const text = document.getElementById("progressText");

function setProgress(percent) {
  percent = Math.max(0, Math.min(percent, 100)); // 0~100 사이 제한
  bar.style.width = percent + "%";
  text.textContent = percent + "%";

  // 🔹 색상 변화: 빨강(0%) → 초록(100%)
  const hue = 120 * (percent / 100); // 0(red)~120(green)
  bar.style.background = `hsl(${hue}, 70%, 45%)`;

  // 🔹 100%면 약간의 효과
  if (percent === 100) {
    text.textContent = "완료!";
    bar.style.boxShadow = "0 0 12px rgba(34,197,94,0.8)";
  } else {
    bar.style.boxShadow = "none";
  }
}

// 초기값 0
setProgress(0);
