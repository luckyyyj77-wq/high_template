// ===========================================================
// 🔊 Sound Light JS
// - Web Audio API 사용, 마이크 볼륨 감지
// ===========================================================
const canvas = document.getElementById("soundCanvas");
const ctx = canvas.getContext("2d");
let w, h;
function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
resize();
window.addEventListener("resize", resize);

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", async () => {
  try{
    const stream = await navigator.mediaDevices.getUserMedia({ audio:true });
    const audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    const source = audioCtx.createMediaStreamSource(stream);
    const analyser = audioCtx.createAnalyser();
    source.connect(analyser);
    analyser.fftSize = 256;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function animate(){
      requestAnimationFrame(animate);
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a,b)=>a+b,0)/dataArray.length;
      ctx.fillStyle = `rgba(0, ${Math.min(avg*2,255)}, ${Math.min(avg*2,255)}, 0.3)`;
      ctx.fillRect(0,0,w,h);
    }
    animate();
  }catch(e){
    alert("마이크 접근이 필요합니다.");
  }
});
