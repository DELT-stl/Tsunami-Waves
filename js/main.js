jQuery(document).ready(function ($) {
    $('.slanted').on('click', function () {
        growTransition($(this));
    });
    $('.main-menu ul li').on('click', function () {
        fadeTransition($(this).data('url'));
        href = window.location.href;
        pushState(href);
    });

    $(window).on('popstate', function (evt) {
        fadeTransition();
        //        href=window.location.href;
        //    history.pushState('', 'New URL: ' + href, href);
        //        location.reload();
    });
}); // ready jquery

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

            //            putting this here in callback
            $('.slanted').on('click', function () {
                growTransition($(this));
            });
            $('.main-menu ul li').on('click', function () {
                fadeTransition($(this).data('url'));
                href = window.location.href;
                pushState(href);
            });
//            here

        });
    });
}

function pushState(href) {
    history.pushState('', 'New URL: ' + href, href);
    window.onpopstate = function (event) {
        location.reload();
    };
    //    event.preventDefault();

}

function growTransition(obj) {
    var scroll = $(window).scrollTop(),
        elementOffset = $('.anchor').offset().top,
        distance = (elementOffset - scroll);
    obj.parent().siblings().animate({
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
    $('#content-div *, .original-page *').animate({
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
        var href = obj.data('url');
        console.log(href);
        $('#content-div').css({
            'opacity': '0'
        }).load(href + ' #content-div').animate({
            'opacity': '1'
        });
        $('html').scrollTop(0);
        // HISTORY.PUSHSTATE
        pushState(href);

    }, 1000);
}
