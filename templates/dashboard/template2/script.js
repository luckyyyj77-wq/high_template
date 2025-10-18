// Template: Dashboard 02 - Light/Dark Mode Toggle
// 기능: 1. 테마(라이트/다크 모드) 전환 기능

console.log('Dashboard Template 02 Script Loaded (모드 전환 대시보드).');

const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;
const currentThemeDisplay = document.getElementById('currentTheme');

// 1. 테마 전환 함수 (Toggle Theme)
function toggleTheme() {
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // 로컬 스토리지에 사용자 테마 설정 저장
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // 버튼 및 디스플레이 텍스트 업데이트
    if (isDarkMode) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> 라이트 모드 전환';
        currentThemeDisplay.textContent = '다크 모드';
        console.log('Theme changed to Dark Mode.');
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> 다크 모드 전환';
        currentThemeDisplay.textContent = '라이트 모드';
        console.log('Theme changed to Light Mode.');
    }
}

// 2. 초기 로드 시 테마 설정 (Load saved theme or default to light)
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // 저장된 테마가 'dark'이면 다크 모드 적용
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        // 초기 버튼 텍스트 설정 (toggleTheme 함수 내부 로직 재실행 없이)
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> 라이트 모드 전환';
        currentThemeDisplay.textContent = '다크 모드';
    } else {
         // 초기 버튼 텍스트 설정 (라이트 모드 기본)
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> 다크 모드 전환';
        currentThemeDisplay.textContent = '라이트 모드';
    }
}

// 이벤트 리스너 등록
themeToggleBtn.addEventListener('click', toggleTheme);

// 페이지 로드 시 테마 로드
window.addEventListener('load', loadTheme);