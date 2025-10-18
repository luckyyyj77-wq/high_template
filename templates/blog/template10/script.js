
// Template 10: Subscribe toast
(function(){
  const form=document.getElementById('sub');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const email=form.querySelector('input').value;
    alert('구독 완료: '+email);
    form.reset();
  });
})();
