
// [Template 1] 기본 동작: 메뉴 토글 + 스무스 스크롤 + 뉴스레터 토스트
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');
  if(toggle && nav){ toggle.addEventListener('click', ()=>nav.classList.toggle('open')); }
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });
  const form=document.getElementById('newsletter-form');
  if(form){ form.addEventListener('submit', e=>{
    e.preventDefault();
    const email=form.querySelector('input[type="email"]').value.trim();
    const t=document.createElement('div');
    t.textContent=email?`구독 완료: ${email}`:'이메일을 입력하세요';
    Object.assign(t.style,{position:'fixed',left:'50%',bottom:'24px',transform:'translateX(-50%)',background:'rgba(0,0,0,.85)',color:'#fff',padding:'10px 16px',borderRadius:'8px',zIndex:9999});
    document.body.appendChild(t); setTimeout(()=>t.remove(),1500); form.reset();
  });}
})();
