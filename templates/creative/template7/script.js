// 🌈 Gradient Wave JS
// - 이번 효과는 CSS만으로 완성되므로 JS는 선택사항이에요.
//   아래는 단순히 클릭하면 배경이 살짝 반짝이는 기능만 추가합니다.
const bg = document.querySelector(".gradient-bg");
document.addEventListener("click", ()=>{
  bg.style.filter = "blur(70px) brightness(1.6)";
  setTimeout(()=> bg.style.filter = "blur(80px) brightness(1.1)", 300);
});
