//author
$(document).ready(function(){
    var btn = '.authorWrap .tabbox .btn a';
    var contents = '.authorWrap .tabbox .contentsWrap > div';

    $(btn).first().addClass('active'); 
    $(contents).first().fadeIn(0);

    $(btn).click(function(e){
        e.preventDefault();

        $(btn).removeClass('active'); 
        $(this).addClass('active'); 

        var index = $(this).parents().index();

        $(contents).stop().fadeOut(0); 
        $(contents).eq(index).stop().fadeIn(0); 
    });
});

// art
$(document).ready(function(){
    $.ajax({
        url: "../js/art.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                var ul = $('<ul />');
                $('.artList').append(ul);

                for(var i in data){
                    var li = $('<li />');
                    var figure = $('<figure />');
                    var figcaption = $('<figcaption />');

                    var $title = data[i].title
                    var $out = data[i].out
                    var $src = data[i].src
                    
                    var mainImg = $('<img class="mainImg" />').attr({
                        src: $src,
                        alt: $title
                    })
                    var a = $('<a href="#" />');
                    var outImg = $('<img class="iconImg" />').attr({
                        src: $out,
                        alt: '찜하기아이콘'
                    })

                    ul.append(li);
                    li.append(figure);
                    figure.append(mainImg);
                    figure.append(figcaption);
                    figcaption.append(a);
                    a.append(outImg);

                }
                //더보기버튼
                var totalNum = $('.artList li').size();
				var currentNum = 6;

				$('.moreBtnWrap button').click(function(){
					if(currentNum < totalNum){
						currentNum += 6;

						$('.artList li:lt(' + currentNum + ')').stop().slideDown('fast');
					}else{
						alert('마지막 리스트입니다.');
					}
				});
            }
        },
        error: function(){
            $('.artList').html('데이터를 가져오지 못했습니다.');
        }
    });
});

