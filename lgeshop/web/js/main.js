var visualImg;
var bannerImg;

$(window).on('load',function(){
    // 바꿀 이미지 선택
    visualImg = $('.main .main-visual .slider-wrap img');
    bannerImg = $('.main .banner-wrap .slider-wrap img');
});
$(document).ready(function(){
    // 바꿀 이미지 선택
    visualImg = $('.main .main-visual .slider-wrap img');
    imgChange(visualImg);

    bannerImg = $('.main .banner-wrap .slider-wrap img');
    imgChange(bannerImg);

    // 메인 비쥬얼 영역 슬라이드
    $('.main-visual .slider-wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true
    });

    // 베스트 영역 슬라이드
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

    // 배너 영역 슬라이드
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
    // 바꿀 이미지 선언
    imgChange(visualImg);
    imgChange(bannerImg);
});
