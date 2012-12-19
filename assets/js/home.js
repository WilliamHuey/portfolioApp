
$(document).ready(function(){
    $('head').append("<style id='stylesTest'></style>");
    $(window).resize(function() {
        $('#stylesTest').html('#noShow{width:' + ($(window).width())/16 + 'em; }');
    });


});