jQuery(document).ready(function ($) {
    $('.slanted').on('click', function () {
        growTransition($(this));
    });
    $('.main-menu ul li').on('click', function () {
        fadeTransition($(this));
    });



    $(window).on('popstate', function (evt) {
//        alert(window.location.href);
        location.reload();
    });



    //    var href = window.location();
    //    history.pushState('', 'New URL: ' + href, href);
    //    window.onpopstate = function (event) {
    //        fadeTransition();
    //        location.reload();
    //    };
    //    event.preventDefault();
//    $(window).on('navigate', function (event, data) {
//            var direction = data.state.direction;
//            if (direction == 'back') {
//                // do something
//                console.log('back');
//            }
//            if (direction == 'forward') {
//                // do something else
//                console.log('forward');
//            }
//
//    });


//    if (window.history && window.history.pushState) {
//        href = window.location.href;
//        //        href = location.href;
//        window.history.pushState('back', null, href, href);
//
//        $(window).on('popstate', function () {
////            alert('Back button was pressed.');
//        });
//
//    }


});

function fadeTransition(obj) {
    var href = obj.data('url');
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
            pushState(href);
        });
    });
    //    }).siblings('.slider-transition').css({
    //        'opacity': '0'
    //    }).load('/mission.html .slider-transition',
    //        function () {
    //            $('.fader').animate({
    //                'left': '100vw'
    //            });
    //        $(this).animate({
    //            'opacity':'1'
    //        });
    //            pushState(href);
    //        }
    //    );
    //    .animate({
    //        'left': '100vw'

}

function pushState(href) {
    history.pushState('', 'New URL: ' + href, href);
    window.onpopstate = function (event) {
        location.reload();
    };
    event.preventDefault();

}

function growTransition(obj) {
    //        var obj = $(this);
    var scroll = $(window).scrollTop(),
        elementOffset = $('.anchor').offset().top,
        distance = (elementOffset - scroll);
    //            w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    //            h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    //            l = $(this).offset().left;
    //        $('.original-page').html('');
    //        $('html').scrollTop(0);
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
        'position': 'fixed'
    }).animate({
        'left': '0',
        'top': '-' + distance,
        //            'top':'0',
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
