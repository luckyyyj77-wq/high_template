/* ============================================
   ⚡ Toast / Alert 컴포넌트 JS
   - showAlert(message, type)
   - 자동 사라짐 / 닫기버튼 / 애니메이션
============================================ */

function showAlert(message, type = "info") {
  const container = document.getElementById("toastContainer");

  // 🔹 새 토스트 생성
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">×</button>
  `;

  container.appendChild(toast);

  // 🔹 4초 후 자동 삭제
  setTimeout(() => {
    toast.remove();
  }, 4000);
}
