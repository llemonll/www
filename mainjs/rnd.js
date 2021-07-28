let mainBusinessNum = 0;//비즈니스 배너번호
let mainBusinessBeforeNum = 0;//비즈니스 이전배너번호
let mainBusinessTotalNum = 0;//비즈니스 전체 숫자
let movieDis = true;
//비즈니스 영역 화살표 클릭
function businessArrowClickHandler(e) {
    $(".main_business_area .main_business_slider .slider_nav button").unbind('click', businessArrowClickHandler);
    mainBusinessBeforeNum = mainBusinessNum
    switch ($(e.currentTarget).index()) {
        case 0:
            if (mainBusinessNum > 0) {
                mainBusinessNum--;
            } else {
                mainBusinessNum = mainBusinessTotalNum - 1
            }
            movieDis = false
            break;
        case 1:
            if (mainBusinessNum < (mainBusinessTotalNum - 1)) {
                mainBusinessNum++;
            } else {
                mainBusinessNum = 0
            }
            movieDis = true
            break;
    }
    settingBusinessArea01();
    settingBusinessArea02();
    settingBusinessArea03();
    setTimeout(function () {
        $(".main_business_area .main_business_slider .slider_nav button").bind('click', businessArrowClickHandler);
    }, 1000)
}
//비즈니스 영역 셋팅
function settingBusinessArea01() {
    $(".main_business_area .main_business_slider ul.slider01 li").each(function () {
        $(this).css("z-index", 0);
    })
    let $thisBanner = $(".main_business_area .main_business_slider ul.slider01 li").eq(mainBusinessNum)
    let $beforeBanner = $(".main_business_area .main_business_slider ul.slider01 li").eq(mainBusinessBeforeNum)
    $thisBanner.css("z-index", 2);
    $beforeBanner.css("z-index", 1);
    if (movieDis) {
        TweenMax.to($thisBanner, 0, { left: 480, ease: Cubic.easeOut });
        TweenMax.to($beforeBanner, 1.2, { left: -450, ease: Cubic.easeOut });
    } else {
        TweenMax.to($thisBanner, 0, { left: -480, ease: Cubic.easeOut });
        TweenMax.to($beforeBanner, 1.2, { left: 450, ease: Cubic.easeOut });
    }
    TweenMax.to($thisBanner.find("img"), 0, { scale: 1.2, ease: Cubic.easeOut });
    TweenMax.to($thisBanner.find("img"), 1.2, { scale: 1, ease: Cubic.easeOut });
    TweenMax.to($thisBanner, 1.2, { left: 0, ease: Cubic.easeOut });
}
//비즈니스 영역 셋팅
function settingBusinessArea02() {
    $(".main_business_area .main_business_slider ul.slider02 li").each(function () {
        $(this).css("z-index", 0);
    })
    let thisBisNum = mainBusinessNum + 1
    let thisBisBeforeNum = mainBusinessBeforeNum + 1
    if (thisBisNum >= mainBusinessTotalNum) thisBisNum = 0
    if (thisBisBeforeNum >= mainBusinessTotalNum) thisBisBeforeNum = 0
    let $thisBanner = $(".main_business_area .main_business_slider ul.slider02 li").eq(thisBisNum)
    let $beforeBanner = $(".main_business_area .main_business_slider ul.slider02 li").eq(thisBisBeforeNum)
    $thisBanner.css("z-index", 2);
    $beforeBanner.css("z-index", 1);
    if (movieDis) {
        TweenMax.to($thisBanner, 0, { left: 360, ease: Cubic.easeOut });
        TweenMax.to($beforeBanner, 1.2, { left: -360, ease: Cubic.easeOut });
    } else {
        TweenMax.to($thisBanner, 0, { left: -360, ease: Cubic.easeOut });
        TweenMax.to($beforeBanner, 1.2, { left: 360, ease: Cubic.easeOut });
    }
    TweenMax.to($thisBanner.find("img"), 0, { scale: 1.2, ease: Cubic.easeOut });
    TweenMax.to($thisBanner.find("img"), 1.2, { scale: 1, ease: Cubic.easeOut });
    TweenMax.to($thisBanner, 1.2, { left: 0, ease: Cubic.easeOut });
}

function settingBusinessArea03() {
    $(".main_business_area .main_business_slider ul.slider03 li").each(function () {
        $(this).css("z-index", 0);
    })
    let thisBisNum = mainBusinessNum + 2
    let thisBisBeforeNum = mainBusinessBeforeNum + 2
    if (thisBisNum == mainBusinessTotalNum) thisBisNum = 0
    if (thisBisBeforeNum == mainBusinessTotalNum) thisBisBeforeNum = 0
    if (thisBisNum > mainBusinessTotalNum) thisBisNum = 1
    if (thisBisBeforeNum > mainBusinessTotalNum) thisBisBeforeNum = 1
    let $thisBanner = $(".main_business_area .main_business_slider ul.slider03 li").eq(thisBisNum)
    let $beforeBanner = $(".main_business_area .main_business_slider ul.slider03 li").eq(thisBisBeforeNum)
    $thisBanner.css("z-index", 2);
    $beforeBanner.css("z-index", 1);
    if (movieDis) {
        TweenMax.to($thisBanner, 0, { left: 360, ease: Cubic.easeOut });
        TweenMax.to($beforeBanner, 1.2, { left: -360, ease: Cubic.easeOut });
    } else {
        TweenMax.to($thisBanner, 0, { left: -360, ease: Cubic.easeOut });
        TweenMax.to($beforeBanner, 1.2, { left: 360, ease: Cubic.easeOut });
    }
    TweenMax.to($thisBanner.find("img"), 0, { scale: 1.2, ease: Cubic.easeOut });
    TweenMax.to($thisBanner.find("img"), 1.2, { scale: 1, ease: Cubic.easeOut });
    TweenMax.to($thisBanner, 1.2, { left: 0, ease: Cubic.easeOut });
}


$(document).ready(function () {
    $(".main_business_area .main_business_slider .slider_nav button").bind('click', businessArrowClickHandler);
    mainBusinessTotalNum = $(".main_business_area .main_business_slider ul.slider01 li").length
    $(".main_business_area .main_business_slider ul.slider01 li").eq(mainBusinessNum).css("z-index", 1);
    $(".main_business_area .main_business_slider ul.slider02 li").eq(mainBusinessNum + 1).css("z-index", 1);
    $(".main_business_area .main_business_slider ul.slider03 li").eq(mainBusinessNum + 2).css("z-index", 1);
});
