$(document).ready(function(){
    /* 아코디언 리스트 */
    $('.acc-list li .acc-tit').click(function(){
        $(this).closest('li').siblings('li').children('.acc-cont').hide();
        $(this).closest('li').children('.acc-cont').toggle();
    });

    /* 파일첨부 */
    var fileTarget = $('.input-file .upload-hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            // 파일명 추출
            var filename = $(this)[0].files[0].name;
        } 

        else {
            // Old IE 파일명 추출
            var filename = $(this).val().split('/').pop().split('\\').pop();
        };

        $(this).siblings('.upload-name').val(filename);
    });

    //preview image 
    var imgTarget = $('.preview-image .upload-hidden');

    imgTarget.on('change', function(){
        var parent = $(this).parent().children('.upload-display').children('.upload-thumb-wrap');

        if(window.FileReader){
            //image 파일만
            if (!$(this)[0].files[0].type.match(/image\//)) return;
            
            var reader = new FileReader();
            reader.onload = function(e){
                var src = e.target.result;
                parent.append('<img src="'+src+'" class="upload-thumb">');
                parent.css("background", "#ffffff");
            }
            reader.readAsDataURL($(this)[0].files[0]);
        }

        else {
            $(this)[0].select();
            $(this)[0].blur();
            var imgSrc = document.selection.createRange().text;
            parent.append('<img class="upload-thumb">');
            parent.css("background", "#ffffff");

            var img = $(this).siblings('.upload-display').find('img');
            img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";        
        }
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