// 6-1 윤리규범

$(document).ready(function () {
    //$('.content_area .con div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var pro0 = $('.con1_icon dl:eq(0)').offset().top-700;
    var pro1 = $('.con1_icon dl:eq(1)').offset().top-800;
    var pro2 = $('.con1_icon dl:eq(2)').offset().top-900;
    console.log(pro0); console.log(pro1); console.log(pro2);

    //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        //스크롤의 거리의 범위를 처리
        if (scroll >= 0 && scroll < pro0) {
            $('.con1_icon dl:eq(0)').addClass('boxMove');
            $('.con1_icon dl:eq(3)').addClass('boxMove');
        } else if (scroll >= pro0 && scroll < pro1) {
            $('.con1_icon dl:eq(1)').addClass('boxMove');
            $('.con1_icon dl:eq(4)').addClass('boxMove');
        } else if (scroll >=pro2) {
            $('.con1_icon dl:eq(2)').addClass('boxMove');
            $('.con1_icon dl:eq(5)').addClass('boxMove');
        } 
        
        
    });
});

