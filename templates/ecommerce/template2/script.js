// placeholder// Template: E-commerce 02 - Product Detail
// 기능: 1. 이미지 갤러리 전환, 2. 옵션 선택, 3. 수량 변경

console.log('E-commerce Template 02 Script Loaded (제품 상세 스크립트 로드).');

// 1. 이미지 갤러리 전환 (Image Gallery Switching)
const mainImage = document.getElementById('mainProductImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // 모든 썸네일에서 active 클래스 제거
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // 클릭된 썸네일에 active 클래스 추가
        thumbnail.classList.add('active');
        
        // 메인 이미지의 src를 클릭된 썸네일의 data-full-src로 변경
        const newSrc = thumbnail.getAttribute('data-full-src');
        mainImage.src = newSrc;
        
        console.log(`Main image updated to: ${newSrc}`);
    });
});

// 2. 옵션 선택 (Option Selection - Color and Size)
// 옵션 선택 버튼에 'selected' 클래스를 토글하여 시각적 피드백 제공
function setupOptionSelection(selector, groupName) {
    const options = document.querySelectorAll(selector);
    
    options.forEach(option => {
        option.addEventListener('click', (event) => {
            // 품절(disabled)된 옵션은 선택 불가
            if (event.target.classList.contains('disabled')) {
                alert(`선택하신 ${groupName} 옵션은 현재 품절입니다.`);
                return;
            }

            // 동일 그룹의 다른 버튼에서 'selected' 클래스 제거
            document.querySelectorAll(selector).forEach(opt => {
                opt.classList.remove('selected');
            });

            // 클릭된 버튼에 'selected' 클래스 추가
            event.target.classList.add('selected');
            
            const selectedValue = event.target.getAttribute('data-option');
            console.log(`${groupName} selected: ${selectedValue}`);
            
            // TODO: 선택된 옵션에 따라 가격이나 재고 업데이트 로직 구현
        });
    });
}

setupOptionSelection('.color-chip', 'Color');
setupOptionSelection('.size-chip', 'Size');


// 3. 수량 변경 (Quantity Adjustment)
const qtyInput = document.getElementById('quantityInput');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');

qtyMinus.addEventListener('click', () => {
    let currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) { // 최소 수량 1
        qtyInput.value = currentQty - 1;
        console.log('Quantity reduced:', qtyInput.value);
        // TODO: 가격 즉시 계산 로직 호출
    }
});

qtyPlus.addEventListener('click', () => {
    let currentQty = parseInt(qtyInput.value);
    // 최대 재고 확인 로직 추가 가능 (예: maxQty = 10)
    qtyInput.value = currentQty + 1;
    console.log('Quantity increased:', qtyInput.value);
    // TODO: 가격 즉시 계산 로직 호출
});


// 4. 장바구니 담기 버튼 이벤트 (Add to Cart Button)
const addToCartBtn = document.querySelector('.add-to-cart-btn');

addToCartBtn.addEventListener('click', () => {
    // 선택된 옵션 및 수량 확인
    const selectedColor = document.querySelector('.color-chip.selected')?.getAttribute('data-option');
    const selectedSize = document.querySelector('.size-chip.selected')?.getAttribute('data-option');
    const quantity = parseInt(qtyInput.value);

    if (!selectedColor || !selectedSize) {
        alert('색상과 사이즈를 모두 선택해주세요.');
        return;
    }

    const cartItem = {
        name: document.querySelector('.product-name').textContent,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: 129000 // 실제 가격 데이터 필요
    };

    console.log('Item added to cart (장바구니 담김):', cartItem);
    alert(`장바구니에 ${quantity}개의 제품이 담겼습니다!`);
    // TODO: 실제 서버 API 호출 또는 로컬 스토리지 업데이트
});