/* ==========================================
   ☎️ 문의 폼 JS
   - 필수 입력 검증
   - 제출 시 확인 메시지 표시
========================================== */

const form = document.getElementById("contactForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 제출 방지

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value.trim();

  // 간단한 검증
  if (!name || !email || !type || !message) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  // 이메일 형식 간단히 체크
  if (!email.includes("@")) {
    alert("올바른 이메일 주소를 입력해주세요.");
    return;
  }

  // 결과 메시지 표시
  resultBox.classList.remove("hidden");
  resultText.textContent = "문의 내용을 전송 중입니다...";

  // 2초 후 완료 메시지
  setTimeout(() => {
    resultText.textContent = `✅ ${name}님, 문의가 접수되었습니다. 감사합니다!`;
    form.reset();
  }, 2000);
});
