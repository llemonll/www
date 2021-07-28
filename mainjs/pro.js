
$(document).ready(function () { 
    var ind = 0;
    $('.pro ul li a').hover(function () {
        ind = $(this).index('.pro ul li a');  // 0 1 2
        if (ind==1){
            $('.pro' + (ind + 1)).css({'left': '50%','margin-left':'-600px','width': '1200px', 'opacity': 1,'z-index': 10 });
            $(this).find('span').css({ 'margin-left': '-400px'});
        }else {
            $('.pro' + (ind + 1)).css({'left': '0','width': '1200px', 'opacity': 1,'z-index': 10});
        }
      
       $('h4').css('display', 'none');
       $(this).find('h4').css({'display':'block','width':'400px'}).stop().animate({ top: '250px' }, 1000);
       $(this).find('span').css({ 'display': 'block', 'width': '1000px', 'text-align': 'center'}).stop().animate({ top: '400px' }, 1000);
       if (ind==2){
           $(this).find('span').css({ 'margin-left': '-800px' });
           $(this).find('.pro ul li').css('filter','grey');
       }
    }, function () {
        if (ind==1){
            $('.pro' + (ind + 1)).css({'left': '50%','margin-left':'-200px','width': '400px','opacity': 1,'z-index': 1});  
        }else {
            $('.pro' + (ind + 1)).css({'left': 33.33 * ind + '%','width': '400px','margin':'0 auto','opacity': 0, 'z-index': 1,});
        }   
        $(this).find('span').css('display', 'none').stop().animate({ top: '790px' }, 1000);
        $('h4').css('display', 'block').stop().animate({ top: '60px' }, 1000);
    });   
});

