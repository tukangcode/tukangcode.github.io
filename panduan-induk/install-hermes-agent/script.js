document.querySelectorAll('.tabs').forEach(tabs=>{
  const btns=tabs.querySelectorAll('.tab-btn');
  const panels=tabs.querySelectorAll('.tab-panel');
  btns.forEach(b=> b.addEventListener('click',()=>{
    const id=b.dataset.tab;
    btns.forEach(x=>x.classList.remove('active'));
    panels.forEach(p=>p.classList.remove('active'));
    b.classList.add('active');
    const target=document.getElementById(id);
    if(target) target.classList.add('active');
  }));
});
document.querySelectorAll('.copy-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const text=btn.dataset.copy||btn.closest('.code-block')?.querySelector('code')?.innerText||'';
    navigator.clipboard.writeText(text).then(()=>{
      const old=btn.textContent; btn.textContent='Copied!'; setTimeout(()=>btn.textContent=old,1200);
    });
  });
});
