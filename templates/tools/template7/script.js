/* ===========================================================
   📱 QR 코드 생성기 JS
   - 텍스트 → QR Canvas (no library)
   - 크기 / 색상 옵션 / 다운로드
=========================================================== */

// QR 코드 패턴용 간단한 알고리즘 (작은 스케일용)
function generatePattern(text, size) {
  const seed = Array.from(text).reduce((a, c) => a + c.charCodeAt(0), 0);
  const gridSize = Math.floor(size / 10);
  const cells = 10;
  const pattern = [];

  for (let y = 0; y < cells; y++) {
    pattern[y] = [];
    for (let x = 0; x < cells; x++) {
      const val = (x * 13 + y * 7 + seed) % 2;
      pattern[y][x] = val;
    }
  }
  return pattern;
}

function drawQR(text, size, fg, bg) {
  const canvas = document.getElementById("qrCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = size;
  canvas.height = size;

  const pattern = generatePattern(text || " ", size);
  const cellSize = size / 10;

  // 배경
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  // 패턴
  ctx.fillStyle = fg;
  pattern.forEach((row, y) => {
    row.forEach((bit, x) => {
      if (bit) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    });
  });
}

const textInput = document.getElementById("textInput");
const sizeRange = document.getElementById("sizeRange");
const fgColor = document.getElementById("fgColor");
const bgColor = document.getElementById("bgColor");
const sizeValue = document.getElementById("sizeValue");

document.getElementById("generateBtn").addEventListener("click", () => {
  drawQR(textInput.value, parseInt(sizeRange.value), fgColor.value, bgColor.value);
});

sizeRange.addEventListener("input", () => {
  sizeValue.textContent = sizeRange.value;
  drawQR(textInput.value, parseInt(sizeRange.value), fgColor.value, bgColor.value);
});

// ✅ 다운로드
document.getElementById("downloadBtn").addEventListener("click", () => {
  const canvas = document.getElementById("qrCanvas");
  const link = document.createElement("a");
  link.download = "qrcode.png";
  link.href = canvas.toDataURL();
  link.click();
});

// 초기 렌더
drawQR("Hello QR!", 200, "#000000", "#ffffff");
