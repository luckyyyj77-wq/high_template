/* ===========================================================
   🖼️ 이미지 압축기 JS
   - canvas로 이미지 리사이즈 및 품질 조정
=========================================================== */

const input = document.getElementById("imageInput");
const qualityRange = document.getElementById("qualityRange");
const qualityValue = document.getElementById("qualityValue");
const originalImg = document.getElementById("originalImg");
const compressedImg = document.getElementById("compressedImg");
const downloadBtn = document.getElementById("downloadBtn");

let originalData = null;
let compressedData = null;

// ✅ 품질 슬라이더 변경 시 값 표시
qualityRange.addEventListener("input", () => {
  qualityValue.textContent = qualityRange.value;
  if (originalData) compressImage();
});

// ✅ 이미지 업로드
input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    originalData = ev.target.result;
    originalImg.src = originalData;
    compressImage();
  };
  reader.readAsDataURL(file);
});

// ✅ 압축 처리
function compressImage() {
  const img = new Image();
  img.src = originalData;
  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const quality = parseInt(qualityRange.value) / 100;
    compressedData = canvas.toDataURL("image/jpeg", quality);
    compressedImg.src = compressedData;
  };
}

// ✅ 다운로드
downloadBtn.addEventListener("click", () => {
  if (!compressedData) return alert("이미지를 먼저 업로드하세요!");
  const link = document.createElement("a");
  link.href = compressedData;
  link.download = "compressed.jpg";
  link.click();
});
