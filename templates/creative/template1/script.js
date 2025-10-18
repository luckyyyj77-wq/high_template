/* ===========================================================
   Creative Showcase JS
   - Typewriter
   - Theme toggle (localStorage)
   - Magnetic buttons + ripple light
   - Parallax cards
   - Confetti burst
=========================================================== */

// ✅ 1) 타자기 효과
const typedEl = document.getElementById('typed');
const lines = [
  "Design that feels alive.",
  "코드 몇 줄로 감각적인 인터랙션.",
  "Copy. Paste. Shine ✨"
];
let li = 0, ci = 0, deleting = false;

function typeLoop(){
  const text = lines[li];
  if(!deleting){
    ci++;
    typedEl.textContent = text.slice(0,ci);
    if(ci === text.length){ deleting = true; setTimeout(typeLoop, 1200); return; }
  } else {
    ci--;
    typedEl.textContent = text.slice(0,ci);
    if(ci === 0){ deleting = false; li = (li+1)%lines.length; }
  }
  setTimeout(typeLoop, deleting ? 28 : 58);
}
typeLoop();

// ✅ 2) 테마 토글 (라이트/다크 유지)
const themeBtn = document.getElementById('themeToggle');
function applyTheme(mode){
  document.body.classList.remove('light','dark');
  document.body.classList.add(mode);
  themeBtn.textContent = mode === 'dark' ? '🌞' : '🌙';
  localStorage.setItem('creative-theme', mode);
}
applyTheme(localStorage.getItem('creative-theme') || 'dark');
themeBtn.addEventListener('click', ()=>{
  applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
});

// ✅ 3) 마그네틱 버튼 & 라이트 리플
document.querySelectorAll('.magnetic').forEach(btn=>{
  const strength = 16;
  btn.addEventListener('mousemove', e=>{
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const dx = (x - r.width/2) / (r.width/2);
    const dy = (y - r.height/2) / (r.height/2);
    btn.style.transform = `translate(${dx*strength}px, ${dy*strength}px)`;
    btn.style.setProperty('--mx', `${(x/r.width)*100}%`);
    btn.style.setProperty('--my', `${(y/r.height)*100}%`);
  });
  btn.addEventListener('mouseleave', ()=> btn.style.transform = 'translate(0,0)');
});

// ✅ 4) 패럴랙스 카드
const cards = document.querySelectorAll('.parallax');
document.addEventListener('mousemove', (e)=>{
  const cx = window.innerWidth/2, cy = window.innerHeight/2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;
  cards.forEach(card=>{
    const d = parseFloat(card.dataset.depth || 0.04);
    card.style.transform = `translateY(${(-dy*d*20)-6}px) translateX(${(-dx*d*20)}px)`;
  });
});

// ✅ 5) 컨페티 (가벼운 구현)
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
function resizeCanvas(){
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = 280; // hero 높이만
}
resizeCanvas(); window.addEventListener('resize', resizeCanvas);

function confettiBurst(){
  const pieces = Array.from({length:90}).map(()=>({
    x: canvas.width/2, y: canvas.height/2,
    vx: (Math.random()*2-1)*6, vy: (Math.random()*-1-3)*6,
    size: Math.random()*6+3,
    color: `hsl(${Math.floor(Math.random()*360)},90%,60%)`,
    life: 0, max: 60 + Math.random()*30
  }));
  let frame = 0;
  function tick(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      p.life++; p.x += p.vx; p.y += p.vy; p.vy += 0.18; // gravity
      ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    frame++;
    if(frame < 120) requestAnimationFrame(tick);
  }
  tick();
}

// 버튼 이벤트
document.getElementById('btnExplore').addEventListener('click', ()=>{
  window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
});
document.getElementById('btnCelebrate').addEventListener('click', confettiBurst);
