  document.getElementById("darkForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("darkEmail").value.trim();
  const pwd = document.getElementById("darkPwd").value.trim();

  if (!email || !pwd) return alert("이메일과 비밀번호를 입력하세요.");
  if (pwd.length < 6) return alert("비밀번호는 6자 이상이어야 합니다.");

  alert("로그인 성공 (다크 버전)");
});
