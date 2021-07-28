//6-3 환경 휠

var bn = $('.box').length;
$('.box').on('mousewheel DOMMouseScroll', function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
        delta = event.wheelDelta;
    }
    
    if (delta < 0) {
        n = $(this).index() + 1;
    } else {
        n = $(this).index() - 1;
    }
    
    if (n >= 2) {
        n = 2;
    } else if (n <= -1) {
        n = 0
    }
    console.log(n)
    $('.con3_con').stop().animate({bottom: n * 800 + 'px'});
});