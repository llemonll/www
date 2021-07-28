

var cnt = 1
$('.sub_tab ul li').hide();
$('.sub_tab ul .on').show();

$('.on').click(function (e) {

    e.preventDefault();

    if (cnt == 1) {
        cnt = 0;
        $('.sub_tab ul li').show();
        $('.on span').html('<i class="fas fa-chevron-up"></i>');
    } else {
        cnt = 1;
        $('.sub_tab ul li').hide();
        $('.on').show();
        $('.on span').html('<i class="fas fa-chevron-down"></i>');
       
    }
    
    
})

