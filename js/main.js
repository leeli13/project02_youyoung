//popup
$(document).ready(function(){
    function setCookie(name,value,expiredays){
        var today = new Date();
        today.setDate(today.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + today.toGMTString() + ';';
    }
    
    var popup = '#popup';
    $(popup).find('.first a').click(function(e){
        e.preventDefault();
        setCookie('exCookie','yes',1);

        $(popup).stop().fadeOut(0);
        $('html,body').css('overflow','visible');
    });
    $(popup).find('.last a').click(function(e){
        e.preventDefault();

        $(popup).stop().fadeOut(0);
        $('html,body').css('overflow','visible');
    });

    var cookieData = document.cookie;

    if(cookieData.indexOf('exCookie=yes') < 0){
        $(popup).fadeIn(0);
        $('html,body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html,body').css('overflow','visible');
    }

});

//main
$(document).ready(function(){
    var swiper = new Swiper("#mSlider .swiper", {
        effect: 'fade',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        pagination: {
            el: "#mSlider .swiper-pagination",
            type: "fraction",
        },
        navigation: {
          nextEl: "#mSlider .swiper-button-next",
          prevEl: "#mSlider .swiper-button-prev",
        },
        on: { 
            init: function(){ 
                $('#mSlider .swiper-progress').addClass('active');
            },
            slideChangeTransitionStart: function(){ 
                $('#mSlider .swiper-progress').removeClass('active');
            },
            slideChangeTransitionEnd: function(){
                $('#mSlider .swiper-progress').addClass('active');
            }
        },
        loop: true,
    });
    
});

//collection
$(document).ready(function(){
    var swiper = new Swiper("#collection .swiper", {
        speed : 1000,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        pagination: {
            el: "#collection .swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: "#collection .swiper-button-next",
            prevEl: "#collection .swiper-button-prev",
        },
        loop: true,
      });
     
});

//display
$(document).ready(function(){
    var btn = '.tabbox .btn a';
    var contents = '.tabbox .contentsWrap > div';
    var left = '.displayLeft'
    var right = '.displayRight'

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var displayTop = $('#display').offset().top;

        if(scrollTop > displayTop - 300){
            $(left).add(right).addClass('active');
        }

    });
    $(btn).first().addClass('active');
    $(contents).first().fadeIn(0);

    $(btn).click(function(e){
        e.preventDefault();
        $(btn).removeClass('active');
        $(this).addClass('active');
        $(left).add(right).removeClass('active');

        var index = $(this).parent().index();

        $(contents).stop().fadeOut(0);
        $(contents).eq(index).stop().fadeIn(0);
        
        $(left).add(right).addClass('active');
    });
});

//introduce
$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var introduceTop = $('#introduce').offset().top;

        if(scrollTop > introduceTop - 600){
            $('h2').add('p').addClass('active');
        }
    });
});

//around
$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var aroundTop = $('#introduce').offset().top;

        if(scrollTop > aroundTop){
            $('li').addClass('active');
        }
    });
});

//media
$(document).ready(function(){
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('mediaAuto', {});
    };

    $(window).scroll(function(){
        var mTop = $('#board').offset().top;
        var wTop = $(window).scrollTop();
        if(wTop > mTop - 700){
            player.playVideo();
        }
    });
});