jQuery(document).ready(function ($) {
    console.log('document ready');
    if (Modernizr.history) {
        $(window).bind("popstate", function () {
            link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
            //            alert(link);
            fadeTransition(link);
        });
        $('body').on('click', 'a', function (event) {
            event.preventDefault();
            event.stopPropagation();
        })
        $("li").on("click", "a", function (event) {
            var _href = $(this).attr("href");
            history.pushState(null, null, _href);
            fadeTransition(_href);
        });
        $('body').on('click', 'button a', function () {
            _href = $(this).attr('href');
            //        alert('grow variable');
            console.log('grow variable');
            history.pushState(null, null, _href);
            growTransition($(this).closest('.slanted'));
        });
    } else {}
}); // ready jquery
function initClicky() {
    if (typeof grow == 'undefined') {
        var grow = function (event) {
            //        growTransition($(this).closest('.slanted'));
            //        alert('hello');
            event.preventDefault();
            event.stopPropagation();
            _href = $(this).attr('href');
            //        alert('grow variable');
            console.log('grow variable');
            history.pushState(null, null, _href);
            growTransition($(this).parent().parent().parent());
        };
    }
    $('.slanted').on('click', 'a', grow);
    //    $('.slanted').on('click', 'a', function (event) {
    //        event.preventDefault();
    //        event.stopPropagation();
    //        _href = $(this).attr('href');
    //        history.pushState(null, null, _href);
    //        growTransition($(this).parent().parent().parent());
    ////        grow();
    //    });
}

function pushState(href) {
    //    history.pushState('', 'New URL: ' + href, href);
    //    window.onpopstate = function (event) {
    //        location.reload();
    //        event.preventDefault();
    //    };
    //    initClicky();
}

function growTransition(obj, href = window.location.href) {
    var scroll = $(window).scrollTop(),
        elementOffset = $('.anchor').offset().top,
        distance = (elementOffset - scroll);
    obj.parent().siblings().animate({
        'opacity': '0'
    }).closest('.anchor').siblings().animate({
        'opacity': '0'
    });
    $('.anchor .wrapper').css({
        "transform": "skew(0deg)",
        "-webkit-transform": "skew(0deg)",
        "-ms-transform": "skew(0deg)"
    });
    if (obj.offset().top < scroll) {
        d = distance * -1;
        $('.anchor').animate({
            'margin-top': d
        });
    }
    obj.css({
        'position': 'absolute'
    }).animate({
        'left': '0',
        'top': '-' + distance,
        'height': '80vh',
        'width': '100vw'
    }).parent().css({
        'z-index': '2'
    }).find('.slantedin').animate({
        'opacity': '0'
    });
    setTimeout(function () {
        $('.anchor').css({
            'margin-top': '0'
        });
        obj.css({
            'position': 'relative',
            'top': '0'
        }).parent().css({
            'padding-left': '0',
            'padding-right': '0'
        }).siblings().html('').css({
            'display': 'none'
        });
        //        $('.original-content').remove();
        //        $(this).parents('.anchor').siblings().not('#content-div').remove();
        obj.parents('.anchor').siblings().not('#content-div').remove();
        //        var href = obj.find('a').attr('href');
        //        alert(href);
        $('#content-div').css({
            //        $('.slider-transition').css({
            'opacity': '0'
        }).load(href + ' #content-div', function() {
            $(this).addClass('slider-transition');
        }).animate({
            //        }).load(href + ' .slider-transition').animate({
            'opacity': '1'
        }, 400, function () {
            //            initClicky();
        });
        $('html').scrollTop(0);
        //                pushState(href);
    }, 1000);
}

function fadeTransition(href = window.location.href) {
//    var scroll = $(window).scrollTop();
//            $("html").scrollTop(scroll);
    // yada
    var h = $(document).height();
    $('.fader').css({
        'position': 'fixed',
        'height': h,
        'width': '0',
        'left': '0',
        'top': '0',
        'color': 'black',
        'background-color': 'black',
        'z-index': '3'
    }).animate({
        'width': '100vw',
    }, 400, function () {
        $('.slider-transition').load(href + ' .slider-transition', function () {
            //            EXECUTES ON CALLBACK
            $('.fader').animate({
                'left': '100vw'
            });
            //            pushState(href);
            //            initClicky();
        });
    });
}
