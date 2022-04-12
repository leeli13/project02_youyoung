//connect
$(document).ready(function(){
    var experienceBtn = '.experienceBtn'
    var displayBtn = '.displayBtn'
    var jobBtn ='.jobBtn'

    $(experienceBtn).click(function(e){
        e.preventDefault();
        var experience = $('.experience').offset();
        $('html, body').animate({
            scrollTop : experience.top - 250
        }, 400);
    });
    $(displayBtn).click(function(e){
        e.preventDefault();
        var display = $('.display').offset();
        $('html, body').animate({
            scrollTop : display.top - 250
        }, 400);
    });
    $(jobBtn).click(function(e){
        e.preventDefault();
        var job = $('.job').offset();
        $('html, body').animate({
            scrollTop : job.top - 250
        }, 400);
    });
});