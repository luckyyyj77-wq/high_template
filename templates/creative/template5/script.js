// 간단 클릭 반응 (살짝 진동)
const btn = document.getElementById("liquidBtn");
btn.addEventListener("click", () => {
  btn.style.animation = "none";
  void btn.offsetWidth; // reset animation
  btn.style.animation = "wobble 1s ease-in-out";
});
