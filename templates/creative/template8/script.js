// ===========================================================
// Scroll Reveal JS
// - 스크롤할 때 섹션 fade-in + 위에서 내려오기
// ===========================================================
const reveals = document.querySelectorAll(".reveal");

function revealSections(){
  const windowHeight = window.innerHeight;
  reveals.forEach(section=>{
    const top = section.getBoundingClientRect().top;
    const threshold = 150; // 화면 하단에서 얼마나 올라오면 실행
    if(top < windowHeight - threshold){
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections); // 로드 시도
