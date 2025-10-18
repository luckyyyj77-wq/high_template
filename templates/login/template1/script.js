// placeholder// Template: Login 01 - Split Screen Form
// 목적: 간단한 클라이언트 측 폼 유효성 검사 (Form Validation) 및 콘솔 로그

console.log('Login Template 01 Script Loaded. (로그인 템플릿 01 스크립트 로드 완료)');

// 폼 요소 선택 (Select the form element)
const loginForm = document.getElementById('loginForm');

// 폼 제출 이벤트 리스너 등록 (Register form submission event listener)
loginForm.addEventListener('submit', function(event) {
    // 기본 제출 동작 방지 (Prevent default form submission)
    event.preventDefault();

    // 입력 필드 값 가져오기 (Get input field values)
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // 1. 클라이언트 측 유효성 검사 (Client-side validation)
    let isValid = true;

    // 이메일 유효성 검사 (Email validation check)
    if (!email) {
        alert('이메일 주소를 입력해주세요. (Please enter your email address.)');
        emailInput.focus(); // 해당 필드에 포커스 이동
        isValid = false;
    } else if (!isValidEmail(email)) { // 간단한 이메일 형식 검사 함수 호출
        alert('유효하지 않은 이메일 형식입니다. (Invalid email format.)');
        emailInput.focus();
        isValid = false;
    }

    // 비밀번호 유효성 검사 (Password validation check)
    if (isValid && !password) {
        alert('비밀번호를 입력해주세요. (Please enter your password.)');
        passwordInput.focus();
        isValid = false;
    } else if (isValid && password.length < 6) {
        alert('비밀번호는 최소 6자 이상이어야 합니다. (Password must be at least 6 characters long.)');
        passwordInput.focus();
        isValid = false;
    }

    // 2. 유효성 검사 통과 시 처리 (Handle successful validation)
    if (isValid) {
        // 서버로 전송할 데이터 객체 생성 (Create data object to send to server)
        const loginData = {
            email: email,
            password: password 
            // 실제 배포 시 비밀번호는 암호화되어 전송되어야 함 (For production, password must be sent securely)
        };

        // 개발 목적으로 콘솔에 데이터 출력 (Log data to console for development)
        console.log('Login Data Submitted (로그인 데이터 제출됨):', loginData);

        // TODO: 여기서 실제 AJAX 호출 (fetch API 또는 XMLHttpRequest)을 사용하여 
        // 서버에 로그인 요청을 보냅니다. (Actual AJAX call to server goes here.)
        // 예: fetch('/api/login', { method: 'POST', body: JSON.stringify(loginData), headers: {'Content-Type': 'application/json'} })
        
        // 성공 메시지 출력 (Display success message)
        alert('로그인 요청이 성공적으로 전송되었습니다. (Login request sent successfully.)');
        
        // 실제 페이지 이동 (Actual page redirection after successful login)
        // window.location.href = '/dashboard';
    }
});

/**
 * 이메일 형식을 간단하게 검사하는 함수 (Simple email format validation function)
 * @param {string} email - 검사할 이메일 문자열 (Email string to validate)
 * @returns {boolean} - 유효성 여부 (True if valid, false otherwise)
 */
function isValidEmail(email) {
    // 간단한 정규식 패턴 (Simple regex pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// TODO: JS 기능 중 '토글 (Toggle)' 기능을 추가해야 한다면, 
// 예: 비밀번호 보이기/숨기기 버튼을 추가하고 이 영역에 로직을 구현합니다.