//cfield
$(document).ready(function(){
    //탭바
    var btn = '.cfieldWrap .tabbox .btn a';
    var contents = '.cfieldWrap .tabbox .cfieldContentsWrap > ul';

    $(btn).first().addClass('active'); 
    $(contents).first().fadeIn(0); 


    $.ajax({
        url: "../js/cfield.json",
        dataType: "json",
        success: function(data){
            var data01 = data.pictures;
            var data02 = data.print;
            var data03 = data.sculpture;
            var data04 = data.crafts;
            var data05 = data.installation;

            var dataArray = [data01,data02,data03,data04,data05];

            function dataPrint(index){ //데이터를 가져오기 위한 배열 번호 처리
                if(dataArray[index].length > 0){ //데이터가 있다면
                    var ul = $('<ul />');
                    $('.cfieldContentsWrap').append(ul);

                    for(var i in dataArray[index]){
                        var li = $('<li />');
                        var a = $('<a href="#" />');
                        var figure = $('<figure />');
                        var figcaption = $('<figcaption />');

                        var $title = dataArray[index][i].title;
                        var $type1 = dataArray[index][i].type1;
                        var $type2 = dataArray[index][i].type2;
                        var $type3 = dataArray[index][i].type3;
                        var $type4 = dataArray[index][i].type4;
                        var $type5 = dataArray[index][i].type5;
                        var $src = dataArray[index][i].src;

                        var img = $('<img />').attr({
                            src: $src,
                            alt: $title
                        });

                        var h4 = $('<h4 />').html($title);

                        ul.append(li);
                        li.append(a);
                        a.append(figure);
                        figure.append(img);
                        figure.append(figcaption);
                        figcaption.append(h4);

                        if($type1 != ""){
                            var type01 = $('<p class="type01" />');
                            type01.html($type1);
                            figcaption.append(type01);
                        }
                        if($type2 != ""){
                            var type02 = $('<p class="type02" />');
                            type02.html($type2);
                            figcaption.append(type02);
                        }
                        if($type3 != ""){
                            var type03 = $('<p class="type03" />');
                            type03.html($type3);
                            figcaption.append(type03);
                        }
                        if($type4 != ""){
                            var type04 = $('<p class="type04" />');
                            type04.html($type4);
                            figcaption.append(type04);
                        }
                        if($type5 != ""){
                            var type05 = $('<p class="type05" />');
                            type05.html($type5);
                            figcaption.append(type05);
                        }
                    }

                    var moreBtnWrap = $('<div class="moreBtnWrap" />');
                    var moreBtn = $('<button type="button">더보기</button>');

                    ul.after(moreBtnWrap);
                    moreBtnWrap.append(moreBtn);


                    //더보기버튼
                    var totalNum = $('.cfieldContentsWrap ul').find('> li').size();
                    var currentNum = 6;
                                    
                    $('.moreBtnWrap button').click(function(){
                        if(currentNum < totalNum){
                            currentNum += 6;
                        
                            $('.cfieldContentsWrap li:lt(' + currentNum + ')').stop().slideDown('fast');
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
                
                $('.cfieldContentsWrap ul').remove(); //문서객체를 제거
                
                $('.cfieldContentsWrap').empty();
                dataPrint(index);
            });
            
        },
        error: function(){
            $('.cfieldContentsWrap').html('데이터를 가져오지 못했습니다.');
        }
    });

});