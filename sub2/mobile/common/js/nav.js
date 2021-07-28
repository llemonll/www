$(document).ready(function () {
     var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
     var documentHeight = $(document).height();
     $(".back_box").css('height', documentHeight);
     $("#gnb").css('height', documentHeight);

     $(".menu_btn").click(function () { //메뉴버튼 클릭시
         $("#gnb").css('height', documentHeight);
            $(".back_box").css('height', documentHeight);
         if (op == false) {
             $("#gnb").animate({ right: 0, opacity: 1 }, 'slow');
             $('#headerArea').addClass('mn_open');
             $(".back_box").show();
             op = true;
         } else {
             $("#gnb").animate({ right: '-70%', opacity: 0 }, 'slow');
             
             $('#headerArea').removeClass('mn_open');
             $(".back_box").hide();
             op = false;
        }
        
    });

    //2depth 메뉴 교대로 열기 처리 
    var onoff = [false, false, false, false];
    var arrcount = onoff.length;

    $('#gnb .depth1 h3 a').click(function (e) {
        e.preventDefault();
        var ind = $(this).parents('.depth1').index();

        console.log(ind);

        if (onoff[ind] == false) {
            //$('#gnb .depth1 ul').hide();
            $(this).parents('.depth1').find('ul').slideDown('slow');
            $(this).parents('.depth1').siblings('li').find('ul').slideUp('slow');
            for (var i = 0; i < arrcount; i++) onoff[i] = false;
            onoff[ind] = true;

            $('.depth1 span').text('+');
            $(this).find('span').text('-');

        } else {
            $(this).parents('.depth1').find('ul').slideUp('slow');
            onoff[ind] = false;

            $(this).find('span').text('+');
        }
    });
    
});


// 푸터 패밀리사이트

$(document).ready(function () {

    $('.footer_right .arrow').toggle(function () {
        $('.footer_right .family_list').show();
        $('.footer_right').css('background', '#0065b3');
        $('.footer_right .arrow span').html('<i class="fas fa-chevron-up"></i>');
    }, function () {
        $('.footer_right .family_list').hide();
        $('.footer_right').css('background', '#222');
        $('.footer_right .arrow span').html('<i class="fas fa-chevron-down"></i>');
    });

});



// 상단 이동 


$(document).ready(function () {

    $('.topMove').hide(); //top버튼 보이지마~~~

    $(window).on('scroll', function () { // 스크롤의 위치가 바뀌면 발생하는 이벤트
        var scroll = $(window).scrollTop(); //스크롤의 상단 부터의 거리

        //   $('.text').text(scroll);  // 스크롤의 거리를 출력

        if (scroll > 500) { //스트롤 top의 거리가 500px 보다 커지면
            $('.topMove').fadeIn('slow'); //top메뉴가 보인다
        } else {
            $('.topMove').fadeOut('slow'); //top메뉴가 안보인다
        }
    });

    // top메뉴를 클릭하면 상단으로 이동시킨다 
    $('.topMove').click(function (e) {
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000); // 스크롤의 위치를 이동시킨다
    });


});
