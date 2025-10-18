/* =============================================
   🚚 배송 조회 JS
   - 송장번호 입력 → 조회 클릭
   - 결과를 시뮬레이션으로 표시
   - 실제 API 연동 시 fetch() 부분만 교체
============================================= */

const form = document.getElementById("trackForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const trackingNum = document.getElementById("trackingNumber").value.trim();

  // 간단한 형식 검사
  if (trackingNum.length < 8) {
    alert("송장번호를 정확히 입력해주세요.");
    return;
  }

  // 결과 영역 표시
  resultBox.classList.remove("hidden");
  resultText.textContent = "배송 정보를 조회 중입니다...";

  // 2초 후 시뮬레이션된 결과 표시
  setTimeout(() => {
    // 예시 데이터 (랜덤 배송 상태)
    const statuses = [
      "상품 준비 중입니다.",
      "배송이 시작되었습니다.",
      "현재 물류센터에 도착했습니다.",
      "배송 중입니다.",
      "배송 완료되었습니다.",
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    resultText.textContent = `📦 ${randomStatus}`;
  }, 2000);
});
