// Template: Dashboard 05 - Kanban Task Management
// 기능: 1. 드래그 앤 드롭 모킹 (Kanban), 2. 작업 수 업데이트

console.log('Dashboard Template 05 Script Loaded (칸반 보드).');

const taskLists = document.querySelectorAll('.task-list');
const taskColumns = document.querySelectorAll('.task-column');

let draggedItem = null;

// 1. 드래그 앤 드롭 로직 (Drag and Drop Mocking)

// 드래그 시작 시
document.querySelectorAll('.task-card').forEach(item => {
    item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => item.classList.add('dragging'), 0); // DOM 이벤트 버블링을 위해 딜레이
    });

    // 드래그 종료 시
    item.addEventListener('dragend', () => {
        draggedItem.classList.remove('dragging');
        draggedItem = null;
        updateTaskCounts(); // 드롭 후 최종 카운트 업데이트
    });
});


taskLists.forEach(list => {
    // 드래그 요소가 목록 위로 진입
    list.addEventListener('dragover', (e) => {
        e.preventDefault(); // 드롭 허용 (필수)
        const draggingItem = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(list, e.clientY);

        if (afterElement == null) {
            list.appendChild(draggingItem); // 맨 아래에 삽입
        } else {
            list.insertBefore(draggingItem, afterElement); // 다음 요소 앞에 삽입
        }
    });

    // 드래그 요소가 목록 경계 진입 (시각적 피드백)
    list.addEventListener('dragenter', (e) => {
        e.preventDefault();
        list.classList.add('drag-over');
    });

    // 드래그 요소가 목록 경계 벗어남
    list.addEventListener('dragleave', () => {
        list.classList.remove('drag-over');
    });

    // 드롭 이벤트 (드래그 오버에서 이미 삽입했으므로, 여기서는 상태 업데이트만)
    list.addEventListener('drop', () => {
        list.classList.remove('drag-over');
        if (draggedItem) {
            const newStatus = list.closest('.task-column').getAttribute('data-status');
            
            // 드롭된 작업의 상태 업데이트 (Mocking)
            draggedItem.closest('.task-column').setAttribute('data-status', newStatus); 
            console.log(`Task moved to: ${newStatus}`);
            // TODO: 여기서 서버에 작업 상태 업데이트 API 호출
        }
    });
});

// 드래그 위치 계산 헬퍼 함수
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task-card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: -Infinity }).element;
}


// 2. 작업 수 업데이트 (Task Count Update)
function updateTaskCounts() {
    taskColumns.forEach(column => {
        const list = column.querySelector('.task-list');
        const countDisplay = column.querySelector('.task-count');
        
        // 작업 카드 개수를 세어 업데이트
        const count = list.querySelectorAll('.task-card').length;
        countDisplay.textContent = count;
    });
}

// 초기 로드 시 카운트 업데이트
window.addEventListener('load', updateTaskCounts);

// 새 작업 추가 버튼 모킹
document.querySelector('.add-task-btn').addEventListener('click', () => {
    alert('새 작업 추가 모달/페이지를 띄웁니다.');
    console.log('New Task button clicked.');
});