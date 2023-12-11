var box = document.getElementById("container");
var btn = document.getElementById("btn");
setTimeout(() => {
    document.body.style.overflow="visible";
    document.querySelector(".loading").style.display="none";
}, 2500);
window.addEventListener("scroll",function(){
if (window.scrollY > 1500) {
    btn.classList.remove("hide");
    btn.classList.add("show");
    btn.addEventListener("click",function(){
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        });
        // window.scrollTo(0,0);
    })
} else {
    btn.classList.remove("show");
    btn.classList.add("hide");
}
});