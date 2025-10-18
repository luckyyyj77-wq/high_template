
// Template 4: Simple Lightbox
(function(){
  const lb=document.getElementById('lightbox'), img=lb.querySelector('img');
  document.querySelectorAll('.masonry img').forEach(el=>{
    el.addEventListener('click', ()=>{ img.src=el.src; lb.classList.add('show'); });
  });
  lb.addEventListener('click', ()=>lb.classList.remove('show'));
})();
