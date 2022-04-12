//afield
$(document).ready(function(){
    //탭바
    var btn = '.afieldWrap .tabbox .btn a';
    var contents = '.afieldWrap .tabbox .afieldContentsWrap > ul';

    $(btn).first().addClass('active'); 
    $(contents).first().fadeIn(0); 


    $.ajax({
        url: "../js/afield.json",
        dataType: "json",
        success: function(data){
            var data01 = data.stationery;
            var data02 = data.book;
            var data03 = data.prop;
            var data04 = data.crafts;

            var dataArray = [data01,data02,data03,data04];

            function dataPrint(index){ //데이터를 가져오기 위한 배열 번호 처리
                if(dataArray[index].length > 0){ //데이터가 있다면
                    var ul = $('<ul />');
                    $('.afieldContentsWrap').append(ul);

                    for(var i in dataArray[index]){
                        var li = $('<li />');
                        var figure = $('<figure />');
                        var figcaption = $('<figcaption />');

                        var $title = dataArray[index][i].title;
                        var $out = dataArray[index][i].out;
                        var $src = dataArray[index][i].src;
                        
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

                    var moreBtnWrap = $('<div class="moreBtnWrap" />');
                    var moreBtn = $('<button type="button">더보기</button>');

                    ul.after(moreBtnWrap);
                    moreBtnWrap.append(moreBtn);


                    //더보기버튼
                    var totalNum = $('.afieldContentsWrap ul').find('> li').size();
                    var currentNum = 6;
                                    
                    $('.moreBtnWrap button').click(function(){
                        if(currentNum < totalNum){
                            currentNum += 6;
                        
                            $('.afieldContentsWrap li:lt(' + currentNum + ')').stop().slideDown('fast');
                        }else{
                            alert('마지막 리스트입니다.');
                        }
                    });
                }
            }
            //초기실행
            dataPrint(0);
            
            //클릭이벤트
            $(btn).click(function(e){
                e.preventDefault(); //기본이벤트 제거 - 클릭시 위로 올라가는 것 방지

                //버튼활성화
                $(btn).removeClass('active');
                $(this).addClass('active');

                var index = $(this).parent().index();

                $(contents).find('ul').stop().fadeOut('fast');
                $(contents).find('ul').eq(index).stop().fadeIn('fast');
                
                $('.afieldContentsWrap ul').remove(); //문서객체를 제거
                
                $('.afieldContentsWrap').empty();
                dataPrint(index);
            });
            
        },
        error: function(){
            $('.afieldContentsWrap').html('데이터를 가져오지 못했습니다.');
        }
    });

});