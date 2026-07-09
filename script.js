document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(!expanded){
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none';
      }
    });
  }
});
