// placeholder// Template: Login 06 - Compact Outline Form
// 기능: 기본 폼 유효성 검사 및 제출 처리 + 플로팅 라벨 클래스 관리

console.log('Login Template 06 Script Loaded (컴팩트 아웃라인 스크립트 로드).');

const loginForm = document.getElementById('loginForm6');
const inputs = document.querySelectorAll('.input-group.outline-label input');

// 입력 필드 포커스/블러 이벤트 리스너 추가 (HTML에서 인라인으로 추가됨)
// JS에서 추가하려면 아래 주석 해제 (Better practice)
/*
inputs.forEach(input => {
    // 값이 있거나 포커스 시 'focused' 클래스 추가
    input.addEventListener('focus', () => input.parentNode.classList.add('focused'));
    
    // 포커스 아웃 시 값이 없으면 'focused' 클래스 제거
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentNode.classList.remove('focused');
        }
    });

    // 페이지 로드 시 값이 이미 있는 경우 (예: 브라우저 자동 완성)
    if (input.value) {
        input.parentNode.classList.add('focused');
    }
});
*/

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email6').value.trim();
    const password = document.getElementById('password6').value.trim();

    if (email && password) {
        console.log('Login Data Submitted (제출 데이터):', { email, password });
        alert('컴팩트 아웃라인 폼으로 로그인 요청 제출 완료.');
    } else {
        alert('모든 필드를 입력해야 합니다.');
    }
});