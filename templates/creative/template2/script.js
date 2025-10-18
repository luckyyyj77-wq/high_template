/* ===========================================================
   ⚡ Neon Flow JS
   - 버튼 클릭 시 퍼지는 빛 효과
=========================================================== */
const btn = document.getElementById("pulseBtn");
btn.addEventListener("click",()=>{
  btn.classList.remove("active");
  void btn.offsetWidth; // reflow로 애니메이션 리셋
  btn.classList.add("active");
});
