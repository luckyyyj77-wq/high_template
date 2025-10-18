// placeholder// Template: Login 03 - Minimalist Background Image
// 기능: 기본 폼 유효성 검사 및 제출 처리

console.log('Login Template 03 Script Loaded (미니멀리스트 스크립트 로드).');

const loginForm = document.getElementById('loginForm3');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email3').value.trim();
    const password = document.getElementById('password3').value.trim();

    let isValid = true;
    
    // 유효성 검사 로직 (Validation logic)
    if (!email || !password) {
        alert('이메일과 비밀번호를 모두 입력해야 합니다.');
        isValid = false;
    }

    if (isValid) {
        console.log('Login Data Submitted (제출 데이터):', { email, password });
        alert('로그인 요청 제출 완료 (Minimalist).');
        // TODO: 실제 서버 통신
    }
});