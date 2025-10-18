
// Toggle Monthly/Yearly
(function(){
  const c=document.getElementById('bill');
  const cells=[...document.querySelectorAll('.price')];
  function render(){ const y=c.checked; cells.forEach(el=>{ el.textContent='$'+(y?el.dataset.y:el.dataset.m); }); }
  c.addEventListener('change',render); render();
})();
