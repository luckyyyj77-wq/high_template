// Template: Components 02 - Navigation and Tabs
// 기능: 1. 드롭다운 메뉴 토글, 2. 콘텐츠 탭 전환, 3. 모바일 메뉴 토글

console.log('Components Template 02 Script Loaded (네비게이션/탭).');

// 1. 드롭다운 메뉴 토글 (Dropdown Menu Toggle)
const dropdownToggle = document.getElementById('userDropdown');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownItem = document.querySelector('.dropdown');

dropdownToggle?.addEventListener('click', (event) => {
    event.preventDefault(); // 링크 이동 방지
    dropdownItem.classList.toggle('open');
    console.log('Dropdown toggled.');
});

// 드롭다운 외부 클릭 시 닫기
document.addEventListener('click', (event) => {
    if (!dropdownItem.contains(event.target) && dropdownItem.classList.contains('open')) {
        dropdownItem.classList.remove('open');
        console.log('Dropdown closed by outside click.');
    }
});


// 2. 콘텐츠 탭 전환 기능 (Tab Switching)
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const targetTabId = event.target.getAttribute('data-tab');

        // 버튼 상태 업데이트
        tabButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // 콘텐츠 패널 전환
        tabPanes.forEach(pane => {
            if (pane.id === targetTabId) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });
        console.log(`Switched to tab: ${targetTabId}`);
    });
});


// 3. 모바일 메뉴 토글 (Mobile Menu Toggle)
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbarNav = document.querySelector('.navbar-nav');

mobileMenuToggle?.addEventListener('click', () => {
    navbarNav.classList.toggle('mobile-open');
    console.log('Mobile menu toggled.');
});