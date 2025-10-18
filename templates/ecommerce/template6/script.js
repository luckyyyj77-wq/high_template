/* ===========================================================
   🎟️ 쿠폰 적용 JS
   - 입력된 쿠폰 코드 확인
   - 유효한 경우: 할인율 표시
   - 잘못된 경우: 오류 메시지 표시
=========================================================== */

const form = document.getElementById("couponForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// ✅ 간단한 쿠폰 목록 (시뮬레이션용)
const coupons = {
  "SAVE10": 10,   // 10% 할인
  "FREESHIP": 0,  // 무료배송
  "VIP25": 25     // 25% 할인
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const code = document.getElementById("couponCode").value.trim().toUpperCase();

  if (!code) {
    alert("쿠폰 코드를 입력하세요.");
    return;
  }

  // 결과 영역 표시
  resultBox.classList.remove("hidden");
  resultText.textContent = "쿠폰을 확인 중입니다...";

  setTimeout(() => {
    if (coupons.hasOwnProperty(code)) {
      const discount = coupons[code];
      resultText.textContent =
        discount > 0
          ? `✅ 쿠폰이 적용되었습니다! ${discount}% 할인`
          : `🚚 무료배송 쿠폰이 적용되었습니다!`;
    } else {
      resultText.textContent = `❌ 유효하지 않은 쿠폰 코드입니다.`;
    }
  }, 1000);
});
