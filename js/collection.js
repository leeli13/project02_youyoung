//collection
$(document).ready(function(){
    $.ajax({
        url: "../js/collection.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                var ul = $('<ul />');
                $('.collectionList').append(ul);
                for(var i in data){
                    var li = $('<li />');
                    var a = $('<a href="#" />');
                    var figure = $('<figure />');
                    var figcaption = $('<figcaption />');

                    var $title = data[i].title;
                    var $type1 = data[i].type1;
                    var $type2 = data[i].type2;
                    var $type3 = data[i].type3;
                    var $type4 = data[i].type4;
                    var $type5 = data[i].type5;
                    var $src = data[i].src;

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
                //더보기버튼
                var totalNum = $('.collectionList li').size();
				var currentNum = 6;

				$('.moreBtnWrap button').click(function(){
					if(currentNum < totalNum){
						currentNum += 6;

						$('.collectionList li:lt(' + currentNum + ')').stop().slideDown('fast');
					}else{
						alert('마지막 리스트입니다.');
					}
				});
            }
        },
        error: function(){
            $('.collectionList').html('데이터를 가져오지 못했습니다.');
        }
    });
});



