/* ===================================================
   💳 결제 모달 JS
   - 모달 열기 / 닫기 / 배경 클릭 닫기
   - 카드번호 입력 자동 공백 삽입
   - 간단한 유효성 검사
=================================================== */

const openBtn = document.getElementById("openCheckout");
const closeBtn = document.getElementById("closeCheckout");
const modal = document.getElementById("checkoutModal");
const form = document.getElementById("checkoutForm");

// ✅ 모달 열기
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // 스크롤 잠금
});

// ✅ 닫기 버튼 클릭 시 닫기
closeBtn.addEventListener("click", () => closeModal());

// ✅ 배경 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) closeModal();
});

// ✅ 모달 닫기 함수
function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  form.reset();
}

// ✅ 카드번호 입력 시 4자리마다 공백 자동 추가
const cardNumber = document.getElementById("cardNumber");
cardNumber.addEventListener("input", () => {
  let v = cardNumber.value.replace(/\D/g, "").slice(0,16);
  cardNumber.value = v.replace(/(\d{4})(?=\d)/g, "$1 ");
});

// ✅ 폼 제출 시 확인
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = cardNumber.value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvc = document.getElementById("cvc").value.trim();
  const owner = document.getElementById("owner").value.trim();

  if (number.length < 19) return alert("올바른 카드번호를 입력하세요.");
  if (!/^\d{2}\/\d{2}$/.test(expiry)) return alert("유효기간은 MM/YY 형식입니다.");
  if (cvc.length !== 3) return alert("CVC는 3자리 숫자입니다.");
  if (!owner) return alert("소유자 이름을 입력하세요.");

  alert(`💳 결제 완료!\n카드 소유자: ${owner}`);
  closeModal();
});
