/* ===========================================================
   🧾 회원가입 폼 JS
   - 비밀번호 일치 검증
   - 필수항목 확인
   - 완료 시 메시지 표시
=========================================================== */

const form = document.getElementById("signupForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const address = document.getElementById("address").value.trim();
  const agree = document.getElementById("agree").checked;

  // ✅ 필수 입력값 확인
  if (!name || !email || !password || !confirmPassword || !address) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  // ✅ 이메일 형식 간단 체크
  if (!email.includes("@")) {
    alert("올바른 이메일 주소를 입력해주세요.");
    return;
  }

  // ✅ 비밀번호 확인
  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // ✅ 약관 동의 확인
  if (!agree) {
    alert("이용약관에 동의해주세요.");
    return;
  }

  // 결과 메시지 표시
  resultBox.classList.remove("hidden");
  resultText.textContent = "가입 절차를 진행 중입니다...";

  setTimeout(() => {
    resultText.textContent = `✅ ${name}님, 회원가입이 완료되었습니다!`;
    form.reset();
  }, 2000);
});
