// Template: Dashboard 01 - Fixed Sidebar Layout
// 기능: 1. 사이드바 토글 (모바일 대응), 2. 서브메뉴 토글

console.log('Dashboard Template 01 Script Loaded (기본 대시보드 스크립트 로드).');

// 1. 사이드바 토글 기능 (Sidebar Toggle)
const sidebarToggle = document.getElementById('sidebarToggle');
const dashboardContainer = document.querySelector('.dashboard-container');
const sidebar = document.getElementById('sidebar');

if (sidebarToggle && dashboardContainer && sidebar) {
    // 초기 로드 시 모바일 환경이면 사이드바를 '닫힌' 상태로 설정
    if (window.innerWidth <= 768) {
        dashboardContainer.classList.add('sidebar-closed');
    }

    sidebarToggle.addEventListener('click', () => {
        // 'sidebar-closed' 클래스를 토글하여 CSS로 레이아웃 변경 및 모바일에서 사이드바 표시/숨김
        dashboardContainer.classList.toggle('sidebar-closed');
        console.log(`Sidebar toggled. Status: ${dashboardContainer.classList.contains('sidebar-closed') ? 'Closed' : 'Open'}`);
    });
}


// 2. 서브메뉴 토글 기능 (Submenu Toggle)
const submenuToggles = document.querySelectorAll('.submenu-toggle');

submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
        event.preventDefault(); // 링크 이동 방지
        const parentLi = toggle.closest('.nav-item');
        
        if (parentLi) {
            // 현재 메뉴의 'open' 클래스 토글
            parentLi.classList.toggle('open');
            
            const submenu = parentLi.querySelector('.submenu');
            if (submenu) {
                // 서브메뉴가 열릴 때 애니메이션 효과 (높이 조절)를 줄 수 있으나, 여기서는 단순 토글
                // submenu.style.display = parentLi.classList.contains('open') ? 'block' : 'none';
                console.log(`Submenu for ${toggle.textContent.trim()} toggled.`);
            }
            
            // 다른 서브메뉴가 열려있다면 닫기 (선택적 기능)
            document.querySelectorAll('.nav-item.has-submenu.open').forEach(otherLi => {
                if (otherLi !== parentLi) {
                    otherLi.classList.remove('open');
                    // otherLi.querySelector('.submenu').style.display = 'none';
                }
            });
        }
    });
});


// 3. 임시 데이터 로딩 (Mock Data Initialization)
// 실제 서버 연결 시 이 영역은 API 호출로 대체됩니다.
function loadMockData() {
    // 통계 카드 데이터 업데이트 예시
    document.querySelector('.stat-card:nth-child(1) .value').textContent = "2,500,000,000원";
    
    // 차트 섹션: 차트 라이브러리 로딩 모킹
    const chartSection = document.querySelector('.chart-section h3');
    chartSection.textContent += ' (Data Loaded)';
    
    console.log('Mock Data Loaded successfully.');
}

window.addEventListener('load', loadMockData);