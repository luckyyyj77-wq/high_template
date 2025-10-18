/* ===========================================================
   📊 정렬 가능한 표 JS
   - 헤더 클릭 시 정렬 토글
   - 데이터 타입(string/number)에 맞게 정렬
=========================================================== */

document.querySelectorAll("table.sortable").forEach(table => {
  const headers = table.querySelectorAll("th");

  headers.forEach((th, index) => {
    th.addEventListener("click", () => {
      const type = th.dataset.type || "string";
      const current = th.classList.contains("sorted-asc") ? "asc" : 
                      th.classList.contains("sorted-desc") ? "desc" : null;

      // 기존 모든 정렬 제거
      headers.forEach(h => h.classList.remove("sorted-asc", "sorted-desc"));

      // 새로운 정렬 방향 결정
      const direction = current === "asc" ? "desc" : "asc";
      th.classList.add(direction === "asc" ? "sorted-asc" : "sorted-desc");

      // 행 가져오기
      const rows = Array.from(table.tBodies[0].rows);

      // 정렬 실행
      rows.sort((a, b) => {
        const valA = a.cells[index].innerText.trim();
        const valB = b.cells[index].innerText.trim();

        if (type === "number") {
          return direction === "asc" ? valA - valB : valB - valA;
        } else {
          return direction === "asc"
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }
      });

      // 다시 테이블에 붙이기
      rows.forEach(r => table.tBodies[0].appendChild(r));
    });
  });
});
