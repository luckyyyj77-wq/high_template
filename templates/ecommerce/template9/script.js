/* ===========================================================
   💰 환불/교환 신청 JS
   - 필수항목 검증
   - 환불/교환 유형에 따라 메시지 출력
=========================================================== */

const form = document.getElementById("refundForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 제출 방지

  const orderNumber = document.getElementById("orderNumber").value.trim();
  const type = form.querySelector("input[name='type']:checked").value;
  const reason = document.getElementById("reason").value.trim();
  const bank = document.getElementById("bank").value.trim();
  const account = document.getElementById("account").value.trim();
  const holder = document.getElementById("holder").value.trim();

  // 필수 입력 검증
  if (!orderNumber || !reason) {
    alert("주문번호와 사유를 입력해주세요.");
    return;
  }

  // 환불일 경우 계좌 정보 필수
  if (type === "refund" && (!bank || !account || !holder)) {
    alert("환불 계좌 정보를 모두 입력해주세요.");
    return;
  }

  // 결과 메시지 표시
  resultBox.classList.remove("hidden");
  resultText.textContent = "신청을 접수 중입니다...";

  setTimeout(() => {
    const typeName = type === "refund" ? "환불" : "교환";
    resultText.textContent = `✅ ${typeName} 신청이 완료되었습니다. 감사합니다!`;
    form.reset();
  }, 1500);
});
