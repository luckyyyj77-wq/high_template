/* ===========================================================
   🔐 비밀번호 생성기 JS
   - 길이 / 옵션별 생성 + 복사 기능
=========================================================== */

const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";

function generatePassword() {
  const len = parseInt(lengthSlider.value);
  const includeUpper = document.getElementById("includeUpper").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  let chars = lower;
  if (includeUpper) chars += upper;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  let pw = "";
  for (let i = 0; i < len; i++) {
    pw += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordField.value = pw;
}

// ✅ 길이 표시 갱신
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
  generatePassword();
});

// ✅ 생성 버튼
document.getElementById("generateBtn").addEventListener("click", generatePassword);

// ✅ 복사 버튼
function copyPassword() {
  navigator.clipboard.writeText(passwordField.value);
  alert("복사됨: " + passwordField.value);
}

// 초기 생성
generatePassword();
