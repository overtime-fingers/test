$(document).ready(function(){
    // $(window).scroll(function(){
    //     var height = $(document).scrollTop();
    //     if(height > 0){ 
    //         $('.header').addClass('on');
    //     }else if(height == 0){ 
    //         $('.header').removeClass('on');
    //     } 
    // });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 28,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      });
});