//indicator
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top > 80){
            $('#indicator').addClass('active');
        }else{
            $('#indicator').removeClass('active');
        }
    });

    var dropDown = '.mainMenu, .subMenu'
    $(dropDown).find('button').click(function(){
        $(this).next().slideToggle('fast');
        $(this).toggleClass('active');
    });
    $(dropDown).mouseleave(function(){
        var is = $(this).find('> ul').is(':visible');

        if(is){
            $(this).find('button').trigger('click');
        }
    });
});