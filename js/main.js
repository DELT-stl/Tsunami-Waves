jQuery(document).ready(function ($) {
    $('.slanted img').on('click', function () {
        var scroll= $(window).scrollTop(),
            elementOffset = $('.anchor').offset().top,
            distance = (elementOffset - scroll),
            w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            l = $(this).offset().left,
            right = w - l,
            scaleX = w / $(this).width(),
            scaleY = h / $(this).height();
//        $('.original-page').html('');
//        $('html').scrollTop(0);
        $('.anchor').css({
//            'position':'fixed'
        });
        $('.visit-store').css({
            "transform": "skew(0deg)",
            "-webkit-transform": "skew(0deg)",
            "-ms-transform": "skew(0deg)"
        });
        $(this).parent().find('.slantedin').animate({
            'opacity':'0'
        });
        $(this).parent().css({
            'position': 'absolute',
        });
        $(this).parent().parent().css({
            'z-index':'2'
        });
        $(this).parent().animate({
            'left': '0',
            'top': '-' + distance,
//            'top':'0',
            'height': '80vh',
            'width': '100vw'

        });


    });

});
