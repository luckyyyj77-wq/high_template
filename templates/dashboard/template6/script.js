/* ============================================
   📊 기본 대시보드 JS
   - 테이블에 주문 데이터를 로드
   - 로그아웃 버튼 이벤트
============================================ */

const orders = [
  { id: "ORD-1001", name: "김민수", product: "무선 이어폰", price: "₩89,000", status: "배송 중" },
  { id: "ORD-1002", name: "박지현", product: "게이밍 마우스", price: "₩59,000", status: "결제 완료" },
  { id: "ORD-1003", name: "이수정", product: "노트북 가방", price: "₩42,000", status: "배송 완료" },
  { id: "ORD-1004", name: "정우성", product: "스마트 워치", price: "₩159,000", status: "취소됨" }
];

// ✅ 테이블 채우기
const tableBody = document.getElementById("orderTableBody");
orders.forEach(o => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${o.id}</td>
    <td>${o.name}</td>
    <td>${o.product}</td>
    <td>${o.price}</td>
    <td>${o.status}</td>
  `;
  tableBody.appendChild(row);
});

// ✅ 로그아웃 버튼 클릭 이벤트
document.getElementById("logoutBtn").addEventListener("click", () => {
  alert("로그아웃 되었습니다.");
});
