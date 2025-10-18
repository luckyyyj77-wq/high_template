
// Template 8: Simple slider
(function(){
  const slides=[...document.querySelectorAll('.t')];
  let i=0;
  function show(n){ slides.forEach((s,idx)=>s.classList.toggle('active', idx===n)); }
  document.getElementById('prev').addEventListener('click', ()=>{ i=(i-1+slides.length)%slides.length; show(i); });
  document.getElementById('next').addEventListener('click', ()=>{ i=(i+1)%slides.length; show(i); });
  show(0);
})();
