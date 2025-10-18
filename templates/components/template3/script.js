// Template: Components 03 - Buttons and Inputs
// 기능: 1. 로딩 버튼 상태 토글, 2. 실시간 입력 유효성 검사 피드백

console.log('Components Template 03 Script Loaded (버튼/입력 필드).');

// 1. 로딩 버튼 기능 (Loading Button)
const loadingBtn = document.querySelector('.loading-btn');

loadingBtn?.addEventListener('click', () => {
    // 버튼 클릭 시 로딩 상태로 전환
    loadingBtn.classList.add('loading');
    loadingBtn.innerHTML = ''; // 텍스트를 숨기고 CSS ::before로 대체
    
    console.log('Button: Loading state activated.');

    // 3초 후 완료 상태로 복귀 모킹
    setTimeout(() => {
        loadingBtn.classList.remove('loading');
        // 아이콘과 텍스트 복구
        loadingBtn.innerHTML = '<i class="fas fa-save"></i> 저장하기'; 
        console.log('Button: Loading state deactivated.');
    }, 3000);
});


// 2. 실시간 입력 유효성 검사 (Real-time Input Validation)
const emailInput = document.getElementById('emailInput');
const emailGroup = document.getElementById('emailGroup');

/**
 * 간단한 이메일 정규식 검사
 */
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateEmail() {
    const email = emailInput.value.trim();
    
    // 입력이 비어있으면 초기 상태로 복귀
    if (email === '') {
        emailGroup.classList.remove('valid', 'invalid');
        return;
    }

    if (isValidEmail(email)) {
        emailGroup.classList.remove('invalid');
        emailGroup.classList.add('valid');
        console.log('Email is valid.');
    } else {
        emailGroup.classList.remove('valid');
        emailGroup.classList.add('invalid');
        console.log('Email is invalid.');
    }
}

// 입력 시마다 유효성 검사 실행
emailInput?.addEventListener('input', validateEmail);


// 3. 폼 제출 시 최종 확인
const form = document.getElementById('validationForm');

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // 이메일 입력 유효성 검사를 한 번 더 실행
    validateEmail();
    
    // 다른 유효성 검사 로직이 여기에 추가됩니다.
    
    if (emailGroup.classList.contains('valid')) {
        alert('폼 데이터가 유효하여 제출을 처리합니다.');
        console.log('Form submission successful (Mock).');
        // 실제 서버 전송 로직
    } else {
        alert('유효하지 않은 입력 필드가 있습니다. 확인해주세요.');
        console.log('Form submission failed due to validation errors.');
    }
});