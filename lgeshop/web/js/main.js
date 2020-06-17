var visualImg;
var bannerImg;

$(window).on('load',function(){
    visualImg = $('.main .main-visual .slider-wrap img');
    bannerImg = $('.main .banner-wrap .slider-wrap img');
});
$(document).ready(function(){
    visualImg = $('.main .main-visual .slider-wrap img');
    imgChange(visualImg);

    bannerImg = $('.main .banner-wrap .slider-wrap img');
    imgChange(bannerImg);

    $('.main-visual .slider-wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true
    });

    $('.best .slider-wrap').slick({
        rows: 1,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    rows: 2,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                }
            },
        ]
    });

    $('.banner-wrap .slider-wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: false,
    });
});

/* 반응형 */
$(window).resize(function () {
    imgChange(visualImg);
    imgChange(bannerImg);
});

/* 메인 배너 이미지 변환 */
function imgChange(object){
    $(object).each(function () {
        var srcName = $(this).attr('data-pc');
        var newSrc = $(this).attr('data-mobile');
        if ($(window).width() < 1280) {
            $(this).attr('src', newSrc);
        } else {
            $(this).attr('src', srcName);
        }
        
    });
}
