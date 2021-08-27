$(document).ready(function () {

  $('.dropdownmenu').hover(
    function () {
      $('.dropdownmenu .menu ul').fadeIn('normal', function () { $(this).stop(); });
      $('#headerArea').animate({ height: 380 }, 'normal').clearQueue();
    }, function () {
      $('#headerArea').css('overflow', 'hidden');
      $('#headerArea').animate({ height: 180 }, 'normal').clearQueue();
    });

  $('.dropdownmenu .menu').hover(
    function () {
      $('a.depth1', this).css('color', '#0065b3', function () { $(this).stop(); });
    }, function () {
      $('a.depth1', this).css('color', '#333');
    });

  $('.dropdownmenu .menu ul li ').hover(
    function () {
      // $('a', this).css('font-weight', '600');
      $('a', this).css('color', '#0065b3', function () { $(this).stop(); });
    }, function () {
      $('a', this).css('color', '#333');
      // $('a', this).css('font-weight', '400');

});


//키보드 tab처리

$('.dropdownmenu .menu').on('focus', function () {
  $('#headerArea').animate({ height: 380 }, 'fast').clearQueue();

  });

  $('.dropdownmenu .menu ul li a').on('focus', function () {
    $('#headerArea').animate({ height: 380 }, 'fast').clearQueue();

  });

  $('.dropdownmenu .menu ul li:last').find('a').on('blur', function () {
    $('#headerArea').animate({ height: 185 }, 'fast').clearQueue();

  });
});

// 푸터 패밀리사이트

$(document).ready(function () {

  $('.familysite .arrow').toggle(function () {
    $('.familysite .family_list').fadeIn('slow');
  }, function () {
    $('.familysite .family_list').fadeOut('slow');
  });

  //tab키 처리
  $('.familysite .arrow').on('focus', function () {
    $('.familysite .family_list').show();
  });
  $('.familysite .family_list li:last').find('a').on('blur', function () {
    $('.familysite .family_list').hide();
  });
});


//movetop 처리

$(function ($) {

  $(window).bind('scrollstart scrollend', function (evt) {
    if (evt.type == 'scrollstart') {
      $(".topMove").fadeOut("fast");
    }
    if (evt.type == 'scrollend') {
      $(".topMove").fadeIn("slow");
    }
  });

});

$('.topMove').click(function (e) {
  e.preventDefault();
  //상단으로 스르륵 이동합니다.
  $("html,body").stop().animate({
    "scrollTop": 0
  }, 1000); // 스크롤의 위치를 이동시킨다
});