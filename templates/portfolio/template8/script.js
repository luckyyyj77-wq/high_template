
// Template 8: Form submit toast
(function(){
  const form=document.getElementById('contact');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const email=form.email.value;
    const toast=document.createElement('div');
    toast.textContent='문의 접수: '+email;
    Object.assign(toast.style,{position:'fixed',left:'50%',bottom:'24px',transform:'translateX(-50%)',background:'rgba(0,0,0,.85)',color:'#fff',padding:'10px 14px',borderRadius:'8px'});
    document.body.appendChild(toast); setTimeout(()=>toast.remove(),1500); form.reset();
  });
})();
