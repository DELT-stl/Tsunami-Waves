jQuery(document).ready(function ($) {
    $('.slanted img').on('click', function () {
        //        $(this)[0].scrollIntoView({behavior:'smooth', block:'start'});
        //        window.location.replace("http://127.0.0.1:44261/test.html");
        //        $(this).css({'position':'absolute', 'right':'0'});
        //        $('.visit-store').css({'overflow':'visible'});
        //        $(this).parent().animate({'height' : '100vh'});
        //        $(this).parent().animate({'width' : '100vw'});
        //        $(this).parent().parent().css({'position' : 'absolute', 'height' : '100vh'});
        //        $(this).parent().parent().css({'top' : '0'});
        //        $(this).animate({'height':'100vh'});
        //        $(this).animate({'width':'100vw'});
        //        $(this).animate({'top' : '0'});
        //        $(this).css({'position':'fixed'});
        //        $('.visit-store').css({'overflow':'visible', 'height':'100vh'});
        //        $('.visit-store row').css({'overflow':'visible', 'height':'100vh'});
        //        $('.visit-store col-sm-4').css({'overflow':'visible', 'height':'100vh'});
        //        $('.visit-store').css({'height':'100vh'});
        //        $(this)[0].scrollIntoView({behavior:'smooth', block:'start'});
        //        $(this).addClass('increase');
        //        $(this).parent().addClass('increase');
        //        $(this).parent().css({'position':'absolute'});
        //        $(this).parent().css({'left':'0'});
        //        $(this).animate({'width':'100vw'});

        //        $(this).parent().animate({'height':'90vh'});
        //        $(this).parent().parent().animate({'max-width':'100vw'});
        //        $(this).parent().parent().animate({'max-width':'100vw'});
        //        position: absolute;
        //	bottom: 0px;
        //	left: 50%;
        //	transform: translateX(-50%)


        //          $(this).css({'z-index':'2'});
        //        $(this).parent().css({'z-index':'2'});
        //        $(this).parent().parent().css({'position':'absolute'});
        //        $(this).parent().parent().css({'left':'50%'});
        //        $(this).parent().parent().css({'top':'0'});
        //        $(this).parent().parent().css({'transform':'scale(3)'});

        //        $(this).css({'transform':'scale(3)'});
        //         $(this).css({'position':'fixed'});
        //         $(this).css({'left':'0'});
        var scrollTop = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance = (elementOffset - scrollTop);
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var l = $(this).offset().left;
        var right = w - l;
        var scaleX = w / $(this).width();
        var scaleY = h / $(this).height();
        //        console.log($(this).height());
        //        console.log($(this).width());
        //        console.log(w);
        console.log(scaleX);
        //         $(this).parent().css({'transform':'scale(3)'});
        $(this).parent().parent().parent().parent().css({
            //            'z-index':'3',
            //            'position': 'fixed'
        });
        $(this).css({
            'z-index': '2'
        });
        $('.visit-store').css({
            "transform": "skew(0deg)",
            "-webkit-transform": "skew(0deg)",
            "-ms-transform": "skew(0deg)"
        });
        $(this).parent().find('.slantedin').append('<div class="placeholder"></div>')
        $(this).parent().css({
            'position': 'absolute',
            left: l,
            'z-index': '2'
            //            'left': '-50%',
            //            'transform': 'scale(' + scaleX + ')'
        });
        $(this).parent().animate({
            'left': '0',
            //            'left': '0',
            'top': '-' + distance,
            'height': '80vh',
            //                    'height':'90vh',
            //                                'transform': 'scale(' + scaleX + ')'
            //            'transform': 'scale(' + scaleX + ',' + scaleY + ')'
            'width': '100vw'

        });

    });

});
