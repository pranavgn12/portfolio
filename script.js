let cur= document.querySelector("#cur");
let i=0;

let x;
let y;
let px;
let py;




function showcur() {
  cur.innerText="_";
    i++;
    setTimeout(hidecur, 500)
}

function hidecur() {
  cur.innerText="";
    if(i<100)
    setTimeout(showcur, 500)
}


showcur();



document.addEventListener('mousemove',(e)=>{
      x =window.innerWidth/parseInt(1/0.15) * parseInt(e.pageX/ (window.innerWidth/parseInt(1/0.15)));
      y= window.innerHeight/parseInt(1/0.20) * parseInt(e.pageY/ (window.innerHeight/parseInt(1/0.20)));
})


document.addEventListener('mousemove', (e) => {
      if(x!=px || y!=py){
      const rect = document.createElement('div');
      rect.classList.add('trail');
      rect.style.left = `${x}px`;
      rect.style.top = `${y}px`;
      if(window.innerWidth > window.innerHeight){
      rect.style.width = `15vw`;
      rect.style.height = `17vh`;
      }
      else{
      rect.style.width = `17vw`;
      rect.style.height = `15vh`;
    }
      rect.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 90%)`;
      px=x;
      py=y;
      document.body.appendChild(rect);
      //while(x==px && y==py);
       requestAnimationFrame(() => rect.style.opacity = '0');
      setTimeout(() => rect.remove(), 2000);
      }
      // trigger fade out
      /*while((window.innerWidth/parseInt(1/0.15) * parseInt(ei.pageX/ (window.innerWidth/parseInt(1/0.15))))==x  || window.innerHeight/parseInt(1/0.10) * parseInt(ei.pageY/ (window.innerHeight/parseInt(1/0.10)))== y ){

      }*/
     
      // remove element after fade
     
});
