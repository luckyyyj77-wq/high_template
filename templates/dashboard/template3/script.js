// Template: Dashboard 03 - Full-Width Data Table
// 기능: 1. 테이블 필터링 (상태, 검색), 2. 테이블 정렬 (Mocking)

console.log('Dashboard Template 03 Script Loaded (데이터 테이블).');

const tableBody = document.getElementById('dataTableBody');
const statusFilter = document.getElementById('statusFilter');
const searchInput = document.getElementById('searchInput');
const sortableHeaders = document.querySelectorAll('.data-table th.sortable');

// 1. 테이블 필터링 (Status Filter and Search)
function filterTable() {
    const selectedStatus = statusFilter.value;
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    document.querySelectorAll('#dataTableBody tr').forEach(row => {
        const rowStatus = row.getAttribute('data-status');
        const rowText = row.textContent.toLowerCase();
        
        // 상태 필터 조건
        const statusMatch = selectedStatus === 'all' || rowStatus === selectedStatus;
        
        // 검색어 필터 조건 (주문 번호, 고객명 등 전체 텍스트 검색)
        const searchMatch = rowText.includes(searchTerm);
        
        // 두 조건 모두 만족 시 표시
        if (statusMatch && searchMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    
    console.log(`Table Filtered. Status: ${selectedStatus}, Search: ${searchTerm}`);
}

statusFilter.addEventListener('change', filterTable);
searchInput.addEventListener('input', filterTable);


// 2. 테이블 정렬 기능 (Mocking Sort)
sortableHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const column = header.getAttribute('data-column');
        
        // 현재 정렬 상태 확인: asc, desc, 또는 없음
        let currentSort = header.classList.contains('asc') ? 'asc' : 
                          header.classList.contains('desc') ? 'desc' : 'none';
                          
        let newSort;

        // 새로운 정렬 상태 결정
        if (currentSort === 'asc') {
            newSort = 'desc';
        } else if (currentSort === 'desc') {
            // 정렬 해제 또는 기본 정렬로 복귀를 원할 경우 'none' 설정
            newSort = 'asc'; 
        } else {
            newSort = 'asc';
        }

        // 모든 헤더의 활성/정렬 클래스 초기화
        sortableHeaders.forEach(h => {
            h.classList.remove('active', 'asc', 'desc');
            // 아이콘 초기화 (i 태그의 클래스 변경)
            const icon = h.querySelector('i');
            if (icon) icon.className = 'fas fa-sort';
        });

        // 클릭된 헤더에 새 정렬 상태 적용
        header.classList.add('active', newSort);
        const icon = header.querySelector('i');
        if (icon) {
            icon.className = `fas fa-sort-${newSort === 'asc' ? 'up' : 'down'}`;
        }
        
        // TODO: 여기서 실제 DOM/데이터 정렬 로직 구현
        mockSortData(column, newSort);
    });
});

// 정렬 Mocking 함수
function mockSortData(column, direction) {
    console.log(`Sorting by ${column} in ${direction.toUpperCase()} order.`);
    // 실제 데이터 정렬은 복잡하므로, 여기서는 콘솔 로그로 대체합니다.
    // 실제 구현 시: 
    // 1. Array.from(tableBody.querySelectorAll('tr')) 로 행 데이터를 배열로 변환
    // 2. 배열을 기준 컬럼 값과 정렬 방향에 따라 sort()
    // 3. 정렬된 배열을 다시 DOM에 appendChild로 추가하여 테이블 순서 변경
}

// 초기 로드 시 필터 적용 (필요시)
window.addEventListener('load', () => {
    // 사이드바 토글 기능 (대시보드 01/02와 동일하게)
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle.addEventListener('click', () => {
        document.querySelector('.dashboard-container').classList.toggle('sidebar-closed');
    });
    filterTable(); // 초기 테이블 렌더링
});