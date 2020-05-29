$(document).ready(function(){
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if(height > 0){ 
            $('.header').addClass('on');
        }else if(height == 0){ 
            $('.header').removeClass('on');
        } 
    })
});