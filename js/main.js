jQuery(document).ready(function($) {
    $('.slanted img').on('click', function() {
//        $(this)[0].scrollIntoView({behavior:'smooth', block:'start'});
        window.location.replace("http://127.0.0.1:44261/test.html");
        $(this).css({'position':'absolute', 'right':'0'});
        $('.visit-store').css({'overflow':'visible'});
        $(this).parent().animate({'height' : '100vh'});
        $(this).parent().animate({'width' : '100vw'});
        $(this).parent().parent().css({'position' : 'absolute', 'height' : '100vh'});
        $(this).parent().parent().css({'top' : '0'});
        $(this).animate({'height':'100vh'});
        $(this).animate({'width':'100vw'});
        $(this).animate({'top' : '0'});
        $(this).css({'position':'fixed'});
//        $('.visit-store').css({'overflow':'visible', 'height':'100vh'});
//        $('.visit-store row').css({'overflow':'visible', 'height':'100vh'});
//        $('.visit-store col-sm-4').css({'overflow':'visible', 'height':'100vh'});
//        $('.visit-store').css({'height':'100vh'});
        $(this)[0].scrollIntoView({behavior:'smooth', block:'start'});
//        $(this).addClass('increase');
//        $(this).parent().addClass('increase');
//        $(this).parent().css({'position':'absolute'});
//        $(this).parent().css({'left':'0'});
//        $(this).animate({'width':'100vw'});

    });

});
