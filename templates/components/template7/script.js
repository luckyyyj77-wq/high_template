/* ===========================================================
   🧩 아코디언 JS
   - 클릭 시 열림/닫힘 토글
   - 다른 항목 닫히게 하거나 독립 모드 설정 가능
=========================================================== */

const items = document.querySelectorAll(".accordion-item");
const singleOpen = true; // true면 하나만 열림, false면 여러 개 가능

items.forEach(item => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    if (singleOpen) {
      // 다른 모든 항목 닫기
      items.forEach(i => i !== item && i.classList.remove("active"));
    }
    item.classList.toggle("active");
  });
});
