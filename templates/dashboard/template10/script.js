/* ===========================================================
   🧠 칸반 대시보드 JS
   - drag & drop 구현
   - 카드 이동 시 시각적 효과
=========================================================== */

const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".kanban-list");

let draggedCard = null;

// ✅ 드래그 시작
cards.forEach(card => {
  card.addEventListener("dragstart", () => {
    draggedCard = card;
    setTimeout(() => card.classList.add("hidden"), 0);
  });

  // ✅ 드래그 종료
  card.addEventListener("dragend", () => {
    card.classList.remove("hidden");
    draggedCard = null;
  });
});

// ✅ 드롭 영역(리스트) 처리
lists.forEach(list => {
  list.addEventListener("dragover", e => {
    e.preventDefault(); // 기본 동작 방지
    list.classList.add("drag-over");
  });

  list.addEventListener("dragleave", () => {
    list.classList.remove("drag-over");
  });

  list.addEventListener("drop", () => {
    list.classList.remove("drag-over");
    if (draggedCard) list.appendChild(draggedCard);
  });
});
