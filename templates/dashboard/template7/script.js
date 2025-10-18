/* ==========================================================
   📈 통계 대시보드 JS
   - 임의 데이터로 차트 렌더링
   - 기간 변경 시 랜덤 데이터 갱신
========================================================== */

const visitorsEl = document.getElementById("visitors");
const revenueEl = document.getElementById("revenue");
const conversionEl = document.getElementById("conversion");
const rangeSelect = document.getElementById("dateRange");
const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");

// 랜덤 데이터 생성 함수
function randomData(points, max) {
  return Array.from({ length: points }, () => Math.floor(Math.random() * max));
}

// 숫자 서식 함수
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 간단한 차트 그리기 함수
function drawChart(data) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 기본 축 스타일
  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(40, 10);
  ctx.lineTo(40, 260);
  ctx.lineTo(580, 260);
  ctx.stroke();

  // 데이터 선
  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 2;
  ctx.beginPath();

  const step = (540 / (data.length - 1));
  data.forEach((v, i) => {
    const x = 40 + i * step;
    const y = 260 - v / 10; // 데이터 크기 스케일링
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();
}

// 요약 카드 업데이트
function updateSummary(days) {
  const visitors = Math.floor(Math.random() * 5000 + days * 20);
  const revenue = visitors * (Math.random() * 40 + 100);
  const conversion = (Math.random() * 4 + 1).toFixed(2);

  visitorsEl.textContent = formatNumber(visitors);
  revenueEl.textContent = "₩" + formatNumber(revenue.toFixed(0));
  conversionEl.textContent = conversion + "%";

  // 차트 데이터 갱신
  const chartData = randomData(days, 2500);
  drawChart(chartData);
}

// 기본 초기화
updateSummary(7);

// 기간 변경 시 업데이트
rangeSelect.addEventListener("change", () => {
  const days = parseInt(rangeSelect.value, 10);
  updateSummary(days);
});
