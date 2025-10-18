
// Template 7: contact submit toast
(function(){
  const form=document.getElementById('contact');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('문의 접수: '+form.name.value);
    form.reset();
  });
})();
