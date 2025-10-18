
// Template 7: Billing toggle (Monthly/Yearly)
(function(){
  const toggle = document.getElementById('bill');
  const cells = document.querySelectorAll('td.price');
  function render(){
    const yearly = toggle.checked;
    cells.forEach(td=>{
      const m=td.dataset.m, y=td.dataset.y;
      td.textContent = '$' + (yearly? y : m);
    });
  }
  toggle.addEventListener('change', render);
  render();
})();
