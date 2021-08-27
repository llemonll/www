
$(document).ready(function () {
    var cnt = 1;
    var imageCount = 3;

    $('.gallery_top1').css('background', 'url(/sub3/images/content2/con1.jpg)');
    $('.gallery_top2').css('background', 'url(/sub3/images/content2/rnd1.jpg)');
    $('.gallery_top3').css('background', 'url(/sub3/images/content2/rndb1.jpg)');
    $('.gallery_top').show();

    $('.gallery_bot li:eq(0)').addClass('select');
    $('.gallery_bot li:eq(4)').addClass('select');
    $('.gallery_bot li:eq(8)').addClass('select');

    $('.gallery_bot li a').click(function (e) {
        e.preventDefault();
        ind = $(this).index('.gallery_bot li a');
       
        $('.gallery_bot li').removeClass('select');
        $('.gallery_bot li:eq(' + ind + ')').addClass('select');

        if(ind>3&&ind<=7){ind=ind-4;
        }else if(ind>7){ind=ind-8;};
        
       

        // if(ind>=10) ind = ind - 10;

        //console.log(ind);

        $('.gallery_top1').css('background', 'url(/sub3/images/content2/con' + (ind + 1) + '.jpg)');
        $('.gallery_top2').css('background', 'url(/sub3/images/content2/rnd' + (ind + 1) + '.jpg)');
        $('.gallery_top3').css('background', 'url(/sub3/images/content2/rndb' + (ind + 1) + '.jpg)');
        $('.gallery_top').show();


    

        cnt = ind + 1;
    });


    // 좌 우 버튼
    $('.btn').click(function () {


        if ($(this).is('.btnRight')) {
            if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(5)라면 초기화 0
            if (cnt == imageCount + 1) cnt = 1;
            // if( cnt > 10) cnt = cnt - 10;


            $('.gallery_top1').css('background', 'url(/sub3/images/content2/con' + (cnt+1) + '.jpg)');
            $('.gallery_top2').css('background', 'url(/sub3/images/content2/rnd' + (cnt + 1) + '.jpg)');
            $('.gallery_top3').css('background', 'url(/sub3/images/content2/rndb' + (cnt + 1) + '.jpg)');
            $('.gallery_top').show();

            
            $('.gallery_bot li').removeClass('select');
            $('.gallery_bot li:eq(' + cnt + ')').addClass('select');
            $('.gallery_bot li:eq(' + (cnt + 4) + ')').addClass('select');
            $('.gallery_bot li:eq(' + (cnt + 8) + ')').addClass('select');
            cnt++; 


        } else if ($(this).is('.btnLeft')) {
            if (cnt == 1) cnt = imageCount + 1;
            if (cnt == 0) cnt = imageCount;
            // if( cnt > 10) cnt = cnt - 10;
            
            $('.gallery_top1').css('background', 'url(/sub3/images/content2/con' + (cnt - 1) + '.jpg)');
            $('.gallery_top2').css('background', 'url(/sub3/images/content2/rnd' + (cnt - 1) + '.jpg)');
            $('.gallery_top3').css('background', 'url(/sub3/images/content2/rndb' + (cnt - 1) + '.jpg)');
            $('.gallery_top').show();
            $('.gallery_bot li').removeClass('select');
            $('.gallery_bot li:eq(' + (cnt - 2) + ')').addClass('select');
            $('.gallery_bot li:eq(' + (cnt - 6) + ')').addClass('select');
            $('.gallery_bot li:eq(' + (cnt - 10) + ')').addClass('select');
            cnt--;


        }
    });
});
