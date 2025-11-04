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
