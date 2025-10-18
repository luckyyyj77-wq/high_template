/* ===========================================================
   🌟 상품 리뷰 JS
   - 별점 클릭 이벤트
   - 입력 검증 및 결과 메시지
=========================================================== */

const stars = document.querySelectorAll("#starBox span");
const ratingText = document.getElementById("ratingText");
const form = document.getElementById("reviewForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

let rating = 0; // 현재 선택된 별점 값

// ✅ 별 클릭 시 별점 설정
stars.forEach(star => {
  star.addEventListener("click", () => {
    rating = parseInt(star.dataset.value);
    updateStars();
  });
});

// 별점 시각적 표시 함수
function updateStars() {
  stars.forEach(star => {
    star.classList.toggle("active", parseInt(star.dataset.value) <= rating);
  });
  ratingText.textContent = rating > 0 ? `평점: ${rating}점` : "평점을 선택하세요.";
}

// ✅ 폼 제출 시 검증
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (rating === 0) return alert("평점을 선택해주세요.");
  if (!title || !content) return alert("제목과 내용을 입력해주세요.");

  resultBox.classList.remove("hidden");
  resultText.textContent = "리뷰를 등록 중입니다...";

  // 1.5초 후 등록 완료 시뮬레이션
  setTimeout(() => {
    resultText.textContent = `✅ 리뷰가 등록되었습니다. 평점: ${rating}점`;
    form.reset();
    rating = 0;
    updateStars();
  }, 1500);
});
