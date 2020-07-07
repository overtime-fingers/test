var bannerEventImg;
const FILE_UPLOAD_MAX = 5;   
const UPLOAD_EMPTY_TEXT = '파일선택'
const UPLOAD_CLASS_NAME = Object.freeze({
    TXT_FILE_NUM : 'txt-file-num',
    FILE_TAG : 'upload-hidden',
    FILE_LABEL : 'upload-name',
    BTN_DELETE : 'btn-del-file',
});

const uploadElements = {
    fileLabel : null,
    btnDel : null,
    txtNum : null,
    init : function () {
        this.fileLabel = $('.'+UPLOAD_CLASS_NAME.FILE_LABEL);
        this.btnDel = $('.'+UPLOAD_CLASS_NAME.BTN_DELETE);
        this.txtNum = $('.'+UPLOAD_CLASS_NAME.TXT_FILE_NUM);
    }
}

$(window).on('load', function () {
    // 바꿀 이미지 선택
    bannerEventImg = $('.event .event-banner .slider-wrap img');
    
});

$(document).ready(function(){
    // 바꿀 이미지 선택
    bannerEventImg = $('.event .event-banner .slider-wrap img');
    imgChange(bannerEventImg);
    
    // 이벤트 페이지 배너 영역 슬라이드
    $('.event-banner .slider-wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: false,
    });

    // 이벤트 페이지 배너 영역 슬라이드
    $('.best-wrap .slider-wrap').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
        ]
    });

    $('.photo-wrap .slider-lg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.photo-wrap .slider-sm',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: true,
                    asNavFor: false,
                }
            },
        ]
    });

    $('.photo-wrap .slider-sm').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.photo-wrap .slider-lg',
        focusOnSelect: true
    });

    // 태그 추가 및 초기화
    addTag('.file-wrap', FILE_UPLOAD_MAX);
    uploadElements.init();

    addFileEvent();
    deleteFileEvent();
});

/* 반응형 */
$(window).resize(function () {
    // 바꿀 이미지 선택
    imgChange(bannerEventImg);
});

// 라벨, 삭제 버튼 요소 추가
function addTag(obj, count){
    var clsNameObj = UPLOAD_CLASS_NAME;
    for(var i=1; i<=count; i++){
        var tag = '';
        tag += '<div class="file-item"><span class="txt-file-num">파일' + i + '</span><button id="btn-del' + i + '" class="btn ' + clsNameObj.BTN_DELETE + '" value="' + i + '">X</button>';
        tag += '<input class="' + clsNameObj.FILE_LABEL + '" id="inputFileName' + i +'" value="' + UPLOAD_EMPTY_TEXT + '" disabled="disabled" type="text"></div>';
        $(obj).append(tag);                      
    }
}

// 파일 태크 요소 추가
function addFileTag(obj){
    $(obj).append('<input type="file" id="ex_filename" class="' + UPLOAD_CLASS_NAME.FILE_TAG + '">');
}

// 파일 등록 이벤트 추가
function addFileEvent(){
    $('.btn-file-select').on('click', function(){
        var clsObjName = UPLOAD_CLASS_NAME;
        var fileTagEls = $('.' + clsObjName.FILE_TAG);

        if(fileTagEls.length > FILE_UPLOAD_MAX-1){
            return alert('파일 개수 초과');
        }

        if(isFileTagAddCheck(fileTagEls) == true){
            addFileTag('.file-wrap');
            fileTagEls = $('.' + clsObjName.FILE_TAG);
        }

        var index = fileTagEls.length - 1;
        var targetObj= $(fileTagEls)[index];

        $(targetObj).on('change', function(){
            $($('.' + clsObjName.FILE_LABEL)[index]).val(getFileName(this));
            $($('.' + clsObjName.BTN_DELETE)[index]).show();
            $($('.' + clsObjName.TXT_FILE_NUM)[index]).hide();
        });

        $(targetObj).click();
    });
}

// 파일 태그 추가 전 체크
// 추가 해야하면 true
function isFileTagAddCheck(objEls) {
    var index = $(objEls).length - 1;
    if(index < 0){
        return true;
    }
    var lastFileTag = $(objEls)[index];
    if(lastFileTag.files.length == 0){
        return false;
    }
    return true; 
}

// 파일이름 가져오기
function getFileName(obj){
    return (window.FileReader ? $(obj)[0].files[0].name : $(obj).val().split('/').pop().split('\\').pop());
}

// 파일 삭제 이벤트
function deleteFileEvent() {
    var clsNameObj = UPLOAD_CLASS_NAME;
    $('.' + clsNameObj.BTN_DELETE).on('click', function () {
        var fileTagEls = $('.' + clsNameObj.FILE_TAG);
        var index = this.value - 1;

        fileTagEls[index].remove();
        fileTagEls = $('.' + clsNameObj.FILE_TAG);

        setViewByTag( uploadElements.fileLabel, uploadElements.btnDel, fileTagEls, uploadElements.txtNum );
    });
}

// 파일 태그와 라벨 뷰 매핑
function setViewByTag (labelEls, btnDelEls, tagEls, txtNUM) {
var tagCount = $(tagEls).length;
    for(var i=0; i<tagCount; i++){
        var tagTargetEl = $(tagEls[i]);
        var filaName = getFileName(tagTargetEl);
        $(labelEls[i]).val( filaName );
    }
    $(labelEls[tagEls.length]).val(UPLOAD_EMPTY_TEXT);
    $(btnDelEls[tagEls.length]).hide();
    $(txtNUM[tagEls.length]).show();
}