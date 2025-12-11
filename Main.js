// const swiper = new Swiper('.mySwiper', {
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });
console.log("hello");

let header=document.querySelector(".header");
let btns=document.querySelector(".buttons");

window.addEventListener("scroll",
    function(){
        if(scrollY > 654 ){
            header.style.display="none";
            btns.style.top="0px";
        }
    else{
    header.style.display="flex";
    btns.style.top="90px";
    }
})