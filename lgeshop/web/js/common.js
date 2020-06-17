$(document).ready(function(){
    if ($(window).width() < 1280) {
        $(".header .menu .container > ul > li > a").click(function(){
            $(this).closest('li').siblings().removeClass('on');
            $(this).closest('li').addClass('on');
        });
        $('.header .util .btn-menu').click(function(){
            menuOpen();
            bodyHidden();
        });

        $('.header .menu .menu-top ul li .btn-close').click(function(){
            menuClose();
            bodyAuto();
        })
    }
    
    tab();

    $('.header .util .ht-r .search-wrap > .btn-search').click(function(){
        $('.header .util .ht-r .search-wrap .search-input-wrap').toggle();
        $(this).toggleClass('open').toggleClass('close');
    });
});

/* 반응형 */
$(window).resize(function () {
    if ($(window).width() < 1280) {
        $(".header .menu .container > ul > li > a").click(function(){
            $(this).closest('li').siblings().removeClass('on');
            $(this).closest('li').addClass('on');
        });
        $('.header .util .btn-menu').click(function(){
            menuOpen();
            bodyHidden();
        });

        $('.header .menu .menu-top ul li .btn-close').click(function(){
            menuClose();
            bodyAuto();
        })
    }
});

function menuOpen(){
    $('.header .menu').addClass('on');
}

function menuClose() {
    $('.header .menu').removeClass('on');
}

// dim 생성
function dimMaker() {
    $('body').append('<div class="dim"></div>');
}

// dim 제거
function dimRemove() {
    $('.dim').remove();
}

// body scroll hidden
function bodyHidden() {
    $('body').css('overflow', 'hidden');
}

// body scroll auto
function bodyAuto() {
    $('body').css('overflow', 'auto')
}

function popOpen(id){
    var id;

    $("#" + id).addClass('on');
}

function popClose(id) {
    var id;

    $("#" + id).removeClass('on');
}

// 탭 클릭시 컨텐츠 보여지기
function tab(){
    $('.tab-wrap .tab-btn li').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    
        var tab = $(this).closest(".tab-wrap").find('li.on').children('a').attr('data-tab');
    
        $(this).closest(".tab-wrap").children(".tab-content[data-tab='"+ tab + "']").show();
        $(this).closest(".tab-wrap").children(".tab-content[data-tab='"+ tab + "']").not().siblings('.tab-content').hide();
    });    
}
