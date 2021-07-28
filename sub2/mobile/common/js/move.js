//$('.gallery_text li:eq(0)').fadeIn('slow'); //첫번째 텍스트만 보여라~~~
$('.btn1').css('background', '#0065b3'); //첫번째 불켜
$('.btn1').css('width', '25%');

var timeonoff; //자동기능 구현
var imageCount = 4; //이미지 개수 *** 
var cnt = 1; //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
var direct = 1; //1씩 증가(+1)/감소(-1)
var position = 0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

$(document).ready(function () {



    timeonoff = setInterval(moveg, 6000); //4초마다 자동기능 

    //moveg();

    $('.mbutton').click(function (event) { //각각의 버튼을 클릭한다면...
        var $target = $(event.target); //$target == this =>실제 클릭한 버튼
        clearInterval(timeonoff); //타이머를 중지!!

        for (var i = 1; i <= imageCount; i++) {
            $('.btn' + i).css('background', '#ccc'); //버튼 모두불꺼
            $('.btn' + i).css('width', '25%');
        }

        if ($target.is('.btn1')) { //첫번째 버튼을 클릭했다면...
            $('.gallery').animate({
                left: 0
            }, 1500);
            cnt = 1;
            direct = 1;
        } else if ($target.is('.btn2')) { //두번째 버튼을 클릭했다면...
            $('.gallery').animate({
                left: '-100%'
            }, 1500);
            cnt = 2;
        } else if ($target.is('.btn3')) { //세번째 버튼을 클릭했다면...
            $('.gallery').animate({
                left: '-200%'
            }, 1500);
            cnt = 3;
        } else if ($target.is('.btn4')) { //네번째 버튼을 클릭했다면...
            $('.gallery').animate({
                left: '-300%'
            }, 1500);
            cnt = 4;
        }

        $('.gallery_text li').hide();
        $('.gallery_text li:eq(' + (cnt - 1) + ')').fadeIn('slow');
        $('.btn' + cnt).css('background', '#0065b3'); //자신 버튼만 불켜 
        $('.btn' + cnt).css('width', '25%');

        timeonoff = setInterval(moveg, 4000); //타이머의 재 동작

        if (onoff == false) {
            onoff = true;
            $('.ps').css('img', 'images/pause.svg');
        }
    });

    //stop/play 버튼 클릭시 타이머 동작/중지

    $('.ps').click(function () {
        if (onoff == true) {
            clearInterval(timeonoff); // stop버튼 클릭시
            $(this).css('background', 'url(images/pa.svg) 0 0 no-repeat');
            $(this).css('background-size', 'contain');
            onoff = false;
        } else {
            timeonoff = setInterval(moveg, 6000); //play버튼 클릭시
            $(this).css('background', 'url(images/st.svg)  no-repeat')
            $(this).css('background-size', 'contain');
            onoff = true;
        }
    });

    $('.visual .btn').click(function () {

        clearInterval(timeonoff);

        if ($(this).is('.btnRight')) {
            if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(5)라면 초기화 0
            if (cnt == imageCount + 1) cnt = 1;
            cnt++; //카운트 1씩증가
        } else if ($(this).is('.btnLeft')) {
            if (cnt == 1) cnt = imageCount + 1;
            if (cnt == 0) cnt = imageCount;
            cnt--; //카운트 감소
        }
        //console.log(cnt);
        $('.gallery').animate({
            left: (cnt - 1) * '-100%'
        }, 'slow');

        for (var i = 1; i <= imageCount; i++) {
            $('.btn' + i).css('background', '#ccc'); //버튼 모두불꺼
            $('.btn' + i).css('width', '25%');
        }
        $('.btn' + cnt).css('background', '#0065b3'); //자신 버튼만 불켜 
        $('.btn' + cnt).css('width', '25%');

        if ($(this).is('.btnRight')) {
            if (cnt == imageCount) cnt = 0;
        } else if ($(this).is('.btnLeft')) {
            if (cnt == 1) cnt = imageCount + 1;
        }

        timeonoff = setInterval(moveg, 6000);

        if (onoff == false) {
            onoff = true;
            $('.ps').css('background', 'url(images/pa.svg)');
        }
    });

});

function moveg() {
    cnt += direct; //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......
    //각각의 카운트에 대한 left 좌표값을 처리
    if (cnt == 1) {
        position = 0;
    } else if (cnt == 2) {
        position = '-100%'
    } else if (cnt == 3) {
        position = '-200%'
    } else if (cnt == 4) {
        position = '-300%'
    }

    $('.gallery_text li ').hide(); //모든 텍스트를 안보이게...
    //$('.gallery_text li:eq(' + (cnt - 1) + ')').fadeIn('slow'); //해당 텍스트만 보여라

    setTimeout(function () {
        $('.gallery_text li:eq(' + (cnt - 1) + ')').fadeIn('slow')
    }, 1000);
    for (var i = 1; i <= imageCount; i++) {
        $('.btn' + i).css('background', '#ccc'); //버튼불다꺼!!
        $('.btn' + i).css('width', '25%');
    }
    $('.btn' + cnt).css('background', '#0065b3'); //자신만 불켜
    $('.btn' + cnt).css('width', '25%');

    $('.gallery').animate({
        left: position
    }, 1500); //겔러리 무비의 left값을 움직여라~
    if (cnt == imageCount) direct = -1;
    if (cnt == 1) direct = 1;
}

