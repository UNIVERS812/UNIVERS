const boutton_de_recherche =document.getElementById("id1");
const zone_de_recherche =document.getElementById("zonederecherche");

boutton_de_recherche.addEventListener("click",()=>{zone_de_recherche.classList.toggle("hidden");

});


const button_close=document.querySelector(".close");
const menu= document.querySelector(".over");
const button_ouver=document.querySelector(".menu");


button_ouver.addEventListener("click",()=>{
    menu.classList.add("active");
    button_ouver.style.display="none";
    button_close.style.display="block";
});

button_close.addEventListener("click",()=>{
    menu.classList.remove("active");
    button_close.style.display="none";
      button_ouver.style.display="block";
});
