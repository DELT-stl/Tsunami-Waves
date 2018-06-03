jQuery(document).ready(function ($) {
    if (Modernizr.history) {
//        initClicky();
        $('.slanted').on('click', 'a', function (event) {
            event.preventDefault();
            event.stopPropagation();
            _href = $(this).attr('href');
            history.pushState(null, null, _href);
            growTransition($(this).closest('.slanted'));
        });
        $(window).bind("popstate", function () {
            link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
            fadeTransition(link);
        });
        $("li").on("click", "a", function (event) {
            event.preventDefault();
            event.stopPropagation();

            var _href = $(this).attr("href");
            //            alert(_href);
            //            alert('clicked');

            // change the url without a page refresh and add a history entry.
            history.pushState(null, null, _href);
            fadeTransition(_href);
        });
    } else {}
}); // ready jquery
function initClicky() {
    //    var grow = function (event) {
    //        growTransition($(this));
    //    };
    //    $('.slanted').on('click', grow);
    //    $('.slanted').on('click', growTransition())
    //    $('.slanted').on('click', function () {
    //        growTransition($(this).parent().parent().parent());
    //    });
    var grow = function (event) {
        growTransition($(this).closest('.slanted'));
        alert('hello');
    };
    $('.slanted').on('click', 'a', function (event) {
        event.preventDefault();
        event.stopPropagation();
        history.pushState(null, null, _href);
        grow();
    });
}

function pushState(href) {
    history.pushState('', 'New URL: ' + href, href);
    window.onpopstate = function (event) {
        location.reload();
                event.preventDefault();
    };
    //    initClicky();
}

function growTransition(obj) {
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
        $('.original-content').html('');
        var href = obj.find('a').attr('href');
        console.log(href);
        $('#content-div').css({
            'opacity': '0'
        }).load(href + ' #content-div').animate({
            'opacity': '1'
        }, 400, function() {
            initClicky();
        });
        $('html').scrollTop(0);
//                pushState(href);
    }, 1000);
}

function fadeTransition(href = window.location.href) {

    $('.fader').css({
        'position': 'absolute',
        'height': '150vh',
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
            initClicky();
        });
    });
}
