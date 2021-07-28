
$(document).ready(function () {
    //$('.content_area .con div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var pro0 = $('.content_area .con div:eq(0)').offset().top;
    var pro1 = $('.content_area .con div:eq(1)').offset().top;
    var pro2 = $('.content_area .con div:eq(2)').offset().top;
    var pro3 = $('.content_area .con div:eq(3)').offset().top;

    //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        //스크롤의 거리의 범위를 처리
        if (scroll >= 0 && scroll < pro0) {
            $('.content_area .con div:eq(0)').addClass('boxMove');
        } else if (scroll >= pro0 && scroll < pro1) {
            $('.content_area .con div:eq(1)').addClass('boxMove');
        } else if (scroll >= pro1 && scroll < pro2) {
            $('.content_area .con div:eq(2)').addClass('boxMove');
        } else if (scroll >= pro2 && scroll < pro3) {
            $('.content_area .con div:eq(3)').addClass('boxMove');
        } else if (scroll >=pro4) {
            $('.content_area .con div:eq(3)').addClass('boxMove');
        }
    });
});