/* ===========================================================
   🖼️ 이미지 압축기 JS
   - canvas로 이미지 리사이즈 및 품질 조정
   - 원본 용량과 비교하여 효율적인 압축 제공
=========================================================== */

const input = document.getElementById("imageInput");
const qualityRange = document.getElementById("qualityRange");
const qualityValue = document.getElementById("qualityValue");
const originalImg = document.getElementById("originalImg");
const compressedImg = document.getElementById("compressedImg");
const downloadBtn = document.getElementById("downloadBtn");

let originalFile = null;
let compressedData = null;

// ✅ 품질 슬라이더 변경 시 값 표시
qualityRange.addEventListener("input", () => {
  qualityValue.textContent = qualityRange.value;
  if (originalFile) compressImage();
});

// ✅ 이미지 업로드
input.addEventListener("change", (e) => {
  originalFile = e.target.files[0];
  if (!originalFile) return;
  
  const reader = new FileReader();
  reader.onload = (ev) => {
    originalImg.src = ev.target.result;
    compressImage();
  };
  reader.readAsDataURL(originalFile);
});

// ✅ 용량 단위 변환
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// ✅ 압축 처리
function compressImage() {
  const img = new Image();
  img.src = originalImg.src;
  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    // 원본이 너무 크면 최대 해상도 제한 (선택 사항, 여기서는 원본 유지)
    canvas.width = img.width;
    canvas.height = img.height;
    
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    const quality = parseInt(qualityRange.value) / 100;
    
    // MIME 타입을 원본에 맞추거나 jpeg로 고정
    // PNG는 toDataURL에서 품질 옵션을 무시하므로 jpeg로 변환해야 압축이 됨
    compressedData = canvas.toDataURL("image/jpeg", quality);
    compressedImg.src = compressedData;

    // 용량 비교 표시
    const originalSize = originalFile.size;
    const compressedSize = Math.round((compressedData.length - 'data:image/jpeg;base64,'.length) * 3 / 4);
    
    document.getElementById("originalSize").textContent = formatBytes(originalSize);
    document.getElementById("compressedSize").textContent = formatBytes(compressedSize);
    
    if (compressedSize > originalSize && quality > 0.8) {
        document.getElementById("compressedSize").style.color = "red";
    } else {
        document.getElementById("compressedSize").style.color = "green";
    }
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
