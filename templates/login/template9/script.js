const openBtn = document.getElementById("openLogin");
const closeBtn = document.getElementById("closeLogin");
const modal = document.getElementById("modal");
const form = document.getElementById("modalForm");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-backdrop")) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const pwd = document.getElementById("password").value.trim();
  if (!email || !pwd) return alert("이메일과 비밀번호를 입력하세요.");
  if (pwd.length < 6) return alert("비밀번호는 6자 이상이어야 합니다.");
  alert("로그인 성공 (모달형 시뮬레이션)");
  form.reset();
});
