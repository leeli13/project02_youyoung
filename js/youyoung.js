//facility
$(document).ready(function(){
    var btn = '.facilityWrap .tabbox .btn a';
    var contents = '.facilityWrap .tabbox .contentsWrap > div';

    $(btn).first().addClass('active'); 
    $(contents).first().fadeIn(0); 

    var swiper = new Swiper(".facility01 .swiper", {
        navigation: {
          nextEl: ".facility01 .swiper-button-next",
          prevEl: ".facility01 .swiper-button-prev",
        },
        loop: true,
    });

    $(btn).click(function(e){
        e.preventDefault();

        $(btn).removeClass('active'); 
        $(this).addClass('active'); 

        var index = $(this).parents().index(); 

        $(contents).stop().fadeOut(0); 
        $(contents).eq(index).stop().fadeIn(0); 

        swiper.destroy(); 

        if(index == 0){
            swiper = new Swiper(".facility01 .swiper", {
                navigation: {
                  nextEl: ".facility01 .swiper-button-next",
                  prevEl: ".facility01 .swiper-button-prev",
                },
                loop: true,
            });
        }else if(index == 1){
            swiper = new Swiper(".facility02 .swiper", {
                navigation: {
                  nextEl: ".facility02 .swiper-button-next",
                  prevEl: ".facility02 .swiper-button-prev",
                },
                loop: true,
            });
        }else if(index == 2){
            swiper = new Swiper(".facility03 .swiper", {
                navigation: {
                  nextEl: ".facility03 .swiper-button-next",
                  prevEl: ".facility03 .swiper-button-prev",
                },
                loop: true,
            });
        }
    });
});