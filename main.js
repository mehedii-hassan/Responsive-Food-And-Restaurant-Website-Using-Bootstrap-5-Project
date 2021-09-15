// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementsByTagName("nav").className = "nav-style-change";
//   } else {
//     document.getElementsByClassName("nav").className = "";
//   }
// }

// Scrollbar navbar 
// let navBar = document.querySelector("#navMenu");
// window.onscroll = function (){
//     if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20){
//         navBar.classList.add("scroll-on");
//     }else{
//         navBar.classList.remove('fixed-top');
//     }
// }

let nav = document.querySelector("nav");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("background");
    }else{
        nav.classList.remove("background");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
