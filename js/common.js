//mobile연결
$(document).ready(function(){
    var mobile_keys = new Array('iPhone','iPad','Android','BlackBerry','Windows Phone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');

    if(document.URL.match('move_pc')){
        $('.mobileBtn').fadeIn(0);
    }else{
        for(var i in mobile_keys){
            if(navigator.userAgent.match(mobile_keys[i])){
                location.href = 'http://myouyoung.dothome.co.kr/'
            }
        }
    }
});

//language
$(document).ready(function(){
    var language = '.language'

    $(language).find('button').click(function(){
        $(this).next().slideToggle('fast');
        $(this).toggleClass('active');
    });

    $(language).find('li:last a').keydown(function(e){
        if(e.keyCode == 9){ 
            if(!e.shiftKey){
                $(language).find('li:last a').trigger('click');
            }
        }
    });
    $(language).mouseleave(function(){
        var is = $(this).find('ul').is(':visible');
        if(is){
            $(language).find('button').trigger('click');
        }
    });
});

//gnb
$(document).ready(function(){
    var gnb = '.gnb'
    var main = '.mainNav'
    var sub = '.subNav'
    var bg = $('<div class="subbg"></div>');
    var search = '.searchIcon';
    var searchbox = '.searchMenu';

    $('header').append(bg);
    $(gnb).hover(function(){
        $(sub).add(bg).stop().slideDown(200);
        $(searchbox).stop().slideUp(200);
    },function(){
        $(sub).add(bg).stop().slideUp(200);
        $(main).removeClass('active');
        
    });

    //웹접근성
    $(main).first().focus(function(){
        $(gnb).trigger('mouseenter');
    });
    $(main).focus(function(){
        $(main).removeClass('active');
        $(this).addClass('active');
    });
    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });
    $(sub).last().find('a:last').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(gnb).trigger('mouseleave');
            }
        }
    });
    $(main).first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(gnb).trigger('mouseleave');
            }
        }
    });

    //hamburger
    var hamburgerLine = '.hamburgerIcon a'
    var hamburgerIcon = '.hamburgerIcon'

    $(hamburgerLine).click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');

        
        $(sub).add(bg).stop().slideToggle(200);
        $(searchbox).stop().slideUp(200);
    });

    $('header').mouseleave(function(){
        $(hamburgerLine).removeClass('active');
        $(sub).add(bg).stop().slideUp(200);
        $(searchbox).stop().slideUp(200);
    });


    //search
    $(search).click(function(e){
        e.preventDefault();
        $(searchbox).stop().slideToggle(200);

        var is = $(searchbox).is(':visible');

        if(is){
            $(searchbox).find('input').focus();
        }
        $(sub).add(bg).stop().slideUp(200);
        $(hamburgerLine).removeClass('active');
    });

    $('.hBottom').mouseleave(function(){
        var is = $(searchbox).is(':visible');
        if(is){
            $(searchbox).trigger('click');
        }
    });
    $(search).focus(function(){
        $(this).trigger('click');
    });

});

//header fixed
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top > 80){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});

//scrollTop
$(document).ready(function(){
    var btn = '.scrollTop'    
    var speed = 2000
    var easing = 'easeOutQuart'
    var minWidth = 1180
    var btnWidth = $(btn).width();
    var w = minWidth + (btnWidth * 2) + 20;

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var wWidth = $(window).width();
        var pointHeight = $(document).height() - $('footer').outerHeight() - $(window).height();

        if(top > pointHeight){
            $(btn).addClass('active');
        }else{
            $(btn).removeClass('active');
        }

        if(top < 200 || wWidth < w){
            $(btn).fadeOut('slow');
        }else{
            $(btn).fadeIn('slow');
        }
    });
    $(window).trigger('scroll');
    $(window).resize(function(){
        $(window).trigger('scroll');
    });
    $(btn).click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },speed,easing);
    });
});

//familySite
$(document).ready(function(){
    var dropDown = '.familySite'

    $(dropDown).find('button').click(function(){
        $(this).next().slideToggle('fast');
        $(this).toggleClass('active');
    });
    $(dropDown).mouseleave(function(){
        var is = $(this).find('ul').is(':visible');
        if(is){
            $(dropDown).find('button').trigger('click');
        }
    });

    $(dropDown).find('a').click(function(e){
        e.preventDefault();

        alert('포트폴리오라서 해당사이트는 없습니다.\n그린컴퓨터 홈페이지로 이동됩니다.');

        var url = $(this).attr('href');
        window.open(url);
    });
});

//sitemap
$(document).ready(function(){
    $('.fTop .sitemap').colorbox({
        iframe: true,
        width: 1180,
        height: 740,
        scrolling: false,
        onOpen: function(){
            $('html,body').css('overflow','hidden');
        },
        onClosed: function(){
            $('html,body').css('overflow','visible');
        },
    });
});