// ===========================================================
// 🌌 Particle Flow JS (정상 작동 버전)
// ===========================================================

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.size = Math.random() * 2 + 1;
    this.color = `hsl(${Math.random() * 360},80%,70%)`;
  }
  update(mx, my) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > innerWidth) this.vx *= -1;
    if (this.y < 0 || this.y > innerHeight) this.vy *= -1;

    if (mx !== null) {
      const dx = this.x - mx;
      const dy = this.y - my;
      const dist = Math.hypot(dx, dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        const angle = Math.atan2(dy, dx);
        this.vx += Math.cos(angle) * force * 0.6;
        this.vy += Math.sin(angle) * force * 0.6;
      }
    }
    this.vx *= 0.98;
    this.vy *= 0.98;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const particles = Array.from({ length: 180 }, () =>
  new Particle(Math.random() * innerWidth, Math.random() * innerHeight)
);

let mx = null, my = null;
window.addEventListener("mousemove", e => {
  mx = e.clientX;
  my = e.clientY;
});
window.addEventListener("mouseleave", () => {
  mx = null;
  my = null;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    p.update(mx, my);
    p.draw();
  }
  requestAnimationFrame(animate);
}
animate();
