/* ===========================================================
   👤 프로필 관리 JS
   - 이미지 미리보기
   - 입력 검증 및 저장 시 시뮬레이션 메시지 표시
=========================================================== */

const imageInput = document.getElementById("imageUpload");
const profileImg = document.getElementById("profileImage");
const form = document.getElementById("profileForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// ✅ 이미지 업로드 미리보기
imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    profileImg.src = reader.result;
  };
  reader.readAsDataURL(file);
});

// ✅ 폼 제출 처리
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const role = document.getElementById("role").value.trim();
  const bio = document.getElementById("bio").value.trim();

  if (!name || !email) {
    alert("이름과 이메일은 필수 입력입니다.");
    return;
  }

  // 저장 시뮬레이션 메시지
  resultBox.classList.remove("hidden");
  resultText.textContent = "프로필 저장 중...";

  setTimeout(() => {
    resultText.textContent = `✅ ${name}님의 프로필이 업데이트되었습니다!`;
    form.reset();
  }, 1500);
});
