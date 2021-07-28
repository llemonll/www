
$(document).ready(function(){
    $('.con:eq(0)').show(); 
      $('.a_tab').click(function(e){
          e.preventDefault();   
          var ind = $(this).index('.a_tab');  
          // console.log(ind);
          $(".con").hide(); 
          $(".con:eq("+ind+")").show(); 

    $('.title_area .tab li').removeClass('current')
    $('.title_area .tab li:eq('+ind+')').addClass('current')
     });
    
});



window.addEventListener('scroll', function () {
  //console.log(window.scrollY)
});
$(document).ready(function () {
  //스크롤 이벤트

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 120 && scroll < 200) {
      // console.log(scroll);
      // console.log($('.right_icon').offset())
      $('.ficon').css('left', 0);
    }
    if (scroll > 200 && scroll < 300) {
      $('.ficon').css('left', '20%');
    }
    if (scroll > 300 && scroll < 400) {
      $('.ficon').css('left', '40%');
    }
    if (scroll > 400 && scroll < 500) {
      $('.ficon').css('left', '60%');
    }
    if (scroll > 500 && scroll < 600) {
      $('.ficon').css('left', '74%');
    }
  });

});