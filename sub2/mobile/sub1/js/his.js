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
 
});

/**
 * 연혁 > 년도
 * 탭 클릭
 */
function moveCon2History(ind) {
    $('.con .con2_tab li').removeClass('current')
    $('.con .con2_tab li:eq(' + ind + ')').addClass('current')
    $('.his_box').stop().animate({ left: -ind * 100 + "%" }, 1000);
}