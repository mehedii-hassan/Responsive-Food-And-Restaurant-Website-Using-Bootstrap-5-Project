//Navbar effect after scrolling
let nav = document.querySelector("nav");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("background");
    }else{
        nav.classList.remove("background");
    }
};

//Back to top button visible after scrolling
const toTop = document.querySelector(".to-top");
window.addEventListener('scroll',() => {
    if(document.documentElement.scrollTop > 100){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
});

 
