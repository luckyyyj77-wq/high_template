// placeholder// Template: Login 04 - Social Login Tabs
// 기능: 탭 전환 (Toggle) 및 폼 유효성 검사

console.log('Login Template 04 Script Loaded (소셜 탭 스크립트 로드).');

// 탭 전환 기능 (Tab Toggle Functionality)
const tabButtons = document.querySelectorAll('.tab-buttons button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTabId = button.getAttribute('data-tab');

        // 1. 버튼 활성화 상태 업데이트
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 2. 콘텐츠 표시/숨기기
        tabContents.forEach(content => {
            if (content.id === targetTabId) {
                content.classList.remove('hidden');
                content.classList.add('active');
            } else {
                content.classList.add('hidden');
                content.classList.remove('active');
            }
        });
    });
});

// 이메일 폼 제출 처리 (Email Form Submission)
const emailForm = document.getElementById('loginForm4-email');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 이메일 폼 유효성 검사 로직 (Login 01/02와 동일)
    const email = document.getElementById('email4').value.trim();
    const password = document.getElementById('password4').value.trim();
    
    if (email && password) {
        console.log('Email Login Submitted:', { email, password });
        alert('이메일/PW 로그인 요청 제출 완료.');
    } else {
        alert('이메일과 비밀번호를 입력해주세요.');
    }
});

// 소셜 버튼 클릭 처리 (Social Button Click Handling)
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const socialType = btn.classList[1]; // 예: 'google', 'kakao'
        console.log(`${socialType.toUpperCase()} Login Initiated (소셜 로그인 시작)`);
        alert(`${socialType.toUpperCase()} 로그인 페이지로 이동합니다.`);
        // TODO: 실제 소셜 로그인 리다이렉션 로직 구현
    });
});