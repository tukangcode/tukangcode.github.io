// TOC shadow + active link + scrollTop + card reveal
const toc=document.getElementById('toc');
window.addEventListener('scroll',()=>{ if(toc) toc.classList.toggle('scrolled',window.scrollY>80); });
const btn=document.getElementById('scrollTop');
if(btn){
  window.addEventListener('scroll',()=> btn.classList.toggle('visible',window.scrollY>500));
  btn.addEventListener('click',()=> window.scrollTo({top:0,behavior:'smooth'}));
}
const sections=document.querySelectorAll('section[id]');
const links=document.querySelectorAll('.toc-links a');
function active(){
  const y=window.scrollY+180;
  sections.forEach(s=>{
    const t=s.offsetTop,h=s.offsetHeight,id=s.getAttribute('id');
    if(y>=t && y<t+h){
      links.forEach(a=>{a.classList.remove('active'); if(a.getAttribute('href')==='#'+id) a.classList.add('active');});
    }
  });
}
window.addEventListener('scroll',active); active();
document.querySelectorAll('.img-placeholder img').forEach(i=> i.addEventListener('error',function(){this.style.display='none';}));
const ob=new IntersectionObserver(es=> es.forEach(e=>{ if(e.isIntersecting){e.target.style.opacity='1'; e.target.style.transform='translateY(0)';}}),{threshold:.08});
document.querySelectorAll('.card').forEach(c=>{ c.style.opacity='0'; c.style.transform='translateY(24px)'; c.style.transition='opacity .5s ease, transform .5s ease'; ob.observe(c); });
