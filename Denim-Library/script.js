const accs=document.querySelectorAll('.accordion');
accs.forEach(a=>{
 const b=a.querySelector('.accordion-btn');
 const c=a.querySelector('.accordion-content');
 b.addEventListener('click',()=>{
   accs.forEach(x=>{
     if(x!==a){
       x.querySelector('.accordion-content').style.display='none';
       const xb=x.querySelector('.accordion-btn');
       xb.textContent='▶ '+xb.textContent.replace(/^.[ ]*/,'').replace(/^\d+\. /,'');
     }
   });
   const open=c.style.display==='block';
   c.style.display=open?'none':'block';
   const label=b.textContent.replace(/^.[ ]*/,'');
   b.textContent=(open?'▶ ':'▼ ')+label;
 });
});
