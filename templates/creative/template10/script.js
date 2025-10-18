// 🔵 Pulse Glow Circle - 작동 보장 버전
const canvas = document.getElementById("pulseCanvas");
const ctx = canvas.getContext("2d");
let w,h;
function resize(){
  w=canvas.width=window.innerWidth;
  h=canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let circles = [];

canvas.addEventListener("click", (e)=>{
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  circles.push({x,y,radius:10,opacity:1});
});

function animate(){
  ctx.clearRect(0,0,w,h);
  for(let i=0;i<circles.length;i++){
    const c = circles[i];
    c.radius +=3;       // 확산 속도 증가
    c.opacity -=0.015;  // 조금 느리게 사라짐
    if(c.opacity <=0){ circles.splice(i,1); i--; continue; }
    ctx.beginPath();
    ctx.arc(c.x,c.y,c.radius,0,Math.PI*2);
    ctx.strokeStyle = `rgba(34,211,238,${c.opacity})`;
    ctx.lineWidth = Math.max(c.radius/15,2); // radius에 비례
    ctx.stroke();
  }
  requestAnimationFrame(animate);
}

animate();
