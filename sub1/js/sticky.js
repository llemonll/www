$(document).ready(function () {

    $('.tab li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화

    $('.content_area .con:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh = $('.visual').height();
    var h1 = $('.content_area .con:eq(1)').offset().top;
    var h2 = $('.content_area .con:eq(2)').offset().top;
  

    //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다

        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.

        //sticky menu 처리
        if (scroll > smh) {
            $('.title_area .tab').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        } else {
            $('.title_area .tab').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }

        //$('.tab li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!

        //스크롤의 거리의 범위를 처리
        if (scroll >= 0 && scroll < h1) {
            $('.tab li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            $('.content_area .con:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        } else if (scroll >= h1 && scroll < h2) {
            $('.tab li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            $('.content_area .con:eq(1)').addClass('boxMove');
        } else if (scroll >= h2) {
            $('.tab li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            $('.content_area .con:eq(2)').addClass('boxMove');
        }

    });


});