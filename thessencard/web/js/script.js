$(document).ready(function () {

    // 모바일 메뉴
    $('.header .btn-menu').click(function(){
        $('.header .menu-wrap').css('display', 'block');
        $("body").append("<div class='dim'></div>").css('overflow','hidden');
    });
    $('.header .menu-wrap .menu-top-m .menu-close').click(function () {
        $('.header .menu-wrap').css('display', 'none');
        $('div').remove('.dim');
        $("body").css('overflow', 'auto');
    });

    // 검색 영역 - 카드사 선택
    $('.search-wrap .card-drop-wrap button').click(function(){
        $('.search-wrap .card-drop-wrap .card-choice-wrap').toggleClass('on');
    });

    $('.search-wrap .card-drop-wrap .card-choice-wrap ul li a').click(function(){
        $('.search-wrap .card-drop-wrap .card-choice-wrap').toggleClass('on');
    });

    // 별점
    $('.review-write-wrap .input-wrap .star-grade-wrap span').click(function () {
        $(this).parent().children('span').removeClass('on');
        $(this).addClass('on').prevAll('span').addClass('on');
        return false;
    });

    // 아코디언
    $('.detail-wrap .acc-wrap .acc-tit').click(function(){
        $(this).closest('.detail-wrap .acc-wrap').siblings('.detail-wrap .acc-wrap').removeClass('on');
        $(this).closest('.detail-wrap .acc-wrap').addClass('on');
    });

    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});

function openPop(id){
    console.log(id);
    $('#' + id).show();
    $("body").append("<div class='dim'></div>").css('overflow','hidden');
}

function closePop(id){
    $('#' + id).hide();
    $('div').remove('.dim');
    $("body").css('overflow', 'auto');
}
