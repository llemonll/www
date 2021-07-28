
var timeonoff; //자동기능 구현
var imageCount = 4; //이미지 개수 *** 
var cnt = 1; //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
var direct = 1; //1씩 증가(+1)/감소(-1)
var position = 0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000

$(document).ready(function () {


   timeonoff = setInterval(moveg, 4000); //4초마다 자동기능 


   $('.con .btn').click(function () {

      clearInterval(timeonoff);

      if ($(this).is('.btnRight')) {
         if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(5)라면 초기화 0
         if (cnt == imageCount + 1) cnt = 1;
         cnt++; //카운트 1씩증가
      } else if ($(this).is('.btnLeft')) {
         if (cnt == 1) cnt = imageCount + 1;
         if (cnt == 0) cnt = imageCount;
         cnt--; //카운트 감소
      }
      //console.log(cnt);
      $('.gallery').animate({
         left: (cnt - 1) * -1200
      }, 'slow');


      if ($(this).is('.btnRight')) {
         if (cnt == imageCount) cnt = 0;
      } else if ($(this).is('.btnLeft')) {
         if (cnt == 1) cnt = imageCount + 1;
      }

      timeonoff = setInterval(moveg, 4000);

   });

});

function moveg() {
   cnt += direct; //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......
   //각각의 카운트에 대한 left 좌표값을 처리
   if (cnt == 1) {
      position = 0;
   } else if (cnt == 2) {
      position = -1200;
   } else if (cnt == 3) {
      position = -2400;
   } else if (cnt == 4) {
      position = -3600;
   }

   $('.gallery').animate({
      left: position
   }, 1200); //겔러리 무비의 left값을 움직여라~
   if (cnt == imageCount) direct = -1;
   if (cnt == 1) direct = 1;
}