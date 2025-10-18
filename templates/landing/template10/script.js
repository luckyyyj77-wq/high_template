
// Template 10: Contact form alert
(function(){
  const form=document.getElementById('contact');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const data=new FormData(form);
    alert('메시지 전송: '+data.get('name')+' / '+data.get('email'));
    form.reset();
  });
})();
