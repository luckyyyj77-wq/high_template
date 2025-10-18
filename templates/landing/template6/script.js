
// Template 6: 기본 폼 검증 + 토스트
(function(){
  const form = document.getElementById('signup');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const [email, pw] = form.querySelectorAll('input');
    if(!email.value.includes('@')){ alert('유효한 이메일을 입력하세요'); return; }
    if(pw.value.length < 6){ alert('비밀번호는 6자 이상'); return; }
    alert('가입 완료!');
    form.reset();
  });
})();
