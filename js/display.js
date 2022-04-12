//curent
$(document).ready(function(){
    swiper = new Swiper(".currentWrap .swiper", {
        navigation: {
          nextEl: ".currentWrap .swiper-button-next",
          prevEl: ".currentWrap .swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
    });
});