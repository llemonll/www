$(document).ready(function() {
    var screenSize = $(window).width();
    var screenHeight = $(window).height();

   //  $("#content").css('margin-top',screenHeight);
   $(".h2hline").css('height', screenHeight);
    if( screenSize > 768){
       $('.videoBox img').attr('src', 'images/sub2/main1.jpg');
  }
  if(screenSize <= 768){
     $('.videoBox img').attr('src', 'images/sub2/sub2_mo1.jpg');
  }
    
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screenSize = $(window).width(); 
    screenHeight = $(window).height();
        
   //  $("#content").css('margin-top',screenHeight);
    $(".h2hline").css('height', screenHeight);
       
    if( screenSize > 768){
       $('.videoBox img').attr('src','images/sub2/main1.jpg');
    }
    if(screenSize <= 768){
       $('.videoBox img').attr('src','images/sub2/sub2_mo1.jpg');
    }
  });   
   $('.down').click(function () {
      screenHeight = $(window).height();
      $('html,body').animate({ 'scrollTop': screenHeight - 86 }, 1000);
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