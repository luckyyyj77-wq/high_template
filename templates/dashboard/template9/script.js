/* ===========================================================
   ⚙️ 환경 설정 JS
   - 토글, 드롭다운 값 읽기
   - 저장 버튼 클릭 시 결과 표시
=========================================================== */

const form = document.getElementById("settingsForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ✅ 각 설정값 읽기
  const darkMode = document.getElementById("darkMode").checked;
  const autoSave = document.getElementById("autoSave").checked;
  const notifications = document.getElementById("notifications").checked;
  const language = document.getElementById("language").value;
  const themeColor = document.getElementById("themeColor").value;

  // ✅ 저장 시 시뮬레이션
  resultBox.classList.remove("hidden");
  resultText.textContent = "설정을 저장 중입니다...";

  setTimeout(() => {
    resultText.textContent = `✅ 설정이 저장되었습니다.
• 다크모드: ${darkMode ? "ON" : "OFF"}
• 자동저장: ${autoSave ? "ON" : "OFF"}
• 알림: ${notifications ? "ON" : "OFF"}
• 언어: ${language}
• 테마: ${themeColor}`;
    form.reset();
  }, 1500);
});
