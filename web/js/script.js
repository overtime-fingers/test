$(document).ready(function () {
    
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