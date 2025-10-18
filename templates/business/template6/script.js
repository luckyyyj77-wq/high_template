
// Template 6: simple submit alert
(function(){
  const form=document.getElementById('partner');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('제휴 문의 접수: '+form.company.value);
    form.reset();
  });
})();
