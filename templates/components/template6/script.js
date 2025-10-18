/* ===========================================================
   🪟 모달 JS
   - 열기 / 닫기 / ESC 키 닫기
   - 확인, 취소 버튼 이벤트
=========================================================== */

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

// ✅ 모달 열기
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

// ✅ 닫기 공통 함수
function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// 닫기 버튼 / 취소 버튼 / ESC 키
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);
window.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// ✅ 확인 버튼 클릭 시 동작
confirmBtn.addEventListener("click", () => {
  alert("확인되었습니다!");
  closeModal();
});

// ✅ 배경 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) closeModal();
});
