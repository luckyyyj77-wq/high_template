// ===========================================================
// 🪞 3D Card JS
// - 마우스 위치 기반 회전 각도 계산
// ===========================================================
const card = document.getElementById("card3d");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const midX = rect.width / 2;
  const midY = rect.height / 2;

  const rotateX = ((y - midY) / midY) * 10;  // X축 회전 (상하)
  const rotateY = ((x - midX) / midX) * -10; // Y축 회전 (좌우)
  
  card.style.setProperty("--rx", `${rotateX}deg`);
  card.style.setProperty("--ry", `${rotateY}deg`);
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
  card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
});
