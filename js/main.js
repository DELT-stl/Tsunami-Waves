jQuery(document).ready(function ($) {
    if (Modernizr.history) {
        initClicky();
        $('.slanted').on('click', function() {
            growTransition($(this));
        });
        $(window).bind("popstate", function () {
            link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
            fadeTransition(link);
        });
        //        alert('supported');
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
    } else {

    }

    // load the content
    //                        loadContent(_href);

    //    $(window).on('popstate', function (evt) {
    //        fadeTransition();
    //    });
    //    var fade = function (event) {
    //        fadeTransition($(this).data('url'));
    //    };
    //    $('.main-menu ul li').on('click', fade);
    //    initClicky();
}); // ready jquery


function initClicky() {
//    var grow = function (event) {
//        growTransition($(this));
//    };
//    $('.slanted').on('click', grow);
//    $('.slanted').on('click', growTransition())
    $('.slanted').on('click', function (){
        growTransition($(this));
    });


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

function pushState(href) {
    history.pushState('', 'New URL: ' + href, href);
    window.onpopstate = function (event) {
        location.reload();
//        event.preventDefault();
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
        var href = obj.data('url');
        console.log(href);
        $('#content-div').css({
            'opacity': '0'
        }).load(href + ' #content-div').animate({
            'opacity': '1'
        });
        $('html').scrollTop(0);
        pushState(href);
    }, 1000);
}
