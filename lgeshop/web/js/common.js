$(document).ready(function(){
    if ($(window).width() < 1280) {
        // 모바일 메뉴 클릭시
        $(".header .menu .container > ul > li > a").click(function(){
            $(this).closest('li').siblings().removeClass('on');

            // on클래스 여부 체크
            if ($(this).closest('li').hasClass('on')) {
                $(this).closest('li').removeClass('on');
            } else{
                $(this).closest('li').addClass('on');
            }
        });

        // 모바일 메뉴 버튼 클릭시
        $('.header .util .btn-menu').click(function(){
            menuOpen();
            bodyHidden();
        });

        // 모바일 메뉴 닫기 버튼 클릭시
        $('.header .menu .menu-top ul li .btn-close').click(function(){
            menuClose();
            bodyAuto();
        })
    }
    
    // 탭
    tab();

    // header 검색영역
    $('.header .util .ht-r .search-wrap > .btn-search').click(function(){
        $('.header .util .ht-r .search-wrap .search-input-wrap').toggle();
        $(this).toggleClass('open').toggleClass('close');
    });
});

/* 반응형 */
$(window).resize(function () {
    if ($(window).width() < 1280) {
        // 모바일 메뉴 클릭시
        $(".header .menu .container > ul > li > a").click(function () {
            $(this).closest('li').siblings().removeClass('on');

             // on클래스 여부 체크
            if ($(this).closest('li').hasClass('on')) {
                $(this).closest('li').removeClass('on');
            } else {
                $(this).closest('li').addClass('on');
            }
        });

        // 모바일 메뉴 버튼 클릭시
        $('.header .util .btn-menu').click(function(){
            menuOpen();
            bodyHidden();
        });

        // 모바일 메뉴 닫기 버튼 클릭시
        $('.header .menu .menu-top ul li .btn-close').click(function(){
            menuClose();
            bodyAuto();
        })
    }
});

// 메뉴열기
function menuOpen(){
    $('.header .menu').addClass('on');
}

// 메뉴닫기
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

// 팝업열기
function popOpen(id){
    var id;

    $("#" + id).addClass('on');
}

// 팝업닫기
function popClose(id) {
    var id;

    $("#" + id).removeClass('on');
}

/* 이미지 자동변환 */
function imgChange(object) {
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

// 탭 클릭시 컨텐츠 보여지기
function tab(){
    $('.tab-wrap .tab-btn li').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    
        var tab = $(this).closest(".tab-wrap").find('li.on').children('a').attr('data-tab');
    
        $(this).closest(".tab-wrap").children('.tab-cont-wrap').children(".tab-content[data-tab='"+ tab + "']").show();
        $(this).closest(".tab-wrap").children('.tab-cont-wrap').children(".tab-content[data-tab='"+ tab + "']").not().siblings('.tab-content').hide();
    });    
}
