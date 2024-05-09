
document.getElementById("hamburger").addEventListener("click",function(){
    document.getElementsByClassName("side-nav")[0].classList.add("appear");
});

document.getElementById("icon-close")?.addEventListener("click",function(){
        document.getElementsByClassName("side-nav")[0].classList.remove("appear");
    })