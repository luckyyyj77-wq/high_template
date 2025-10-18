/* ===========================================================
   🔍 텍스트 분석기 JS
   - 실시간 분석 / 복사 / 초기화
=========================================================== */

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");
const spaceCount = document.getElementById("spaceCount");
const avgLength = document.getElementById("avgLength");

// ✅ 텍스트 분석 함수
function analyzeText() {
  const text = textInput.value.trim();

  const chars = text.length;
  const words = text ? text.split(/\s+/).length : 0;
  const sentences = text ? text.split(/[.!?]+/).filter(s => s.trim() !== "").length : 0;
  const spaces = (text.match(/\s/g) || []).length;

  let avg = 0;
  if (words > 0) {
    const totalWordLength = text.replace(/\s+/g, "").length;
    avg = (totalWordLength / words).toFixed(2);
  }

  charCount.textContent = chars;
  wordCount.textContent = words;
  sentenceCount.textContent = sentences;
  spaceCount.textContent = spaces;
  avgLength.textContent = avg;
}

// ✅ 실시간 입력 이벤트
textInput.addEventListener("input", analyzeText);

// ✅ 복사 기능
document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(textInput.value);
  alert("텍스트가 복사되었습니다!");
});

// ✅ 초기화
document.getElementById("clearBtn").addEventListener("click", () => {
  textInput.value = "";
  analyzeText();
});

// 초기 실행
analyzeText();
