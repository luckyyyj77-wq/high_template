document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(!email || !password){
        alert("이메일과 비밀번호를 모두 입력하세요.");
        return;
    }

    if(password.length < 6){
        alert("비밀번호는 6자 이상이어야 합니다.");
        return;
    }

    alert("로그인 성공! (시뮬레이션)");
    this.reset();
});
