
// Template 6: Filter by tag
(function(){
  const btns=[...document.querySelectorAll('.tags button')];
  const cards=[...document.querySelectorAll('.card')];
  btns.forEach(btn=>btn.addEventListener('click', ()=>{
    btns.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    const tag=btn.dataset.tag;
    cards.forEach(c=>{
      const t=c.dataset.tags.split(' ');
      c.style.display = (tag==='all'||t.includes(tag)) ? '' : 'none';
    });
  }));
})();
