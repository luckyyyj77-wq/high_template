// Template: E-commerce 01 - Product Grid with Filter
// 기능: 1. 모바일 필터 사이드바 토글, 2. 가격 범위 슬라이더 값 표시

console.log('E-commerce Template 01 Script Loaded (제품 그리드 스크립트 로드).');

// 1. 모바일 필터 토글 기능 (Mobile Filter Toggle)
const filterToggleBtn = document.querySelector('.filter-toggle-btn');
const sidebarFilter = document.getElementById('sidebarFilter');

if (filterToggleBtn && sidebarFilter) {
    filterToggleBtn.addEventListener('click', () => {
        // 'open' 클래스 토글하여 CSS에서 사이드바 표시/숨김
        sidebarFilter.classList.toggle('open');
        
        // 버튼 텍스트 변경
        if (sidebarFilter.classList.contains('open')) {
            filterToggleBtn.innerHTML = '<i class="fas fa-times"></i> 닫기';
        } else {
            filterToggleBtn.innerHTML = '<i class="fas fa-filter"></i> 필터 열기';
        }
    });

    // 필터 적용 버튼 클릭 시 모바일에서 사이드바 닫기 (UX 개선)
    const applyFilterBtn = document.querySelector('.apply-filter-btn');
    applyFilterBtn.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebarFilter.classList.remove('open');
            filterToggleBtn.innerHTML = '<i class="fas fa-filter"></i> 필터 열기';
        }
        // TODO: 여기서 실제 필터링 로직 구현 (AJAX 호출 또는 DOM 필터링)
        console.log("Filter Applied (필터 적용됨).");
    });
}


// 2. 가격 범위 슬라이더 값 표시 업데이트 (Price Range Slider Update)
const priceRange = document.getElementById('priceRange');
const priceValueSpan = document.getElementById('priceValue');

if (priceRange && priceValueSpan) {
    // 페이지 로드 시 초기 값 설정
    priceValueSpan.textContent = formatCurrency(priceRange.value);

    // 슬라이더 이동 시 값 업데이트
    priceRange.addEventListener('input', (event) => {
        priceValueSpan.textContent = formatCurrency(event.target.value);
        // TODO: 실시간 필터링을 원하면 여기에 필터링 로직 추가
    });
}

/**
 * 숫자를 한국 통화 형식으로 포맷하는 헬퍼 함수 (Helper to format number to Korean currency)
 * @param {string|number} number - 포맷할 숫자
 * @returns {string} - 포맷된 문자열 (예: 300,000원)
 */
function formatCurrency(number) {
    return Number(number).toLocaleString('ko-KR') + '원';
}