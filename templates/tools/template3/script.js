/* ===========================================================
   🎨 Color Picker JS
   - HEX ↔ RGB 변환 / 클립보드 복사
=========================================================== */

const colorPicker = document.getElementById("colorPicker");
const preview = document.getElementById("colorPreview");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");

// ✅ HEX → RGB 변환
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  if (clean.length !== 6) return null;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

// ✅ 색상 변경 시 업데이트
colorPicker.addEventListener("input", () => {
  const hex = colorPicker.value;
  const rgb = hexToRgb(hex);
  preview.style.background = hex;
  hexValue.value = hex;
  rgbValue.value = rgb;
});

// ✅ 복사 기능
function copyToClipboard(id) {
  const el = document.getElementById(id);
  el.select();
  navigator.clipboard.writeText(el.value);
  alert(`복사됨: ${el.value}`);
}

// ✅ HEX → RGB 변환기
function convertHexToRGB() {
  const hex = document.getElementById("convertHex").value.trim();
  const result = hexToRgb(hex);
  document.getElementById("convertResult").textContent =
    result ? `➡️ ${result}` : "❌ 올바른 HEX 형식이 아닙니다 (#000000)";
}

// 초기화
colorPicker.dispatchEvent(new Event("input"));
