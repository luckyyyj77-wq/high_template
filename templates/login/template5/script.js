// Template: Login 05 - Brand Focus Pastel
// 기능: 기본 폼 유효성 검사 및 제출 처리

console.log('Login Template 05 Script Loaded (브랜드 강조 스크립트 로드).');

const loginForm = document.getElementById('loginForm5');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email5').value.trim();
    const password = document.getElementById('password5').value.trim();

    if (email && password) {
        console.log('Login Data Submitted (제출 데이터):', { email, password });
        alert('브랜드 강조 폼으로 로그인 요청 제출 완료.');
    } else {
        alert('필수 입력 필드를 모두 채워주세요.');
    }
});