$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    if($(document).scrollTop() > $('.insomnia').offset().top){
        $('.insomnia .container article .gauge span').animate({
            width : '86.9%'
        }, 700);
    }

    if($(document).scrollTop() > 0){
        $('header').addClass("fixed");
    } else{
        $('header').removeClass("fixed");
    }
    $(window).scroll(function(){
        if($(document).scrollTop() > $('.insomnia').offset().top){
            $('.insomnia .container article .gauge span').animate({
                width : '86.9%'
            }, 700);
        }

        if($(document).scrollTop() > 0){
            $('header').addClass("fixed");
        } else{
            $('header').removeClass("fixed");
        }
    })
});