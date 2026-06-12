/* ===========================================================
   📱 QR 코드 생성기 JS (QRious 라이브러리 활용)
   - 텍스트 → QR Canvas
   - 크기 / 색상 옵션 / 다운로드
=========================================================== */

let qr;

function initQR() {
  const text = document.getElementById("textInput").value || "High Templater";
  const size = parseInt(document.getElementById("sizeRange").value);
  const foreground = document.getElementById("fgColor").value;
  const background = document.getElementById("bgColor").value;

  if (!qr) {
    qr = new QRious({
      element: document.getElementById('qrCanvas'),
      value: text,
      size: size,
      foreground: foreground,
      background: background,
      level: 'M' // 중간 수준의 오류 복구 (문자열 호환성 향상)
    });
  } else {
    qr.set({
      value: text || " ",
      size: size,
      foreground: foreground,
      background: background
    });
  }
}

const textInput = document.getElementById("textInput");
const sizeRange = document.getElementById("sizeRange");
const fgColor = document.getElementById("fgColor");
const bgColor = document.getElementById("bgColor");
const sizeValue = document.getElementById("sizeValue");

// 실시간 생성 기능 추가
textInput.addEventListener("input", initQR);
fgColor.addEventListener("input", initQR);
bgColor.addEventListener("input", initQR);

document.getElementById("generateBtn").addEventListener("click", initQR);

sizeRange.addEventListener("input", () => {
  sizeValue.textContent = sizeRange.value;
  if (qr) {
    qr.size = parseInt(sizeRange.value);
  }
});

// ✅ 다운로드
document.getElementById("downloadBtn").addEventListener("click", () => {
  const canvas = document.getElementById("qrCanvas");
  const link = document.createElement("a");
  link.download = "qrcode.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

// 초기 실행
window.onload = initQR;
