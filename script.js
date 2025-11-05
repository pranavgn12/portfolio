let cur= document.querySelector("#cur");
let i=0;






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

document.addEventListener('mousemove', (e) => {
      const rect = document.createElement('div');
      rect.classList.add('trail');
      rect.style.left = `${window.innerWidth/parseInt(1/0.15) * parseInt(e.pageX/ (window.innerWidth/parseInt(1/0.15)))}px`;
      rect.style.top = `${window.innerHeight/parseInt(1/0.10) * parseInt(e.pageY/ (window.innerHeight/parseInt(1/0.10)))}px`;
      document.body.appendChild(rect);
      // trigger fade out
      requestAnimationFrame(() => rect.style.opacity = '0');

      // remove element after fade
      
      setTimeout(() => rect.remove(), 500);
});