
$(document).ready(function(){
    $('.con:eq(0)').show(); 
      $('.a_tab').click(function(e){
          e.preventDefault();   
          var ind = $(this).index('.a_tab');  
          console.log(ind);
          $(".con").hide(); 
          $(".con:eq("+ind+")").show(); 
          
    $('.title_area .tab li').removeClass('current')
    $('.title_area .tab li:eq('+ind+')').addClass('current')
     });
});

//1-1-3 연혁 
var n = 0;

$(document).ready(function () {

  $('.con:eq(0)').show();
  $(".con2_history:eq(0)").show();
  
  /**
   * 회사 소개 탭 클릭 이벤트 
   */
  $('.h_tab').click(function (e) {
    e.preventDefault();
    var ind = $(this).index('.h_tab');

    // 연혁 > 년도 탭 클릭 함수 호출
    moveCon2History(ind);
  });


   // 마우스 휠 이벤트
  

  $('.con2_history').on('mousewheel DOMMouseScroll', function (e) {
    e.preventDefault();
    
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
    }

    var liLength = $('.con2_tab li').length;
    var liIdx = $('.con .con2_tab li').index($('.con .con2_tab li.current'));
    var flag = true;
    
    n = liIdx;

    // 휠 이동 (- 오른쪽, + 왼쪽)
    if (delta < 0) {
      n += 1;
      
      if (n >= liLength) {
        flag = false;
      }
    } else {
      n -= 1;

      if (n < 0) {
        flag = false;
      }
    }

    // 휠 이벤트 스탑 여부 체크 
    // 계속 옆으로 넘어가는것 방지
    if(!flag) {
      return;
    }

    if (n >= liLength) {
      n = (liLength - 1);
    } else if (n < 0) {
      n = 0;
    }

    // 연혁 > 년도 탭 클릭 함수 호출
    moveCon2History(n);
  });
});

/**
 * 연혁 > 년도
 * 탭 클릭
 */
function moveCon2History(ind) {
  $('.con .con2_tab li').removeClass('current')
  $('.con .con2_tab li:eq(' + ind + ')').addClass('current')
  $('.his_box').stop().animate({ left: -ind * 1200 + "px" },1300);
}


