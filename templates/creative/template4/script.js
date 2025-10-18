// ===========================================================
// 💡 Glow Text JS
// - 마우스 이동에 따라 빛 중심점 변경
// ===========================================================

const glow = document.getElementById("glowText");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  glow.style.setProperty("--x", `${x}%`);
  glow.style.setProperty("--y", `${y}%`);
});
