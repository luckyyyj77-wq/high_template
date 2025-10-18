// Template: Components 01 - Alerts and Modals
// 기능: 1. 경고창 닫기, 2. 모달 열기/닫기, 3. 토스트 알림 표시

console.log('Components Template 01 Script Loaded (알림/모달).');

// 1. 경고창 닫기 기능 (Dismiss Alert)
document.querySelectorAll('.alert .close-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        // data-dismiss="alert" 속성을 가진 버튼을 찾음
        if (event.target.getAttribute('data-dismiss') === 'alert') {
            const alertElement = event.target.closest('.alert');
            if (alertElement) {
                alertElement.style.opacity = '0';
                // 애니메이션 후 DOM에서 제거 (선택 사항)
                setTimeout(() => alertElement.remove(), 300);
                console.log('Alert dismissed.');
            }
        }
    });
});


// 2. 모달 열기/닫기 기능 (Modal Open/Close)
function toggleModal(modalId, isOpen) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    // 모달을 표시/숨김
    if (isOpen) {
        modal.style.display = 'flex'; // CSS transition을 위해 display를 먼저 설정
        // 다음 프레임에서 opacity와 transform 클래스를 추가
        setTimeout(() => modal.classList.add('open'), 10);
        document.body.style.overflow = 'hidden'; // 스크롤 잠금
        console.log(`Modal ${modalId} opened.`);
    } else {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // 스크롤 잠금 해제
        // 애니메이션 후 display none
        setTimeout(() => modal.style.display = 'none', 300);
        console.log(`Modal ${modalId} closed.`);
    }
}

// 모달 열기 버튼 이벤트 리스너
document.getElementById('openDefaultModal')?.addEventListener('click', () => {
    toggleModal('defaultModal', true);
});
document.getElementById('openConfirmModal')?.addEventListener('click', () => {
    toggleModal('confirmModal', true);
});


// 모달 닫기 이벤트 리스너 (닫기 버튼, Esc 키, 배경 클릭)
document.querySelectorAll('[data-dismiss="modal"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const modal = event.target.closest('.modal-overlay');
        if (modal) {
            toggleModal(modal.id, false);
        }
    });
});

// 배경 클릭 시 닫기
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) { // 배경을 정확히 클릭했는지 확인
            toggleModal(overlay.id, false);
        }
    });
});

// Esc 키로 닫기
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        // 열려있는 모달 찾기
        document.querySelectorAll('.modal-overlay.open').forEach(modal => {
            toggleModal(modal.id, false);
        });
    }
});


// 3. 토스트 알림 표시 기능 (Show Toast Notification)
/**
 * 토스트 알림을 생성하고 표시 후 지정된 시간 후에 제거합니다.
 * @param {string} message - 토스트에 표시할 메시지
 * @param {string} type - 'success' 또는 'warning'
 * @param {number} duration - 표시할 시간 (밀리초)
 */
function showToast(message, type, duration = 4000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    // 아이콘 설정
    const iconClass = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle';
    
    // 토스트 HTML 생성
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="${iconClass}"></i> ${message}`;
    
    // 컨테이너에 추가
    container.appendChild(toast);
    
    // DOM 업데이트 후 애니메이션 시작
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // 지정된 시간 후에 제거
    setTimeout(() => {
        toast.classList.remove('show');
        // 애니메이션 후 DOM에서 제거
        setTimeout(() => toast.remove(), 300);
        console.log(`Toast (${type}) dismissed.`);
    }, duration);
}

// 토스트 버튼 이벤트 리스너
document.getElementById('showToastSuccess')?.addEventListener('click', () => {
    showToast('성공적으로 작업을 완료했습니다!', 'success');
});
document.getElementById('showToastWarning')?.addEventListener('click', () => {
    showToast('입력된 내용에 문제가 있습니다. 확인해주세요.', 'warning', 6000);
});