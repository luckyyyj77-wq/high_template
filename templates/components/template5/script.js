/* ============================================================
   🧭 Tab 전환 컴포넌트 JS
   - 클릭 시 활성 탭 전환
   - 슬라이드 전환 효과 포함
=========================================================== */

const tabs = document.querySelectorAll(".tab-buttons button");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // 기존 활성 제거
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    // 새 활성 설정
    tab.classList.add("active");
    const target = tab.dataset.tab;
    document.getElementById(target).classList.add("active");
  });
});
