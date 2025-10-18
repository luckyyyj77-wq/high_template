/* ===========================================================
   ✍️ Markdown Preview JS
   - 실시간 렌더링 / HTML 복사
   - 간단한 문법 변환 (헤더, 리스트, 강조, 코드 등)
=========================================================== */

const input = document.getElementById("markdownInput");
const preview = document.getElementById("preview");
const copyBtn = document.getElementById("copyBtn");

function renderMarkdown(text) {
  // 순서 중요: 큰 패턴 먼저
  return text
    .replace(/^###### (.*$)/gim, "<h6>$1</h6>")
    .replace(/^##### (.*$)/gim, "<h5>$1</h5>")
    .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^\s*[-*+] (.*)/gim, "<ul><li>$1</li></ul>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/`{3}([\s\S]*?)`{3}/gim, "<pre><code>$1</code></pre>")
    .replace(/`([^`]+)`/gim, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, "<a href='$2' target='_blank'>$1</a>")
    .replace(/\n$/gim, "<br>");
}

// ✅ 실시간 입력 이벤트
input.addEventListener("input", () => {
  preview.innerHTML = renderMarkdown(input.value);
});

// ✅ 복사 버튼
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(preview.innerHTML);
  alert("HTML 코드가 복사되었습니다!");
});

// 초기값 예시
input.value = `# 마크다운 미리보기

**굵게**, *기울임*, \`코드\`

\`\`\`
console.log("Hello Markdown!");
\`\`\`

- 리스트 1
- 리스트 2

[링크 예시](https://example.com)
`;
preview.innerHTML = renderMarkdown(input.value);
