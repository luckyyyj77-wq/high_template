/* =========================================
   📘 기본 주문서 JS
   - 필수항목 검증
   - 주문 확인 알림
========================================= */

const form = document.getElementById("orderForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 제출 막기

  // 입력값 수집
  const receiver = document.getElementById("receiver").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const quantity = parseInt(document.getElementById("quantity").value, 10);

  // 간단한 검증
  if (!receiver || !phone || !address) {
    alert("모든 배송 정보를 입력해주세요.");
    return;
  }
  if (quantity < 1) {
    alert("수량은 1개 이상이어야 합니다.");
    return;
  }

  // 결제 수단 확인
  const payment = form.payment.value;
  const agree = document.getElementById("agree").checked;

  if (!agree) {
    alert("주문 내용에 동의해야 합니다.");
    return;
  }

  // 최종 확인 알림
  alert(`✅ 주문 완료!
상품: ${document.getElementById("productName").value}
수량: ${quantity}개
결제 방식: ${payment}`);
  
  form.reset();
});
