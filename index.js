var Img=document.querySelectorAll('.header-img');
var prev_btn=document.querySelector('.control-prev');
var next_btn=document.querySelector('.control-next');
let n=0;
function slider(){
    Img.forEach((Val)=>{
        Val.style.display='none'; 
    })
    Img[n].style.display='block';
}

 let set =setInterval(()=>{
n++;
if(n>Img.length-1)
{
   n=0;
   clearInterval(set);
}
slider();

},2000)
prev_btn.addEventListener('click',(e)=>{
  if(n>0)
    n--;
else
 n=Img.length-1;
slider();
})
next_btn.addEventListener('click',(e)=>{
  if(n<Img.length-1)
    n++;
else
 n=0;
 slider();
})
const scrollbar=document.querySelectorAll('.products');
for(let item of scrollbar){
  item.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    item.scrollLeft+=evt.deltaY;
  })
}
