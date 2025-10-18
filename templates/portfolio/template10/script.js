
// Template 10: Filter buttons
(function(){
  const buttons=[...document.querySelectorAll('.filters button')];
  const cards=[...document.querySelectorAll('.card')];
  buttons.forEach(btn=>btn.addEventListener('click', ()=>{
    buttons.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    const tag=btn.dataset.tag;
    cards.forEach(c=>{
      const tags=c.dataset.tags.split(' ');
      const show = tag==='all' || tags.includes(tag);
      c.style.display = show ? '' : 'none';
    });
  }));
})();
