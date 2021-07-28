
// $(document).ready(function () {
//     var boxHeight = $('.con1 div:eq(0) ').height();
//     $('.con1 div:eq(1)').height(boxHeight);

//     $(window).resize(function () {
//         boxHeight = $('.con1 div:eq(0)').height();
//         $('.con1 div:eq(1)').css('height', boxHeight);
//     });

//     var boxHeight = $('.con2 div:eq(0) ').height();
//     $('.con2 div:eq(1)').height(boxHeight);

//     $(window).resize(function () {
//         boxHeight = $('.con2 div:eq(0)').height();
//         $('.con2 div:eq(1)').css('height', boxHeight);
//     });
// });


window.addEventListener('scroll', function () {
    //console.log(window.scrollY)
});
$(document).ready(function () {
    //스크롤 이벤트

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 120 && scroll< 200) {
            // console.log(scroll);
            // console.log($('.right_icon').offset())
            $('.ficon').css('left', 0);
        } 
        if(scroll > 200 && scroll < 300){
            $('.ficon').css('left', '20%');
        }
        if (scroll > 300 && scroll < 400) {
            $('.ficon').css('left','40%');
        }
        if (scroll > 400 && scroll < 500) {
            $('.ficon').css('left', '60%');
        }
        if (scroll > 500 && scroll < 600) {
            $('.ficon').css('left', '74%');
        }
    });

});
