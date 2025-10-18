/* ===========================================================
   🗒️ 미니 메모장 JS
   - 로컬 자동저장 / 삭제 / 다크모드
=========================================================== */

const noteArea = document.getElementById("noteArea");
const status = document.getElementById("status");
const clearBtn = document.getElementById("clearNotes");
const themeBtn = document.getElementById("toggleTheme");

function saveNote() {
  localStorage.setItem("myNote", noteArea.value);
  status.textContent = "💾 자동 저장됨";
}

function loadNote() {
  const saved = localStorage.getItem("myNote");
  if (saved) noteArea.value = saved;
}

function clearNotes() {
  if (confirm("모든 메모를 삭제하시겠습니까?")) {
    localStorage.removeItem("myNote");
    noteArea.value = "";
    status.textContent = "🗑️ 삭제됨";
  }
}

// ✅ 테마 관리
function loadTheme() {
  const theme = localStorage.getItem("theme") || "light";
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
  themeBtn.textContent = theme === "dark" ? "🌞" : "🌙";
}
function toggleTheme() {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  loadTheme();
}

// 이벤트
noteArea.addEventListener("input", saveNote);
clearBtn.addEventListener("click", clearNotes);
themeBtn.addEventListener("click", toggleTheme);

// 초기 실행
loadNote();
loadTheme();
