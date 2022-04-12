//joinChk
$(document).ready(function(){
    var allChk = '#allChk';
    var chk01 ='#termsChk01';
    var chk02 ='#termsChk02';
    var btn = '#joinChk a';

    $(allChk).change(function(){
        var chk = $(this).prop('checked');

        if(chk){
            $(chk01).add(chk02).prop('checked',true);
        }else{
            $(chk01).add(chk02).prop('checked',false);
        }
    });

    $(chk01).add(chk02).change(function(){
        var c01 = $(chk01).prop('checked');
        var c02 = $(chk02).prop('checked');
        
        if(c01 && c02){
            $(allChk).prop('checked',true);
        }else{
            $(allChk).prop('checked',false);
        }
    });

    $(btn).click(function(e){
        e.preventDefault();

        var c01 = $(chk01).prop('checked');
        var c02 = $(chk02).prop('checked');
        var c03 = $(allChk).prop('checked');

        if(c01 && c02 && c03){
            location.href = $(this).attr('href');
        }else{
            alert('모든 약관을 체크해주세요.');
        }
    });
});

//joinForm_email
$(document).ready(function(){
    var emailInput = '#email01';
    var select = '#email02';

    $(select).change(function(){
        var iv = $(emailInput).val();
        var sv = $(this).val();
        if(sv == '직접입력'){
            $(emailInput).val('');
        }else{
            $(emailInput).val(iv + '@' + sv);
        }
    });
});

//joinForm - 완료페이지 이동
$(document).ready(function(){

    $('#joinForm').submit(function(e){
        e.preventDefault(); 

        location.href = 'join_complete.html';
    });
});

//joinForm - 생년월일
$(document).ready(function(){
    var yBox = '#birthYear';
    var mBox = '#birthMonth';
    var dBox = '#birthDate';

    var today = new Date();
    var tYear = today.getFullYear(); 

    var yOption = '';
    var mOption = '';
    var dOption = '';

    //년도의 옵션
    for(var i=tYear;i>=1900;i--){
        yOption += '<option>' + i + '</option>';
    }
    $(yBox).html(yOption);

    //월의 옵션
    for(var i=1;i<=12;i++){
        mOption += '<option>' + i + '</option>';
    }
    $(mBox).html(mOption);

    function dateList(y,m){ 
        dOption = '';

        var mArray = [31,28,31,30,31,30,31,31,30,31,30,31];

        //윤달
        if((y % 4 == 0 && y % 100 != 0) || y % 400 == 0){
            mArray[1] = 29;
        }

        //일옵션
        for(var i=1;i<=mArray[m-1];i++){
            dOption += '<option>' + i + '</option>';
        }
        $(dBox).html(dOption);
    }

    dateList(tYear,1);

    $(yBox).add(mBox).change(function(){
        var y = $(yBox).val();
        var m = $(mBox).val();

        dateList(y,m);
    });

});
