document.querySelectorAll(".sns-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const provider = btn.dataset.provider;
    alert(`${provider} 로그인 시도 중... (시뮬레이션)`);
    // 실제 구현 시 window.location.href = "/auth/" + provider.toLowerCase();
  });
});
