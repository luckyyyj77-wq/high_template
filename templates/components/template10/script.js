/* ===========================================================
   🖼️ 카드 그리드 JS
   - 버튼 클릭 시 메시지 출력 (테스트용)
=========================================================== */

document.querySelectorAll(".card-overlay button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 방지
    const title = e.target.closest(".card-overlay").querySelector("h2").textContent;
    alert(`${title} 상세 페이지로 이동합니다.`);
  });
});
