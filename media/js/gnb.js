
$(document).ready(function () {
   
    var screenSize = $(window).width();
    var screenHeight = $(window).height();
    $('#headerArea').css('position', 'absolute').css('top', screenHeight - 90)
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        

        if (screenSize > 1024 && scroll > screenHeight - 90) {
            // $('#headerArea h1').hide();
            // $('#headerArea').css('position', 'fixed').css( 'height', gnb_height);
            $('#headerArea').css('position', 'fixed').css('top', 0);
        } else {
            // $('#headerArea h1').show();
            // $('#headerArea').css('position', 'absolute').css({ height: screenHeight, top: 0 });
            $('#headerArea').css('position', 'absolute').css('top', screenHeight - 90);
        };
    });
    $(window).resize(function () {
        var screenSize = $(window).width();
        var screenHeight = $(window).height();
        var scroll = $(window).scrollTop();
        var gnb_height = $('#gnb').height();

        if (screenSize > 1024 && scroll > screenHeight - 90) {
            // $('#headerArea h1').hide();
            $('#headerArea').css('position', 'fixed').css('height', gnb_height);
        } else {
            // $('#headerArea h1').show();
            $('#headerArea').css('position', 'absolute').css({ 'top': screenHeight -80 });
        };
    });
    
});


$(document).ready(function(){
    var burger = $('.menu-trigger');

    burger.each(function (index) {
        var $this = $(this);

        $this.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active-' + (index + 12));
        })
    });

    $(".menu-trigger").toggle(function() {
	    $("#gnb").slideDown('slow');
   }, function() {
        $("#gnb").slideUp('slow');
   });
   


})







// 상단이동 코드
$(document).ready(function () {
    $(window).on('scroll', function () { // 스크롤의 위치가 바뀌면 발생하는 이벤트
        var scroll = $(window).scrollTop(); //스크롤의 상단 부터의 거리
    });
    // top메뉴를 클릭하면 상단으로 이동시킨다 
    $('.top_move').click(function (e) {
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1500); // 스크롤의 위치를 이동시킨다
    });
});